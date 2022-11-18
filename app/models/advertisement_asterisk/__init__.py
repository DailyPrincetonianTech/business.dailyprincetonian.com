'''Defines the AdvertisementAsterisk model and its schema.'''

from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
import sqlalchemy as sa
from app.database import db


class AdvertisementAsterisk(db.Model):
    id               = sa.Column(sa.Integer, primary_key = True)
    advertisement_id = sa.Column(sa.Integer, sa.ForeignKey("advertisement.id"), nullable = False)
    label            = sa.Column(sa.String, nullable = False)
    
    
class _AdvertisementAsteriskSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = AdvertisementAsterisk
        load_instance = True
        include_fk = True

# Singleton instance of schema to be imported.
advertisement_asterisk_schema = _AdvertisementAsteriskSchema()