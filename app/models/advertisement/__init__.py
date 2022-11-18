'''Defines the Advertisement model and its schema.'''

from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
import sqlalchemy as sa
from app.database import db


class Advertisement(db.Model):
    id          = sa.Column(sa.Integer, primary_key = True)
    audience_id = sa.Column(sa.Integer, sa.ForeignKey("audience.id"), nullable = False)
    clickable   = sa.Column(sa.Boolean, nullable = False)
    
    
class _AdvertisementSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Advertisement
        load_instance = True
        include_fk = True

# Singleton instance of schema to be imported.
advertisement_schema = _AdvertisementSchema()