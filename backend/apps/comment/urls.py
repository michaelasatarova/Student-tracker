from django.urls import path

from .views import CommentListByUser, ListCreateComment, CommentDetail

urlpatterns = [
    path('user/<int:user_id>/', CommentListByUser.as_view()),
    path('', ListCreateComment.as_view()),
    path('<int:pk>/', CommentDetail.as_view()),

]