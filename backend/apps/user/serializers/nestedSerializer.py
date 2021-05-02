from rest_framework import serializers
from django.contrib.auth import get_user_model
from apps.grade.serializers import GradeSerializer


User = get_user_model()

class NestedUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email','first_name', 'last_name','about','profile_picture']