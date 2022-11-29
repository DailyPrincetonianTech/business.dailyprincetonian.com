'''Defines the Advertisement model and its schema.'''

from marshmallow_sqlalchemy import SQLAlchemyAutoSchema, auto_field
from app.database import db


class Advertisement(db.Model):
    id          = db.Column(db.Integer, primary_key = True)
    title       = db.Column(db.String, nullable = False)
    audience_id = db.Column(db.Integer, db.ForeignKey("audience.id"), nullable = False)
    image_url   = db.Column(db.String, nullable = False)
    clickable   = db.Column(db.Boolean, nullable = False)
    
    
class _AdvertisementSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Advertisement
        load_instance = True
        include_fk = True
        include_relationships = True
        
# Singleton instance of schema to be imported.
advertisement_schema = _AdvertisementSchema()