from marshmallow import Schema, fields, post_load
from app.models.rates import AdditionalFees

class AdditionalFeesSchema(Schema):
    color_premium_large = fields.Integer(required=True)
    color_premium_medium = fields.Integer(required=True)
    color_premium_small = fields.Integer(required=True)
    graphic = fields.Integer(required=True)
    media = fields.Integer(required=True)

    @post_load
    def create_additional_fees(self, data, **kwargs) -> AdditionalFees:
        return AdditionalFees(**data)