'''Advertisement repository to encapsulate database operations.'''

from typing import List

from attrs import define

from app.database import db
from sqlalchemy import delete
from sqlalchemy.exc import IntegrityError
from app.models.advertisement import Advertisement
from app.models.advertisement_option import AdvertisementOption
from app.models.advertisement_asterisk import AdvertisementAsterisk
from app.models.advertisement_popup import AdvertisementPopup
from app.models.advertisement import advertisement_schema



@define
class AdvertisementObjectOptions:
    title         : str         # Required.
    audience_id   : int         # Required.
    option_labels : list[str]   # Required.
    costs         : list[float] # Required.
    image_url     : str         # Required
    asterisks     : list[str]
    popup         : str
    
    @classmethod
    def from_excel_schema(cls, **kwargs):
        title         = str(kwargs.get("advertisement_title")).strip() if kwargs.get("advertisement_title") else None
        audience_id   = int(kwargs.get("audience_id")) if kwargs.get("audience_id") is not None else None
        option_labels = []
        costs         = []
        image_url     = str(kwargs.get("image_url")).strip() if kwargs.get("image_url") else None
        asterisks     = []
        popup         = str(kwargs.get("popup")).strip() if kwargs.get("popup") else None
        
        # If popup is empty, set it to None.
        if popup is not None and popup == "":
            popup = None
        
        # Populate asterisks if any.
        asterisks_unparsed = kwargs.get("asterisks")
        if asterisks_unparsed is not None and asterisks_unparsed.strip() != "":
            asterisks_unparsed = asterisks_unparsed.split(",")
            for asterisk in asterisks_unparsed:
                asterisk_label = asterisk.strip()
                asterisks.append(asterisk_label)
        
        # Populate option_labels and costs if any.
        # Must adhere to schema and not be empty,
        # otherwise a ValueError will be raised.
        try:
            options_unparsed = kwargs.get("options").split(",") if kwargs.get("options") else []
            for option in options_unparsed:
                option_label = str(option.split("$")[0].strip())
                option_cost  = float(option.split("$")[1].strip())
                option_labels.append(option_label)
                costs.append(option_cost)
        except:
            raise ValueError("Error parsing options and costs.")
        
        # DTO created by passed-in options. Validation step.
        dto = cls(title, audience_id, option_labels, costs, image_url, asterisks, popup)
        dto.validate()
        return dto
    
    # Wrap in try/except block.
    def validate(dto):
        try:
            # Title must exist and be a non-empty string (i.e. not just whitespace).
            if not dto.title or dto.title.strip() == "":
                raise ValueError("No title was provided.")
            
            # Audience ID must exist and be a number.
            if dto.audience_id is None:
                raise ValueError("No audience ID was provided.")
            float(dto.audience_id)
                        
            # Option labels must exist and be a list of non-empty strings (i.e. not just whitespace).
            if not dto.option_labels:
                raise ValueError("No options were provided.")
            for option_label in dto.option_labels:
                if not option_label or option_label.strip() == "":
                    raise ValueError("An option label is empty.")
            
            # Costs must exist and be a list of numbers with the same length as option_labels.
            if not dto.costs:
                raise ValueError("No costs were provided.")
            for cost in dto.costs:
                float(cost)
            if len(dto.option_labels) != len(dto.costs):
                raise ValueError("The number of options and costs do not match.")
            
            # Image URL must exist and be a non-empty string (i.e. not just whitespace).
            if not dto.image_url or dto.image_url.strip() == "":
                raise ValueError("No image URL was provided.")
            
        except AttributeError:
            raise AttributeError("Invalid advertisement object options.")
        except ValueError as e:
            raise ValueError(e)
        


def get_all_advertisements_by_audience_id(audience_id):
    advertisements = advertisement_schema.dump(
        Advertisement.query.filter_by(audience_id = audience_id).all(),
        many = True
    )
    
    return advertisements



