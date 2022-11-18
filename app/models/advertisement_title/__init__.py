'''Defines the AdvertisementTitle model and its schema.'''

from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
import sqlalchemy as sa
from app.database import db


class AdvertisementTitle(db.Model):
    id               = sa.Column(sa.Integer, primary_key = True)
    advertisement_id = sa.Column(sa.Integer, sa.ForeignKey("advertisement.id"), nullable = False)
    label            = sa.Column(sa.String, nullable = False)
    
    
class _AdvertisementTitleSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = AdvertisementTitle
        load_instance = True
        include_fk = True

# Singleton instance of schema to be imported.
advertisement_title_schema = _AdvertisementTitleSchema()