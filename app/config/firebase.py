import os
import ast

FIREBASE_CREDENTIALS: dict[str, str] = ast.literal_eval(
    os.environ["FIREBASE_CREDENTIALS"]
)