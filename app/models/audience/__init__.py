'''Defines the Audience model and its schema.'''

from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from app.database import db


class Audience(db.Model):
    id   = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    
    
class AudienceSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Audience
        load_instance = True

# Singleton instance of schema to be imported.
audience_schema = AudienceSchema()