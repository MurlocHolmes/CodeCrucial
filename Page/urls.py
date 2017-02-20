from django.conf.urls import url

from . import views

app_name = 'page'
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^submit_contact$', views.submit_contact, name='submit_contact'),
]