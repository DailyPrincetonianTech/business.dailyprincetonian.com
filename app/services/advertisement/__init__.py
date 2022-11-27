'''Advertisement repository to encapsulate database operations.'''

from attrs import define

from app.database import db
from app.models.advertisement import Advertisement
from app.models.advertisement_option import AdvertisementOption
from app.models.advertisement_asterisk import AdvertisementAsterisk
from app.models.advertisement_popup import AdvertisementPopup


@define
class AdvertisementObjectOptions:
    title         : str         # Required.
    audience_id   : int         # Required.
    option_labels : list[str]   # Required.
    costs         : list[float] # Required.
    asterisks     : list[str]
    popup         : str
    
    @classmethod
    def from_excel_schema(cls, **kwargs):
        title         = str(kwargs.get("advertisement_title")).strip() if kwargs.get("advertisement_title") else None
        audience_id   = int(kwargs.get("audience_id")) if kwargs.get("audience_id") is not None else None
        option_labels = []
        costs         = []
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
        dto = cls(title, audience_id, option_labels, costs, asterisks, popup)
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
            
        except AttributeError:
            raise AttributeError("Invalid advertisement object options.")
        except ValueError as e:
            raise ValueError(e)
        


def update_advertisement(dto: AdvertisementObjectOptions):
    '''
    Update a preexisting advertisement in the database
    by updating the appropriate constituent objects,
    such as AdvertisementOption, AdvertisementAsterisk,
    AdvertisementPopup objects, in the database as well.
    
    @return: (successful, errors), where successful is a boolean indicating
    whether the advertisement was successfully created, and errors is a list
    of errors that occurred during the creation process if successful is False.
    '''

    # Is returned as the second element in the return value
    # and includes any errors that has occurred. If no errors
    # have occurred, then the advertisement has been created successfully.
    errors = []
    
    # Check if passed-in DTO is valid.
    if (dto is None):
        errors.append("No DTO was provided.")
        return (False, errors)
    try:
        dto.validate()
    except Exception as e:
        errors.append("Invalid DTO passed in:", e)
        return False, errors
    
    

    advertisement = Advertisement.query.filter_by(title = dto.title, audience_id = dto.audience_id).first()
    if advertisement is None:
        errors.append("No advertisement with the given title and audience ID exists.")
        return False, errors
    
    # Id of the advertisement to be edited.
    advertisement_id = advertisement.id
    
    
    
    # Drop all existing options for the advertisement.
    preexisting_options = AdvertisementOption.query.filter_by(advertisement_id = advertisement_id).all() 
    for preexisting_option in preexisting_options:
        db.session.delete(preexisting_option)
        
    # Add new options for the advertisement.
    for i in range(len(dto.option_labels)):
        advertisement_option = AdvertisementOption(
            advertisement_id = advertisement_id,
            label = dto.option_labels[i],
            cost = dto.costs[i]
        )
        db.session.add(advertisement_option)



    # Drop all existing asterisks for the advertisement.
    preexisting_asterisks = AdvertisementAsterisk.query.filter_by(advertisement_id = advertisement_id).all() 
    for preexisting_asterisk in preexisting_asterisks:
        db.session.delete(preexisting_asterisk)
    
    # Add new asterisks for the advertisement.
    if dto.asterisks is not None:
        for asterisk in dto.asterisks:
            advertisement_asterisk = AdvertisementAsterisk(
                advertisement_id = advertisement_id,
                label = asterisk
            )
            db.session.add(advertisement_asterisk)
        
    
    
    # Drop all existing popups for the advertisement.
    hasPopup = False
    preexisting_popup = AdvertisementPopup.query.filter_by(advertisement_id = advertisement_id).first()
    if preexisting_popup:
        db.session.delete(preexisting_popup)
    
    # Add new popup for the advertisement.
    if dto.popup is not None:
        advertisement_popup = AdvertisementPopup(
            advertisement_id = advertisement_id,
            description = dto.popup
        )
        hasPopup = True
        db.session.add(advertisement_popup)
    
    # Update the advertisement's clickable field
    advertisement = Advertisement.query.filter_by(id = advertisement_id).first()
    advertisement.clickable = hasPopup
        


    # Commit changes to database.
    try:
        db.session.commit()
    except Exception as e:
        errors.append(e)
        return False, errors
    
    return True, []
        
    

def create_advertisement(dto: AdvertisementObjectOptions, update_existing: bool):
    '''
    Creates an advertisement in the database,
    while also creating the appropriate constituent
    objects, such as AdvertisementOption, AdvertisementAsterisk,
    AdvertisementPopup objects, in the database as well.
    
    If update_existing is True, then the advertisement with the same title
    and audience ID will be updated.
    
    @return: (successful, errors), where successful is a boolean indicating
    whether the advertisement was successfully created, and errors is a list
    of errors that occurred during the creation process if successful is False.
    '''
    
    # Is returned as the second element in the return value
    # and includes any errors that has occurred. If no errors
    # have occurred, then the advertisement has been created successfully.
    errors = []
    
    
    # Check if passed-in DTO is valid.
    if (dto is None):
        errors.append("No DTO was provided.")
        return False, errors
    try:
        dto.validate()
    except Exception as e:
        errors.append("Invalid DTO passed in:", e)
        return False, errors
    
    
    # Create advertisement object.
    advertisement = Advertisement(
        title = dto.title,
        audience_id = dto.audience_id,
        clickable = dto.popup is not None
    )
    
    # Check if title/audience_id combination already exists.
    # If so, then either update or return False and an error message if update_existing is false.
    if advertisement.query.filter_by(title = dto.title, audience_id = dto.audience_id).first() is not None:
        if update_existing is True:
            _, updating_errors = update_advertisement(dto)
            if updating_errors:
                return False, updating_errors
            return True, []
        else:
            errors.append("An advertisement with the same title and audience ID already exists: \"" + dto.title + "\", " + str(dto.audience_id))
            return False, errors

    # Otherwise, create the advertisement.
    db.session.add(advertisement)
    db.session.flush() # Flush to get the ID of the advertisement.
    
    
    # Create advertisement options.
    for option_label, cost in zip(dto.option_labels, dto.costs):
        advertisement_option = AdvertisementOption(
            advertisement_id = advertisement.id,
            label = option_label,
            cost  = cost
        )
        db.session.add(advertisement_option)
        
    
    # Create asterisks.
    if dto.asterisks:
        for asterisk in dto.asterisks:
            advertisement_asterisk = AdvertisementAsterisk(
                advertisement_id = advertisement.id,
                label = asterisk
            )
            db.session.add(advertisement_asterisk)
            
    
    # Create popup.
    if dto.popup:
        advertisement_popup = AdvertisementPopup(
            advertisement_id = advertisement.id,
            description = dto.popup
        )
        db.session.add(advertisement_popup)
        

    # Commit changes to database.
    try:
        db.session.commit()
    except Exception as e:
        errors.append(e)
        return False, errors
    
    return True, []