from firebase_admin import firestore
from app.models.rates.schema import AdditionalFeesSchema

class AdditionalFeesManager:
    def __init__(self) -> None:
        self.db = firestore.client()
        self.rates = self.db.collection("rates")

    def get(self):
        fees_dict = self.rates.document("addl_fees").get().to_dict()
        return AdditionalFeesSchema().load(fees_dict)