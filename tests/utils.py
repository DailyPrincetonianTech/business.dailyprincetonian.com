'''Utility functions for tests.'''

from app.models.advertisement import Advertisement

def load_dummy_data_advertisements(session):
    
    for i in range(100):
        advertisement = Advertisement()
        advertisement.audience_id = i
        advertisement.clickable = i % 2 == 0
        
        session.add(advertisement)
    
    session.commit()