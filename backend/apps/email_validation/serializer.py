from rest_framework import serializers


class EmailValidationSerializer(serializers.Serializer):
    class Meta:
        email = serializers.EmailField()
