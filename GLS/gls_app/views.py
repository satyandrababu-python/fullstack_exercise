from django.views.generic import TemplateView
from django.conf import settings
from django.http import HttpResponse
from GLS.config import GUIDE_FILE_PATH
import os

class Home(TemplateView):
    template_name = "index.html"

def serve(request):
    # json_file_path = 'static/json/guide.json'
    path = os.path.join(settings.BASE_DIR, GUIDE_FILE_PATH)
    with open(path , 'r') as myfile:
        data=myfile.read()
    response = HttpResponse(content=data)
    response['Content-Type'] = 'application/json'
    return response
