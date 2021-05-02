from rest_framework import serializers
from .models import Grade
from django.db.models import Avg


class GradeSerializer(serializers.ModelSerializer):
    avg = serializers.SerializerMethodField()

    def get_avg(self, instance):
        return Grade.objects.filter(student=instance.student).aggregate(Avg('grade'))

    class Meta:
        model = Grade
        fields = ['id', 'grade', 'student', 'avg']


class NestedGradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade
        fields = ['id', 'grade']
