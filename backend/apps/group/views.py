from django.shortcuts import render
from .models import Group
from .serializers import GroupSerializer
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView

from django.contrib.auth import get_user_model

User = get_user_model()


class GroupList(ListCreateAPIView):
    """
    GET: List of all Groups for all members
    POST: new Group,
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

    def perform_create(self, serializer):
        group = serializer.save()

        if (self.request.data['members']):
            for member in self.request.data['members']:
                user = User.objects.get(id=member)
                group.members.add(user)


class GroupRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    """
    GET: get current group
    PATCH: Edit current group
    DELETE: delete current group
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    lookup_url_kwarg = 'group_id'


class SearchGroupByName(ListAPIView):
    """
    GET: get current group, search by member
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

    def get(self, request, *args, **kwargs):
        name = kwargs.get('ref')
        queryset = self.get_queryset().filter(name__icontains=name)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

