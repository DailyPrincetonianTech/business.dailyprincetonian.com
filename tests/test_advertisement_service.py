from flask_testing import TestCase
from tests.config_testing import TestingConfiguration

from app import init_app
from app.database import db

from app.services.advertisement import AdvertisementObjectOptions
from app.services.advertisement import create_advertisement
from app.models.advertisement import Advertisement
from app.models.advertisement import advertisement_schema


class TestAdvertisementService(TestCase):
    '''Tests data retrieval functions.'''

    def create_app(self):
        return init_app(TestingConfiguration)
    
    # Create a dummy database.
    def setUp(self):
        db.create_all()
        db.engine.execute("pragma foreign_keys=ON")
        
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
    
    def test_create_advertisement_already_exists(self):
         # Create a dummy advertisement.
        test_values_dto = {
            "title": "Test Advertisement",
            "audience_id": 0,
            "option_labels": ["Option 1", "Option 2", "Option 3"],
            "costs": [1.99, 2.99, 3.99],
            "image_url": "https://assets.dailyprincetonian.com/business.dailyprincetonian.com/web-leaderboard.png",
            "asterisks": ["Asterisk 1", "Asterisk 2", "Asterisk 3"],
            "popup": None
        }
        dto = AdvertisementObjectOptions(**test_values_dto)
        errors = create_advertisement(dto)
        
        # Create another dummy advertisement with the same title and audience ID.
        errors = create_advertisement(dto)

        # Hard-coded error message.    
        assert errors == ["An advertisement with the same title and audience ID already exists."]
    
