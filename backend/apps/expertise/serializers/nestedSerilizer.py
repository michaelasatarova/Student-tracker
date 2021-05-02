from rest_framework import serializers
from apps.expertise.models import Expertise


class NestedExpertiseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expertise
        fields ='__all__'