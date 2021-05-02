
from django.urls import path
from .views import ExpertiseList, EpertiseRetrieveUpdateDestroy, SearchExpertiseByName, ListUserExpertiseView


urlpatterns = [
    path('', ExpertiseList.as_view()),
    path('<int:expertise_id>/', EpertiseRetrieveUpdateDestroy.as_view()),
    path('search/<str:ref>/', SearchExpertiseByName.as_view()),
    path('user/', ListUserExpertiseView.as_view()),
]
