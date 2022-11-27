from unittest import TestCase

from app.services.advertisement import AdvertisementObjectOptions

class TestAdvertisementObjectOptions(TestCase):
    '''Tests advertisement service classes and functions.'''


    #########
    # Tests #
    #########
    
    def test_dto_from_excel_schema(self):
        test_values_excel = {
            "advertisement_title": "Test Advertisement",
            "audience_id": 3,
            "options": "Option 1 $2.00, Option 2 $4.00, Option 3 $2.99",
            "asterisks": "Asterisk 1, Asterisk 2, Asterisk 3",
            "popup": "Popup text"
        }
        dto = AdvertisementObjectOptions.from_excel_schema(**test_values_excel)
        assert dto.title == "Test Advertisement"
        assert dto.audience_id == 3
        assert dto.option_labels == ["Option 1", "Option 2", "Option 3"]
        assert dto.costs == [2.00, 4.00, 2.99]
        assert dto.asterisks == ["Asterisk 1", "Asterisk 2", "Asterisk 3"]
        assert dto.popup == "Popup text"
    
    def test_dto_title(self):
        # Dummy data passed from excel sheet with empty advertisement_title.
        test_values_excel = {
            "advertisement_title": "",
            "audience_id": 1,
            "options": "Option 1 $2.00, Option 2 $4.00, Option 3 $2.99",
            "asterisks": "Asterisk 1, Asterisk 2, Asterisk 3",
            "popup": "Popup text"
        }
        self.assertRaises(ValueError, AdvertisementObjectOptions.from_excel_schema, **test_values_excel)
        
        test_values_dto = {
            "title": "",
            "audience_id": 1,
            "option_labels": ["Option 1", "Option 2", "Option 3"],
            "costs": [2.00, 4.00, 2.99],
            "asterisks": ["Asterisk 1", "Asterisk 2", "Asterisk 3"],
            "popup": "Popup text"
        }
        dto = AdvertisementObjectOptions(**test_values_dto)
        self.assertRaises(ValueError, dto.validate)
        
        # Non-string title.
        test_values_dto = {
            "title": 100,
            "audience_id": 1,
            "option_labels": ["Option 1", "Option 2", "Option 3"],
            "costs": [2.00, 4.00, 2.99],
            "asterisks": ["Asterisk 1", "Asterisk 2", "Asterisk 3"],
            "popup": "Popup text"
        }
        dto = AdvertisementObjectOptions(**test_values_dto)
        self.assertRaises(AttributeError, dto.validate)

        # Dummy data passed from excel with no advertisement_title key.
        test_values_excel = {
            "audience_id": 1,
            "options": "Option 1 $2.00, Option 2 $4.00, Option 3 $2.99",
            "asterisks": "Asterisk 1, Asterisk 2, Asterisk 3",
            "popup": "Popup text"
        }
        self.assertRaises(ValueError, AdvertisementObjectOptions.from_excel_schema, **test_values_excel)
        
        test_values_dto = {
            "title": "Test Title",
            "audience_id": 1,
            "option_labels": ["Option 1", "Option 2", "Option 3"],
            "costs": [2.00, 4.00, 2.99],
            "asterisks": ["Asterisk 1", "Asterisk 2", "Asterisk 3"],
            "popup": "Popup text"
        }
        dto = AdvertisementObjectOptions(**test_values_dto)
        del dto.title
        self.assertRaises(AttributeError, dto.validate)
        
        # Dummy data passed from excel with only spaces in advertisement_title.
        test_values_excel = {
            "advertisement_title": "   ",
            "audience_id": 1,
            "options": "Option 1 $2.00, Option 2 $4.00, Option 3 $2.99",
            "asterisks": "Asterisk 1, Asterisk 2, Asterisk 3",
            "popup": "Popup text"
        }
        self.assertRaises(ValueError, AdvertisementObjectOptions.from_excel_schema, **test_values_excel)
        
        test_values_dto = {
            "title": "   ",
            "audience_id": 1,
            "option_labels": ["Option 1", "Option 2", "Option 3"],
            "costs": [2.00, 4.00, 2.99],
            "asterisks": ["Asterisk 1", "Asterisk 2", "Asterisk 3"],
            "popup": "Popup text"
        }
        dto = AdvertisementObjectOptions(**test_values_dto)
        self.assertRaises(ValueError, dto.validate)
        
        # Dummy data passed from excel with None as advertisement_title value.
        test_values_excel = {
            "advertisement_title": None,
            "audience_id": 1,
            "options": "Option 1 $2.00, Option 2 $4.00, Option 3 $2.99",
            "asterisks": "Asterisk 1, Asterisk 2, Asterisk 3",
            "popup": "Popup text"
        }
        self.assertRaises(ValueError, AdvertisementObjectOptions.from_excel_schema, **test_values_excel)
        
        test_values_dto = {
            "title": None,
            "audience_id": 1,
            "option_labels": ["Option 1", "Option 2", "Option 3"],
            "costs": [2.00, 4.00, 2.99],
            "asterisks": ["Asterisk 1", "Asterisk 2", "Asterisk 3"],
            "popup": "Popup text"
        }
        dto = AdvertisementObjectOptions(**test_values_dto)
        self.assertRaises(ValueError, dto.validate)
        
        
    def test_dto_audience_id(self):
        # Dummy data passed from excel sheet with None as audience_id value.
        test_values_excel = {
            "advertisement_title": "Test Title",
            "audience_id": None,
            "options": "Option 1 $2.00, Option 2 $4.00, Option 3 $2.99",
            "asterisks": "Asterisk 1, Asterisk 2, Asterisk 3",
            "popup": "Popup text"
        }
        self.assertRaises(ValueError, AdvertisementObjectOptions.from_excel_schema, **test_values_excel)
        
        test_values_dto = {
            "title": "Test Title",
            "audience_id": None,
            "option_labels": ["Option 1", "Option 2", "Option 3"],
            "costs": [2.00, 4.00, 2.99],
            "asterisks": ["Asterisk 1", "Asterisk 2", "Asterisk 3"],
            "popup": "Popup text"
        }
        dto = AdvertisementObjectOptions(**test_values_dto)
        self.assertRaises(ValueError, dto.validate)
        
        # Dummy data passed from excel sheet with String as audience_id value.
        test_values_excel = {
            "advertisement_title": "Test Title",
            "audience_id": "Zero",
            "options": "Option 1 $2.00, Option 2 $4.00, Option 3 $2.99",
            "asterisks": "Asterisk 1, Asterisk 2, Asterisk 3",
            "popup": "Popup text"
        }
        self.assertRaises(ValueError, AdvertisementObjectOptions.from_excel_schema, **test_values_excel)
        
        test_values_dto = {
            "title": "Test Title",
            "audience_id": "Zero",
            "option_labels": ["Option 1", "Option 2", "Option 3"],
            "costs": [2.00, 4.00, 2.99],
            "asterisks": ["Asterisk 1", "Asterisk 2", "Asterisk 3"],
            "popup": "Popup text"
        }
        dto = AdvertisementObjectOptions(**test_values_dto)
        self.assertRaises(ValueError, dto.validate)
        
        # Dummy data passed from excel sheet with no audience_id key.
        test_values_excel = {
            "advertisement_title": "Test Title",
            "options": "Option 1 $2.00, Option 2 $4.00, Option 3 $2.99",
            "asterisks": "Asterisk 1, Asterisk 2, Asterisk 3",
            "popup": "Popup text"
        }
        self.assertRaises(ValueError, AdvertisementObjectOptions.from_excel_schema, **test_values_excel)
    
        test_values_dto = {
            "title": "Test Title",
            "audience_id": 1,
            "option_labels": ["Option 1", "Option 2", "Option 3"],
            "costs": [2.00, 4.00, 2.99],
            "asterisks": ["Asterisk 1", "Asterisk 2", "Asterisk 3"],
            "popup": "Popup text"
        }
        dto = AdvertisementObjectOptions(**test_values_dto)
        del dto.audience_id
        self.assertRaises(AttributeError, dto.validate)
    
    
    def test_dto_options(self):
        # Dummy data passed from excel sheet with empty options.
        test_values_excel = {
            "advertisement_title": "Test Title",
            "audience_id": 1,
            "options": "",
            "asterisks": "Asterisk 1, Asterisk 2, Asterisk 3",
            "popup": "Popup text"
        }
        self.assertRaises(ValueError, AdvertisementObjectOptions.from_excel_schema, **test_values_excel)
        
        test_values_dto = {
            "title": "Test Title",
            "audience_id": 1,
            "option_labels": [],
            "costs": [2.00, 4.00, 2.99],
            "asterisks": ["Asterisk 1", "Asterisk 2", "Asterisk 3"],
            "popup": "Popup text"
        }
        dto = AdvertisementObjectOptions(**test_values_dto)
        self.assertRaises(ValueError, dto.validate)
        
        # Dummy data passed from excel sheet with only spaces in options.
        test_values_excel = {
            "advertisement_title": "Test Title",
            "audience_id": 1,
            "options": "   ",
            "asterisks": "Asterisk 1, Asterisk 2, Asterisk 3",
            "popup": "Popup text"
        }
        self.assertRaises(ValueError, AdvertisementObjectOptions.from_excel_schema, **test_values_excel)

        test_values_dto = {
            "title": "Test Title",
            "audience_id": 1,
            "option_labels": ["  ", " "],
            "costs": [2.00, 4.00],
            "asterisks": ["Asterisk 1", "Asterisk 2", "Asterisk 3"],
            "popup": "Popup text"
        }
        dto = AdvertisementObjectOptions(**test_values_dto)
        self.assertRaises(ValueError, dto.validate)

        # Dummy data passed from excel sheet with None as options value.
        test_values_excel = {
            "advertisement_title": "Test Title",
            "audience_id": 1,
            "options": None,
            "asterisks": "Asterisk 1, Asterisk 2, Asterisk 3",
            "popup": "Popup text"
        }
        self.assertRaises(ValueError, AdvertisementObjectOptions.from_excel_schema, **test_values_excel)
        
        test_values_dto = {
            "title": "Test Title",
            "audience_id": 1,
            "option_labels": None,
            "costs": [2.00, 4.00],
            "asterisks": ["Asterisk 1", "Asterisk 2", "Asterisk 3"],
            "popup": "Popup text"
        }
        dto = AdvertisementObjectOptions(**test_values_dto)
        self.assertRaises(ValueError, dto.validate)
        
        # Dummy data passed from excel sheet with options key.
        test_values_excel = {
            "advertisement_title": "Test Title",
            "audience_id": 1,
            "asterisks": "Asterisk 1, Asterisk 2, Asterisk 3",
            "popup": "Popup text"
        }
        self.assertRaises(ValueError, AdvertisementObjectOptions.from_excel_schema, **test_values_excel)
        
        test_values_dto = {
            "title": "Test Title",
            "audience_id": 1,
            "option_labels": ["Label 1", "Label 2"],
            "costs": [2.00, 4.00],
            "asterisks": ["Asterisk 1", "Asterisk 2", "Asterisk 3"],
            "popup": "Popup text"
        }
        dto = AdvertisementObjectOptions(**test_values_dto)
        del dto.option_labels
        self.assertRaises(AttributeError, dto.validate)
        
        
    def test_dto_costs(self):
        # Dummy data passed from excel sheet with no costs in options.
        test_values_excel = {
            "advertisement_title": "Test Title",
            "audience_id": 1,
            "options": "Option 1, Option 2, Option 3",
            "asterisks": "Asterisk 1, Asterisk 2, Asterisk 3",
            "popup": "Popup text"
        }
        self.assertRaises(ValueError, AdvertisementObjectOptions.from_excel_schema, **test_values_excel)
    
        test_values_dto = {
            "title": "Test Title",
            "audience_id": 1,
            "option_labels": ["Label 1", "Label 2"],
            "costs": [2.00, 4.00],
            "asterisks": ["Asterisk 1", "Asterisk 2", "Asterisk 3"],
            "popup": "Popup text"
        }
        dto = AdvertisementObjectOptions(**test_values_dto)
        del dto.costs
        self.assertRaises(AttributeError, dto.validate)
    
        # Dummy data passed from excel sheet with too little costs.
        test_values_excel = {
            "advertisement_title": "Test Title",
            "audience_id": 1,
            "options": "Option 1 $2.99, Option 2 $1.99, Option 3",
            "asterisks": "Asterisk 1, Asterisk 2, Asterisk 3",
            "popup": "Popup text"
        }
        self.assertRaises(ValueError, AdvertisementObjectOptions.from_excel_schema, **test_values_excel)

        test_values_dto = {
            "title": "Test Title",
            "audience_id": 1,
            "option_labels": ["Label 1", "Label 2"],
            "costs": [2.00],
            "asterisks": ["Asterisk 1", "Asterisk 2", "Asterisk 3"],
            "popup": "Popup text"
        }
        dto = AdvertisementObjectOptions(**test_values_dto)
        self.assertRaises(ValueError, dto.validate)

        # Dummy data passed from excel sheet with invalid costs.
        test_values_excel = {
            "advertisement_title": "Test Title",
            "audience_id": 1,
            "options": "Option 1 $Invalid, Option 2 $1.99, Option 3 $2.99",
            "asterisks": "Asterisk 1, Asterisk 2, Asterisk 3",
            "popup": "Popup text"
        }
        self.assertRaises(ValueError, AdvertisementObjectOptions.from_excel_schema, **test_values_excel)
        
        test_values_dto = {
            "title": "Test Title",
            "audience_id": 1,
            "option_labels": ["Option 1", "Option 2", "Option 3"],
            "costs": ["Invalid", 1.99, 2.991],
            "asterisks": ["Asterisk 1", "Asterisk 2", "Asterisk 3"],
            "popup": "Popup text"
        }
        dto = AdvertisementObjectOptions(**test_values_dto)
        self.assertRaises(ValueError, dto.validate)
        
        
    def test_dto_asterisks(self):
        # Dummy data passed from excel sheet with no asterisks key.
        test_values_excel = {
            "advertisement_title": "Test Title",
            "audience_id": 1,
            "options": "Option 1 $0.99, Option 2 $1.99, Option 3 $2.99",
            "popup": "Popup text"
        }
        dto = AdvertisementObjectOptions.from_excel_schema(**test_values_excel)
        assert dto.asterisks == []
        
        # Dummy data passed from excel sheet with empty asterisks.
        test_values_excel = {
            "advertisement_title": "Test Title",
            "audience_id": 1,
            "options": "Option 1 $0.99, Option 2 $1.99, Option 3 $2.99",
            "asterisks": "",
            "popup": "Popup text"
        }
        dto = AdvertisementObjectOptions.from_excel_schema(**test_values_excel)
        assert dto.asterisks == []
        
        # Dummy data passed from excel sheet with only spaces in asterisks.
        test_values_excel = {
            "advertisement_title": "Test Title",
            "audience_id": 1,
            "options": "Option 1 $0.99, Option 2 $1.99, Option 3 $2.99",
            "asterisks": "   ",
            "popup": "Popup text"
        }
        dto = AdvertisementObjectOptions.from_excel_schema(**test_values_excel)
        assert dto.asterisks == []
        
        # Dummy data passed from excel sheet with None as asterisks value.
        test_values_excel = {
            "advertisement_title": "Test Title",
            "audience_id": 1,
            "options": "Option 1 $0.99, Option 2 $1.99, Option 3 $2.99",
            "asterisks": None,
            "popup": "Popup text"
        }
        dto = AdvertisementObjectOptions.from_excel_schema(**test_values_excel)
        assert dto.asterisks == []
        
    
    def test_dto_popup(self):
        # Dummy data passed from excel sheet with no popup key.
        test_values_excel = {
            "advertisement_title": "Test Title",
            "audience_id": 1,
            "options": "Option 1 $0.99, Option 2 $1.99, Option 3 $2.99",
            "asterisks": "Asterisk 1, Asterisk 2",
        }
        dto = AdvertisementObjectOptions.from_excel_schema(**test_values_excel)
        assert dto.popup == None
        
        # Dummy data passed from excel sheet with empty popup.
        test_values_excel = {
            "advertisement_title": "Test Title",
            "audience_id": 1,
            "options": "Option 1 $0.99, Option 2 $1.99, Option 3 $2.99",
            "asterisks": "Asterisk 1, Asterisk 2",
            "popup": ""
        }
        dto = AdvertisementObjectOptions.from_excel_schema(**test_values_excel)
        assert dto.popup == None
        
        # Dummy data passed from excel sheet with only spaces as popup.
        test_values_excel = {
            "advertisement_title": "Test Title",
            "audience_id": 1,
            "options": "Option 1 $0.99, Option 2 $1.99, Option 3 $2.99",
            "asterisks": "Asterisk 1, Asterisk 2",
            "popup": "   "
        }
        dto = AdvertisementObjectOptions.from_excel_schema(**test_values_excel)
        assert dto.popup == None
        
        # Dummy data passed from excel sheet with None as popup value.
        test_values_excel = {
            "advertisement_title": "Test Title",
            "audience_id": 1,
            "options": "Option 1 $0.99, Option 2 $1.99, Option 3 $2.99",
            "asterisks": "Asterisk 1, Asterisk 2",
            "popup": None
        }
        dto = AdvertisementObjectOptions.from_excel_schema(**test_values_excel)
        assert dto.popup == None