from django.shortcuts import render
from .models import Link
from .serializers import LinkSerializer
from rest_framework.generics import  ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response


# Create your views here.

class ListCreateNewLink(ListCreateAPIView):
    """
    get:
    List all Links.
    post:
    Create a new Link.
    """
    queryset = Link.objects.all()
    serializer_class = LinkSerializer

    def perform_create(self, serializer):
        link = serializer.save()
        if (self.request.data["classes"]):
            lecture = Lecture.objects.get(id=self.request.data["classes"])
            link.classes.add(lecture)

class RetrieveUpdateDestroyLink(RetrieveUpdateDestroyAPIView):
    """
    get:
    Retrive Link.

    patch:
    Update Link.

    delete:
    Delete Link.
    """
    queryset = Link.objects.all()
    serializer_class = LinkSerializer

