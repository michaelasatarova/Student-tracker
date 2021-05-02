from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.filters import SearchFilter, OrderingFilter
from django.contrib.auth import get_user_model
from apps.user.serializers.serializers import PublicUserSerializer, PrivateUserSerializer
from django.utils.decorators import method_decorator
from drf_yasg.utils import swagger_auto_schema
from rest_framework.permissions import AllowAny
from django.db.models import Q
from rest_framework import generics
from rest_framework.response import Response
from apps.lectures.models import Program


User = get_user_model()

class ListUsersView(ListCreateAPIView):
    """
    List all users. Filter with (chainable) query parameters of pattern \\<attribute>__<lookup_name>=\\<value>.
    """
    serializer_class = PublicUserSerializer
    queryset = User.objects.all()

    def create(self, validated_data):
        program_name = validated_data.data.pop('program')
        program = Program.objects.get(name=program_name)
        user = User.objects.create(**validated_data.data, program=program)
        return Response(self.get_serializer(instance=user).data)



class RetrieveUserView(RetrieveAPIView):
    """
    Retrieve a user.
    """
    queryset = User
    lookup_url_kwarg = 'user_id'
    serializer_class = PublicUserSerializer


class RetrieveUpdateCurrentUserView(RetrieveUpdateDestroyAPIView):
    """
    Get: admin current log in user: ME

    Patch: update your information

    Delete: your profile 
    """
    serializer_class = PrivateUserSerializer

    def get_object(self):
        return User.objects.get(id=self.request.user.id)


class SearchByName(ListAPIView):
    """
    Search user by name
    """
    serializer_class = PrivateUserSerializer
    def get_queryset(self):
        return User.objects.filter(Q(first_name__icontains=self.kwargs['ref']) | Q(last_name__icontains=self.kwargs['ref']) | Q(username__icontains=self.kwargs['ref']), status=self.request.query_params.get('status') )

class SearchAllStudents(generics.ListAPIView):
    """
    Get all students
    """
    queryset = User.objects.all()
    serializer_class = PrivateUserSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return self.queryset.filter(status='Student')

class SearchAllAdmins(generics.ListAPIView):
    """
    Get all admins
    """
    queryset = User.objects.all()
    serializer_class = PrivateUserSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return self.queryset.filter(status='Teacher')

