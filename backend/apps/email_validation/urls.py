from django.urls import path
from apps.email_validation.views import EmailValidationListView, RegistrationValidation

#after we create a user we need to import the RegistrationValidation on line 2;

urlpatterns = [
    path('', EmailValidationListView.as_view(), name='subscribe'),
    path('validation/', RegistrationValidation.as_view(), name='validation')
]
