from django.urls import path
from .views import CompanyList, SearchByCompanyName, CompanyUpdateDestroy

urlpatterns = [
    path('', CompanyList.as_view()),
    path('<int:company_id>/', CompanyUpdateDestroy.as_view()),
    path('search/<str:name>/', SearchByCompanyName.as_view())
] 



