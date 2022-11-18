'''Defines the AdvertisementPopup model and its schema.'''

from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
import sqlalchemy as sa
from app.database import db


class AdvertisementPopup(db.Model):
    id               = sa.Column(sa.Integer, primary_key = True)
    advertisement_id = sa.Column(sa.Integer, sa.ForeignKey("advertisement.id"), nullable = False)
    description      = sa.Column(sa.String, nullable = False)
    
    
class _AdvertisementPopupSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = AdvertisementPopup
        load_instance = True
        include_fk = True

# Singleton instance of schema to be imported.
advertisement_popup_schema = _AdvertisementPopupSchema()