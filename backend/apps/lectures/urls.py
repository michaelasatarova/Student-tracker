# lectures/models.py
from django.urls import path
from . import views


urlpatterns_lectures = [
    path('', views.LectureList.as_view()),
    path('<int:pk>/', views.LectureDetail.as_view()),
    path('new/', views.LectureCreate.as_view()),
    path('program/<int:program_id>/', views.LectureListByProgram.as_view()),
    path('lectureweek/<int:lectureweek_id>/', views.LectureListByWeek.as_view()),
    path('?search=<search_string>/', views.LectureList.as_view()),
]
urlpatterns_programs = [
    path('', views.ProgramList.as_view()),
    path('<int:pk>/', views.ProgramDetail.as_view()),
    path('new/', views.ProgramCreate.as_view()),
    path('?search=<search_string>/', views.ProgramList.as_view()),
    path('global/', views.ProgramGlobalOverview.as_view()),
    path('week/', views.WeekGlobalOverview.as_view()),
    path('lecture/', views.LectureGlobalOverview.as_view()),
    path('global/<int:program_id>/', views.ProgramSingleOverview.as_view()),
]
urlpatterns_lectureweeks = [
    path('', views.LectureWeekList.as_view()),
    path('<int:pk>/', views.LectureWeekDetail.as_view()),
    path('new/', views.LectureWeekCreate.as_view()),
    path('?search=<search_string>/', views.LectureWeekList.as_view()),
]
urlpatterns_lessons = [
    path('', views.LessonList.as_view()),
    path('<int:pk>/', views.LessonDetail.as_view()),
    path('new/', views.LessonCreate.as_view()),
    path('?search=<search_string>/', views.LessonList.as_view()),
]
