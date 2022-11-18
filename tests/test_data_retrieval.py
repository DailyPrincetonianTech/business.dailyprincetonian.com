from flask_testing import TestCase
from tests.config_testing import TestingConfiguration
from tests.utils import load_dummy_data_advertisements

from app import init_app
from app.database import db
from app.models.advertisement import Advertisement
from app.models.advertisement import advertisement_schema


class TestDataRetrieval(TestCase):
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
    
    def test_advertisements_retrieval(self):
        # Load advertisement dummy data.
        load_dummy_data_advertisements(db.session)
        parsedResult = advertisement_schema.dump(Advertisement.query.all(), many = True)
        
        # TODO: Write tests.
