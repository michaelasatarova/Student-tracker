from rest_framework import serializers
from django.contrib.auth import get_user_model
from apps.grade.serializers import GradeSerializer
from apps.expertise.serializers.nestedSerilizer import NestedExpertiseSerializer

User = get_user_model()

class NestedSpecialUserSerializer(serializers.ModelSerializer):
    expertise = NestedExpertiseSerializer(many = True, read_only=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'email','first_name', 'last_name','about','profile_picture','expertise']