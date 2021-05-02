from django.urls import path

from .views import ListCreateNewLink, RetrieveUpdateDestroyLink

urlpatterns = [
    path('', ListCreateNewLink.as_view()),
    path('<int:pk>/', RetrieveUpdateDestroyLink.as_view()),
]