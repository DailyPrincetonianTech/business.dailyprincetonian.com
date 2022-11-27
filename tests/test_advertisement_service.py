from flask_testing import TestCase
from tests.config_testing import TestingConfiguration
from tests.utils import load_dummy_data_advertisements

from app import init_app
from app.database import db
from app.services.advertisement import create_advertisement
from app.services.advertisement import update_advertisement
from app.services.advertisement import AdvertisementObjectOptions
from app.models.advertisement import Advertisement
from app.models.advertisement import advertisement_schema


class TestAdvertisementService(TestCase):
    '''Tests data retrieval functions.'''

    def create_app(self):
        return init_app(TestingConfiguration)
    
    # Create a dummy database.
    def setUp(self):
        db.create_all()
        
    # Tear down the dummy database.
    def tearDown(self):
        db.session.remove()
        db.drop_all()
      
      
    #########
    # Tests #
    #########
    
    # create_advertisement() calls AdvertisementObjectOptions.validate(),
    # so we don't need to test it again as it is already tested in
    # test_advertisement_object_options.py.
    
    def test_create_advertisement(self):
        # Create a dummy advertisement.
        test_values_dto = {
            "title": "Test Advertisement",
            "audience_id": 0,
            "option_labels": ["Option 1", "Option 2", "Option 3"],
            "costs": [1.99, 2.99, 3.99],
            "asterisks": ["Asterisk 1", "Asterisk 2", "Asterisk 3"],
            "popup": None
        }
        dto = AdvertisementObjectOptions(**test_values_dto)
        successful, errors = create_advertisement(dto, False)
        
        assert successful
        assert errors == []
        
        
    def test_create_advertisement_already_exists(self):
         # Create a dummy advertisement.
        test_values_dto = {
            "title": "Test Advertisement",
            "audience_id": 0,
            "option_labels": ["Option 1", "Option 2", "Option 3"],
            "costs": [1.99, 2.99, 3.99],
            "asterisks": ["Asterisk 1", "Asterisk 2", "Asterisk 3"],
            "popup": None
        }
        dto = AdvertisementObjectOptions(**test_values_dto)
        successful, errors = create_advertisement(dto, False)
        
        # Create another dummy advertisement with the same title and audience ID.
        successful, errors = create_advertisement(dto, False)
        
        assert successful == False
        assert not errors == []
        
        
    def test_update_advertisement(self):
        # Create a dummy advertisement.
        test_values_dto = {
            "title": "Test Advertisement",
            "audience_id": 0,
            "option_labels": ["Option 1", "Option 2", "Option 3"],
            "costs": [1.99, 2.99, 3.99],
            "asterisks": ["Asterisk 1", "Asterisk 2", "Asterisk 3"],
            "popup": None
        }
        dto = AdvertisementObjectOptions(**test_values_dto)
        create_advertisement(dto, False)
        
        # Update the dummy advertisement.
        # Clickable should now be True.
        test_values_dto["popup"] = "Test Popup"
        dto = AdvertisementObjectOptions(**test_values_dto)
        update_advertisement(dto)
        
        assert Advertisement.query.count() == 1
        assert Advertisement.query.first().clickable == True
    
    def test_update_advertisement_nonexistent(self):
        # Create a dummy advertisement.
        test_values_dto = {
            "title": "Test Advertisement",
            "audience_id": 0,
            "option_labels": ["Option 1", "Option 2", "Option 3"],
            "costs": [1.99, 2.99, 3.99],
            "asterisks": ["Asterisk 1", "Asterisk 2", "Asterisk 3"],
            "popup": None
        }
        dto = AdvertisementObjectOptions(**test_values_dto)
        successful, errors = update_advertisement(dto)

        assert successful == False
        assert not errors == []
        