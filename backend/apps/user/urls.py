from django.urls import path
from .views import ListUsersView, RetrieveUserView, RetrieveUpdateCurrentUserView, SearchByName, SearchAllStudents, \
    SearchAllAdmins

urlpatterns = [
    path('', ListUsersView.as_view()),
    path('<int:user_id>/', RetrieveUserView.as_view()),
    path('me/', RetrieveUpdateCurrentUserView.as_view()),
    path('search/<str:ref>', SearchByName.as_view()),
    path('students/', SearchAllStudents.as_view()),
    path('teachers/', SearchAllAdmins.as_view()),
]

# TO DO 
# password reset
# password test
# get students from specific program


