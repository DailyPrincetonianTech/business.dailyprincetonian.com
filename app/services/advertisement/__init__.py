'''Advertisement repository to encapsulate database operations.'''

from attrs import define

from app.database import db
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



def create_advertisement(dto: AdvertisementObjectOptions):
    '''
    Creates an advertisement in the database,
    while also creating the appropriate constituent
    objects, such as AdvertisementOption, AdvertisementAsterisk,
    AdvertisementPopup objects, in the database as well.
    
    @return: errors, where errors is a list of errors that occurred during
    the creation process. If errors is empty, then the advertisement has been
    created successfully.
    '''
    
    # Is returned to the caller and includes any errors that has occurred.
    # If errors is empty, then the advertisement has been created successfully.
    errors = []
    
    
    # Check if passed-in DTO is valid.
    if (dto is None):
        errors.append("No DTO was provided.")
        return errors
    try:
        dto.validate()
    except Exception as e:
        errors.append("Invalid DTO passed in:", e)
        return errors

    # Check if advertisement with the same title/audience_id 
    # combination already exists.
    if (Advertisement.query.filter_by(title=dto.title, audience_id=dto.audience_id).first() is not None):
        errors.append("An advertisement with the same title and audience ID already exists.")
        return errors


    # Create the advertisement.
    try:
        advertisement = Advertisement(
            title = dto.title,
            audience_id = dto.audience_id,
            image_url = dto.image_url,
            clickable = dto.popup is not None
        )
        
        db.session.add(advertisement)
        db.session.flush()
    except IntegrityError:
        errors.append("Audience ID does not exist: " + str(dto.audience_id))
        db.session.rollback()
        return errors
    except Exception as e:
        errors.append(str(e))
        db.session.rollback()


    # Create advertisement options.
    try:
        for option_label, cost in zip(dto.option_labels, dto.costs):
            advertisement_option = AdvertisementOption(
                advertisement_id = advertisement.id,
                label = option_label,
                cost  = cost
            )
            db.session.add(advertisement_option)
            db.session.flush()
    except Exception as e:
        errors.append(str(e))
        db.session.rollback()
    
    # Create asterisks.
    try:
        if dto.asterisks:
            for asterisk in dto.asterisks:
                advertisement_asterisk = AdvertisementAsterisk(
                    advertisement_id = advertisement.id,
                    label = asterisk
                )
                db.session.add(advertisement_asterisk)
                db.session.flush()
    except Exception as e:
        errors.append(str(e))
        db.session.rollback()
            
    # Create popup.
    try:
        if dto.popup:
            advertisement_popup = AdvertisementPopup(
                advertisement_id = advertisement.id,
                description = dto.popup
            )
            db.session.add(advertisement_popup)
            db.session.flush()
    except Exception as e:
        errors.append(str(e))
        db.session.rollback()

    # We are rollbacking here regardless of whether there
    # are any objects in the session if errors exist.
    if errors:
        db.session.rollback()
    
    # Will either have errors or be empty.
    return errors



def delete_advertisement_by_id(advertisement_id):
    # Is returned to the caller and includes any errors that has occurred.
    # If errors is empty, then the advertisement has been created successfully.
    errors = []
    

    # Check if advertisement exists.
    advertisement = Advertisement.query.filter_by(id = advertisement_id).first()
    if advertisement is None:
        errors.append("No advertisement with the given title and audience ID exists.")
        return errors
    
    
    # Delete constituent objects.
    # Delete all existing options for the advertisement.
    try:
        preexisting_options = AdvertisementOption.query.filter_by(advertisement_id = advertisement_id).all() 
        for preexisting_option in preexisting_options:
            db.session.delete(preexisting_option)
            db.session.flush()
    except Exception as e:
        errors.append(str(e))
        db.session.rollback()
    
    # Delete all existing asterisks for the advertisement.
    try:
        preexisting_asterisks = AdvertisementAsterisk.query.filter_by(advertisement_id = advertisement_id).all() 
        for preexisting_asterisk in preexisting_asterisks:
            db.session.delete(preexisting_asterisk)
            db.session.flush()
    except Exception as e:
        errors.append(str(e))
        db.session.rollback()
        
    # Delete existing popup for the advertisement.
    try:
        hasPopup = False
        preexisting_popup = AdvertisementPopup.query.filter_by(advertisement_id = advertisement_id).first()
        if preexisting_popup:
            db.session.delete(preexisting_popup)
            db.session.flush()
    except Exception as e:
        errors.append(str(e))
        db.session.rollback()
        
    # Delete the advertisement itself.
    try:
        db.session.delete(advertisement)
        db.session.flush()
    except Exception as e:
        errors.append(str(e))
        db.session.rollback()
    
    # We are rollbacking here regardless of whether there
    # are any objects in the session if errors exist.
    if errors:
        db.session.rollback()

    # Will either have errors or be empty.
    return errors



def delete_all_advertisements():
    # Is returned to the caller and includes any errors that has occurred.
    # If errors is empty, then the advertisement has been created successfully.
    errors = []
    
    
    # Get all advertisement ids.
    advertisement_ids = [advertisement.id for advertisement in Advertisement.query.all()]
    
    # Delete each advertisement.
    for advertisement_id in advertisement_ids:
        errors = delete_advertisement_by_id(advertisement_id)
    
    # Restart the auto-incrementing id.
    try:
        db.session.execute("ALTER SEQUENCE advertisement_id_seq RESTART")
        db.session.execute("ALTER SEQUENCE advertisement_option_id_seq RESTART")
        db.session.execute("ALTER SEQUENCE advertisement_asterisk_id_seq RESTART")
        db.session.execute("ALTER SEQUENCE advertisement_popup_id_seq RESTART")
        db.session.flush()
    except Exception as e:
        errors.append(str(e) + ". Contact the administrator.")
        db.session.rollback()
    
    # We are rollbacking here regardless of whether there
    # are any objects in the session if errors exist.
    if errors:
        errors.append("Delete-all failed: Contact the administrator.")
        db.session.rollback()
    
    # Will either have errors or be empty.
    return errors