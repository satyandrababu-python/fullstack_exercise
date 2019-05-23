from django.urls import path, include
from gls_app.views import Home, serve
from django.views.generic import TemplateView

urlpatterns = [
    path('', Home.as_view(template_name="index.html"), name='home'),
    path('get_guide/', serve, name='serve_guide')
]