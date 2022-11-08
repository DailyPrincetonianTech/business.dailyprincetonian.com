from boto3 import resource

class DynamoDB:
    @staticmethod
    def initialize(**kwargs):
        '''Initializes the database service.'''
        
        # Initialize the database.
        DynamoDB.__db = resource(
            "dynamodb",
            region_name = kwargs["AWS_REGION"],
            aws_access_key_id = kwargs["AWS_ACCESS_KEY_ID"],
            aws_secret_access_key = kwargs["AWS_SECRET_ACCESS_KEY"]
        )
        
    @staticmethod
    def resource():
        if not DynamoDB.__db:
            raise Exception("Database not initialized.")
        # INSTEAD, PERHAPS CALL INITIALIZE()?
        # Not completely sure how to handle this.
        
        return DynamoDB.__db