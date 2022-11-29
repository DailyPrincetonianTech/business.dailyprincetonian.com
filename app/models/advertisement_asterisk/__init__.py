'''Defines the AdvertisementAsterisk model and its schema.'''

from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from app.database import db


class AdvertisementAsterisk(db.Model):
    id               = db.Column(db.Integer, primary_key = True)
    advertisement_id = db.Column(db.Integer, db.ForeignKey("advertisement.id"), nullable = False)
    label            = db.Column(db.String, nullable = False)
    
    
class _AdvertisementAsteriskSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = AdvertisementAsterisk
        load_instance = True
        include_fk = True

# Singleton instance of schema to be imported.
advertisement_asterisk_schema = _AdvertisementAsteriskSchema()