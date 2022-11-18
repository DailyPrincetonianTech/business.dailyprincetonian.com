'''Defines the AdvertisementOption model and its schema.'''

from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
import sqlalchemy as sa
from app.database import db


class AdvertisementOption(db.Model):
    id               = sa.Column(sa.Integer, primary_key = True)
    advertisement_id = sa.Column(sa.Integer, sa.ForeignKey("advertisement.id"), nullable = False)
    label            = sa.Column(sa.String, nullable = False)
    cost             = sa.Column(sa.Float, nullable = False)
    
    
class _AdvertisementOptionSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = AdvertisementOption
        load_instance = True
        include_fk = True

# Singleton instance of schema to be imported.
advertisement_option_schema = _AdvertisementOptionSchema()