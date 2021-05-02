from rest_framework import serializers
from .models import Link
from apps.lectures.serializers.serializers import LectureSerializer

class LinkSerializer(serializers.ModelSerializer):
        classes = LectureSerializer(read_only=True, many=True)
        class Meta:
            model = Link
            fields = '__all__'