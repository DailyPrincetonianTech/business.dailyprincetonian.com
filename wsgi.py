'''
Serves as an interface between the application server and
the application code.
'''

from app import init_app
from config import ProductionConfig

app = init_app(ProductionConfig)
if __name__ == "__main__":
    app.run()