def create_advertisements(dtos: List[AdvertisementObjectOptions]):
    '''
    Creates advertisements in the database,
    while also creating the appropriate constituent
    objects, such as AdvertisementOption, AdvertisementAsterisk,
    AdvertisementPopup objects, in the database as well.
    
    @return: errors, where errors is a list of errors that occurred during
    the creation process. If errors is empty, then the advertisements have been
    created successfully.
    '''

    # Is returned to the caller and includes any errors that has occurred.
    # If errors is empty, then the advertisement has been created successfully.
    errors = []
    

    last_advertisement = db.session.query(Advertisement).order_by(Advertisement.id.desc()).first()
    starting_advertisement_id = (last_advertisement.id + 1) if last_advertisement is not None else 1

    # Create advertisements.
    try:
        advertisement_mappings = []
        current_advertisement_id = starting_advertisement_id
        for dto in dtos:
            advertisement_mappings.append({
                "id": current_advertisement_id,
                "title": dto.title,
                "audience_id": dto.audience_id,
                "image_url": dto.image_url,
                "clickable": dto.popup is not None
            })
            current_advertisement_id += 1

        db.session.bulk_insert_mappings(
            Advertisement, 
            advertisement_mappings
        )
        db.session.flush()

    except IntegrityError as e:
        errors.append("Audience ID does not exist: " + str(dto.audience_id))
        db.session.rollback()
        return errors
    except Exception as e:
        errors.append("Error creating advertisement: " + str(e))
        db.session.rollback()


    # Create advertisement options.
    try:
        advertisement_option_mappings = []
        current_advertisement_id = starting_advertisement_id
        for dto in dtos:
            for option_label, cost in zip(dto.option_labels, dto.costs):
                advertisement_option_mappings.append({
                    "advertisement_id": current_advertisement_id,
                    "label": option_label,
                    "cost": cost
                })
            current_advertisement_id += 1

        db.session.bulk_insert_mappings(
            AdvertisementOption, 
            advertisement_option_mappings
        )
        db.session.flush()

    except Exception as e:
        errors.append("Error creating advertisement options: " + str(e))
        db.session.rollback()


    # Create advertisement asterisks.
    try:
        advertisement_asterisk_mappings = []
        current_advertisement_id = starting_advertisement_id
        for dto in dtos:
            if dto.asterisks:
                for asterisk in dto.asterisks:
                    advertisement_asterisk_mappings.append({
                        "advertisement_id": current_advertisement_id,
                        "label": asterisk
                    })
            current_advertisement_id += 1

        db.session.bulk_insert_mappings(
            AdvertisementAsterisk, 
            advertisement_asterisk_mappings
        )
        db.session.flush()

    except Exception as e:
        errors.append("Error creating advertisement asterisks: " + str(e))
        db.session.rollback()


    # Create advertisement popups.
    try:
        advertisement_popup_mappings = []
        current_advertisement_id = starting_advertisement_id
        for dto in dtos:
            if dto.popup:
                advertisement_popup_mappings.append({
                    "advertisement_id": current_advertisement_id,
                    "description": dto.popup
                })
            current_advertisement_id += 1

        db.session.bulk_insert_mappings(
            AdvertisementPopup, 
            advertisement_popup_mappings
        )
        db.session.flush()
    
    except Exception as e:
        errors.append("Error creating advertisement popups: " + str(e))
        db.session.rollback()


    # We are rollbacking here regardless of whether there
    # are any objects in the session if errors exist.
    if errors:
        db.session.rollback()
    
    # Will either have errors or be empty.
    return errors



def delete_all_advertisements():
    # Is returned to the caller and includes any errors that has occurred.
    # If errors is empty, then all advertisements have been deleted successfully.
    errors = []


    try:
        delete_statements = []

        # Delete all advertisement options.
        delete_statements.append(delete(AdvertisementOption))

        # Delete all advertisement asterisks.
        delete_statements.append(delete(AdvertisementAsterisk))

        # Delete all advertisement popups.
        delete_statements.append(delete(AdvertisementPopup))

        # Delete all advertisements.
        delete_statements.append(delete(Advertisement))

        # Execute all delete statements.
        for delete_statement in delete_statements:
            db.session.execute(delete_statement)

    except Exception as e:
        errors.append("Error deleting all advertisements: " + str(e))
        db.session.rollback()

    
    # We are rollbacking here regardless of whether there
    # are any objects in the session if errors exist.
    if errors:
        errors.append("Delete-all failed: Contact the administrator.")
        db.session.rollback()
    
    # Will either have errors or be empty.
    return errors