'''Defines the Audience model and its schema.'''

from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
import sqlalchemy as sa
from app.database import db


class Audience(db.Model):
    id   = sa.Column(sa.Integer, primary_key = True)
    name = sa.Column(sa.String, nullable = False)
    
    
class _AudienceSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Audience
        load_instance = True

# Singleton instance of schema to be imported.
audience_schema = _AudienceSchema()