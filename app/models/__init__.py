import firebase_admin
from firebase_admin import credentials

from app.config import FIREBASE_CREDENTIALS

firebase_admin.initialize_app(credentials.Certificate(FIREBASE_CREDENTIALS))