from rest_framework import serializers
from apps.lectures.models import  Program



class ProgramUserNestedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = '__all__'