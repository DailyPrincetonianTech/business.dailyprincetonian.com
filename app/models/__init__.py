'''Imports all submodules of models package'''

from app.models import advertisement_asterisk
from app.models import advertisement_option

# These imports must be at the bottom to have access
# to the above constituent models. Audience must be
# below advertisement so it has access to it.
from app.models import advertisement 
from app.models import audience