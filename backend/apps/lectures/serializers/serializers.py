from rest_framework import serializers
from apps.lectures.models import Lecture, Program, LectureWeek, Lesson

from apps.user.serializers.serializers import GlobalUserSerializer
from apps.grade.serializers import GradeSerializer
from apps.user.serializers.nestedSerializer import NestedUserSerializer


class LectureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lecture
        fields = '__all__'

class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = '__all__'

class LectureWeekSerializer(serializers.ModelSerializer):
    class Meta:
        model = LectureWeek
        fields = '__all__'


# DON´T TOUCH
class WeekSerializer(serializers.ModelSerializer):
    title = LectureSerializer(many=True, read_only=True)
    class Meta:
        model = LectureWeek
        fields = ['id', 'title' ]


class LessonSerializer(serializers.ModelSerializer):
    teacher = NestedUserSerializer(read_only=True)
    class Meta:
        model = Lesson
        fields = '__all__'


class GlobalLectureSerializer(serializers.ModelSerializer):
    lessons = LessonSerializer(many=True, read_only=True)
    grades_lecture = GradeSerializer(many=True, read_only=True)
    # week = WeekSerializer(many=True, read_only=True)
    class Meta:
        model = Lecture
        fields = '__all__'
        # fields = ['id', 'grades_lecture', 'title', 'weekday','description', 'exercise', 'title']



# MAIN CODE
class ProgramGlobalSerializer(serializers.ModelSerializer):
    students = GlobalUserSerializer(many=True, read_only=True)
    week = WeekSerializer(many=True, read_only=True)
    lectures = GlobalLectureSerializer(many=True, read_only=True)
    grades_lecture = GradeSerializer(many=True, read_only=True) 
    class Meta:
        model = Program
        fields = ['id', 'name', 'start_date', 'end_date', 'description', 'week','lectures', 'students','grades_lecture']
