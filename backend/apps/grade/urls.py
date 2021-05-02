# grade/models.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.GradeList.as_view()),
    path('user/<int:user_id>/week/<int:week_id>/', views.GradeUserWeek.as_view()),
    path('program/<int:program_id>/week/<int:week_id>/', views.GradeProgramWeek.as_view()),
]
