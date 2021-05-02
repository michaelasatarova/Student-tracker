from rest_framework import serializers
from .models import Group
from django.contrib.auth import get_user_model
from apps.grade.serializers import GradeSerializer
from apps.expertise.serializers.nestedSerilizer import NestedExpertiseSerializer 

User = get_user_model()

class PUSerializer(serializers.ModelSerializer):
    grades_student = GradeSerializer(many=True, read_only=True)
    expertise = NestedExpertiseSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'first_name', 'last_name', 'country', 'city', 'about', 'grades_student', 'expertise', 'profile_picture']


class GroupSerializer(serializers.ModelSerializer):
    members = PUSerializer(read_only=True, many=True)
    class Meta:
        model = Group
        fields = '__all__'


class GroupNestedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'
