from .models import Comment
from .serializers import CommentSerializer
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
# Create your views here.

class CommentListByUser(ListAPIView):
    """
    Show Comments done by a user
    """
    serializer_class = CommentSerializer

    def get_queryset(self):
        id = self.kwargs.get('user_id')
        return Comment.objects.filter(user=id)

class ListCreateComment(ListCreateAPIView):
    """
    get:
    List all Comments.
    post:
    Create a new Comment.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)


class CommentDetail(RetrieveUpdateDestroyAPIView):
    """
    get:
    Retrive Comments.

    patch:
    Update Comments.

    delete:
    Delete Comments.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
