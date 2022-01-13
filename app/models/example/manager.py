from firebase_admin import firestore

# Contains firebase admin code for the example model.

# class AdManager:
#     def __init__(self) -> None:
#         self.db = firestore.client()
#         self.ads = self.db.collection("advertisements")

#     def get(self, id: str) -> Ad:
#         return AdSchema().load(self.ads.document(id).get().to_dict())

#     def get_all(self) -> List[Ad]:
#         ads = []
#         for ad_doc in self.ads.stream():
#             ad = AdSchema().load(ad_doc.to_dict())
#             if (
#                 ad.active.start <= dt.datetime.now().date()
#                 and ad.active.end >= dt.datetime.now().date()
#             ):
#                 ads.append(ad)
#         return ads