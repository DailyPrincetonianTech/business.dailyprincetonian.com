'''Defines the AdvertisementPopup model and its schema.'''

from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from app.database import db


class AdvertisementPopup(db.Model):
    id               = db.Column(db.Integer, primary_key = True)
    advertisement_id = db.Column(db.Integer, db.ForeignKey("advertisement.id"), nullable = False)
    description      = db.Column(db.String, nullable = False)
    
    
class AdvertisementPopupSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = AdvertisementPopup
        load_instance = True
        include_fk = True

# Singleton instance of schema to be imported.
advertisement_popup_schema = AdvertisementPopupSchema()