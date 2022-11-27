from flask import Blueprint, request, render_template, redirect, current_app
from openpyxl import load_workbook

from app.database import db
from app.models.advertisement import Advertisement
from app.services.advertisement import AdvertisementObjectOptions, create_advertisement



blueprint = Blueprint("upload", __name__)

# GET/POST /upload
@blueprint.route("/upload", methods = ["GET", "POST"])
def upload():
    
    # If GET, then render the upload page.
    if request.method == "GET":
        return render_template("/upload/index.html")
    
    
    # If POST, then check authorization credentials.
    if request.method == "POST":
        if request.form.get("upload_auth_token") == current_app.config["UPLOAD_AUTH_TOKEN"]:
            # If authorized, then validate and process the file.
            file = request.files.get("file")
            if not file:
                return render_template("/upload/index.html", response = "No file was uploaded.")
            
            errors = []
            if _validateFile(file, errors) and _processFile(file, errors):    
                return render_template("/upload/index.html", response = "File uploaded successfully.")
            # File did not pass validation or processing.
            return render_template("/upload/index.html", response = "File upload failed.", errors = errors)

        # Authorization failed.
        return render_template("/upload/index.html", response = "Invalid authorization token.")
    
    
    
def _validateFile(file, errors):
    VALID_EXTENSIONS = ["XSL", "XLSX"]
    
    # Check if file has a valid extension.
    if file.filename.split(".")[-1].upper() not in VALID_EXTENSIONS:
        errors.append("Invalid file extension.")
        return False
    
    # File is valid.
    return True
    
    
    
def _processFile(file, errors):
    COLUMN_NAMES = ["audience_id", "advertisement_title", "options", "asterisks", "popup"]
    data = load_workbook(file).worksheets[0]
    
    first_row = True
    for row in data.iter_rows():
        # Skip first row as it is the column names,
        # or if the row is empty.
        if first_row or row[0].value is None:
            first_row = False
            continue
        
        # Compile row data.
        values = {}
        for cell in row:
            if cell.value is not None:
                values[COLUMN_NAMES[cell.column - 1]] = cell.value
        
        # Create objects from compiled data.
        try:
            dto = AdvertisementObjectOptions.from_excel_schema(**values)
            _, creation_errors = create_advertisement(dto, True)
            for error in creation_errors:
                    errors.append("Row " + str(row[0].row) + ": " + error)
                    
        except Exception as e:
            errors.append(e)

            

    # Errors exist, so return False.
    if errors:
        return False
    
    # File was processed successfully.
    return True