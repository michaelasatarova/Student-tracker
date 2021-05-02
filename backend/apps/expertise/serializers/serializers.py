from rest_framework import serializers
from apps.expertise.models import Expertise
from django.contrib.auth import get_user_model
from apps.user.serializers.nestedSpecialSerializer import NestedSpecialUserSerializer

User = get_user_model()


class ExpertiseSerializer(serializers.ModelSerializer):
    user = NestedSpecialUserSerializer(many=True, read_only=True)
    class Meta:
        model = Expertise
        fields ='__all__'