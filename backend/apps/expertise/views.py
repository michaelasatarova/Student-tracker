from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import filters
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .serializers.serializers import ExpertiseSerializer
from .models import Expertise

class ExpertiseList(ListCreateAPIView):
    """
    GET: List of all Expertises for all users
    POST: new Expertise
    """
    queryset = Expertise.objects.all()
    serializer_class = ExpertiseSerializer
 

class EpertiseRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    """
    GET: get current expertise
    PATCH: Edit current expertise
    DELETE: delete current expertise
    """
    queryset = Expertise.objects.all()
    serializer_class = ExpertiseSerializer
    lookup_url_kwarg = 'expertise_id'

class SearchExpertiseByName(ListAPIView):
    """
    GET: get current expertise, search by name
    """
    queryset = Expertise.objects.all()
    serializer_class = ExpertiseSerializer

    def get(self, request, *args, **kwargs):
        name = kwargs.get('ref')
        queryset = self.get_queryset().filter(name__icontains=name)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)



class UserFilterBackend(filters.BaseFilterBackend):
    def filter_queryset(self, request, queryset, view):
        return queryset.filter(user=request.user)

class ListUserExpertiseView(ListAPIView):
    """
    filtering by log in user
    """
    queryset = Expertise.objects.all()
    serializer_class = ExpertiseSerializer
    filter_backends = [UserFilterBackend]