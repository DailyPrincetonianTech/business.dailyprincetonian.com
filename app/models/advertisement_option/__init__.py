'''Defines the AdvertisementOption model and its schema.'''

from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from app.database import db


class AdvertisementOption(db.Model):
    id               = db.Column(db.Integer, primary_key = True)
    advertisement_id = db.Column(db.Integer, db.ForeignKey("advertisement.id"), nullable = False)
    label            = db.Column(db.String, nullable = False)
    cost             = db.Column(db.Float, nullable = False)
    
    
class AdvertisementOptionSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = AdvertisementOption
        load_instance = True
        include_fk = True

# Singleton instance of schema to be imported.
advertisement_option_schema = AdvertisementOptionSchema()