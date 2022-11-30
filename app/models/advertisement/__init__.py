'''Defines the Advertisement model and its schema.'''

from marshmallow_sqlalchemy import SQLAlchemyAutoSchema, fields
from app.database import db

from app.models.advertisement_option import AdvertisementOptionSchema
from app.models.advertisement_asterisk import AdvertisementAsteriskSchema
from app.models.advertisement_popup import AdvertisementPopupSchema


class Advertisement(db.Model):
    id          = db.Column(db.Integer, primary_key = True)
    title       = db.Column(db.String, nullable = False)
    audience_id = db.Column(db.Integer, db.ForeignKey("audience.id"), nullable = False)
    image_url   = db.Column(db.String, nullable = False)
    clickable   = db.Column(db.Boolean, nullable = False)
    # Constituent models.
    options     = db.relationship("AdvertisementOption", backref = "advertisement", lazy = "joined")
    asterisks   = db.relationship("AdvertisementAsterisk", backref = "advertisement", lazy = "joined")
    popup       = db.relationship("AdvertisementPopup", backref = "advertisement", lazy = "joined", uselist = False)
    
    
class AdvertisementSchema(SQLAlchemyAutoSchema):
    # Constituent models.
    options   = fields.Nested(AdvertisementOptionSchema(only = ["label"]), many = True)
    asterisks = fields.Nested(AdvertisementAsteriskSchema(only = ["label"]), many = True)
    popup     = fields.Nested(AdvertisementPopupSchema(only = ["description"]), many = False)
    
    class Meta:
        model = Advertisement
        load_instance = True
        include_fk = True
        include_relationships = True
        
# Singleton instance of schema to be imported.
advertisement_schema = AdvertisementSchema()