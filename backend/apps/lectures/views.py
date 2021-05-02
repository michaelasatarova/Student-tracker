# lectures/views.py

from .models import Lecture, Program, LectureWeek, Lesson
from .serializers.serializers import LectureSerializer, ProgramSerializer, \
    LectureWeekSerializer, LessonSerializer,\
    ProgramGlobalSerializer, WeekSerializer

from rest_framework import generics, filters
from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['GET'])
def apiOverview(request):
    return Response("API BASE POINT", safe=False)

class LectureList(generics.ListAPIView):
    """
    List Lecture
    """
    search_fields = ['title']
    filter_backends = (filters.SearchFilter,)
    queryset = Lecture.objects.all().order_by('week', 'weekday')
    serializer_class = LectureSerializer

class LectureDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Show / Update / Delete one Lecture
    """
    queryset = Lecture.objects.all()
    serializer_class = LectureSerializer

class LectureCreate(generics.ListCreateAPIView):
    """
    Create a Lecture
    """
    queryset = Lecture.objects.all()
    serializer_class = LectureSerializer

class LectureListByProgram(generics.ListAPIView):
    """
    Show LecturesLayout by Program
    """
    serializer_class = LectureSerializer
    def get_queryset(self):
        id = self.kwargs.get('program_id')
        return Lecture.objects.filter(programs=id)

class LectureListByWeek(generics.ListAPIView):
    """
    Show Lectures by LectureWeek
    """
    serializer_class = LectureSerializer
    def get_queryset(self):
        id = self.kwargs.get('lectureweek_id')
        return Lecture.objects.filter(week=id)


class ProgramList(generics.ListAPIView):
    """
    List Program
    """
    search_fields = ['name']
    filter_backends = (filters.SearchFilter,)
    queryset = Program.objects.all().order_by('name')
    serializer_class = ProgramSerializer

class ProgramDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Show / Update / Delete one Program
    """
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer

class ProgramCreate(generics.ListCreateAPIView):
    """
    Create a  Program
    """
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer

class LectureWeekList(generics.ListAPIView):
    """
    List LectureWeek
    """
    search_fields = ['title']
    filter_backends = (filters.SearchFilter,)
    queryset = LectureWeek.objects.all()
    serializer_class = LectureWeekSerializer

class LectureWeekDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Show / Update / Delete one LectureWeek
    """
    queryset = LectureWeek.objects.all()
    serializer_class = LectureWeekSerializer

class LectureWeekCreate(generics.ListCreateAPIView):
    """
    Create a LectureWeek
    """
    queryset = LectureWeek.objects.all()
    serializer_class = LectureWeekSerializer

class LectureWeekListByProgram(generics.ListAPIView):
    """
    Show LectureWeeks by Program
    """
    serializer_class = LectureWeekSerializer
    def get_queryset(self):
        id = self.kwargs.get('program_id')
        return LectureWeek.objects.filter(programs=id)


class LessonList(generics.ListAPIView):
    """
    List Lesson
    """
    search_fields = ['title']
    filter_backends = (filters.SearchFilter,)
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer


class LessonDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Show / Update / Delete one Lesson
    """
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer


class LessonCreate(generics.ListCreateAPIView):
    """
    Create a Lesson
    """
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer


class LessonListByProgram(generics.ListAPIView):
    """
    Show Lessons by Program
    """
    serializer_class = LessonSerializer

    def get_queryset(self):
        id = self.kwargs.get('program_id')
        return Lesson.objects.filter(programs=id)

# DON´T TOUCH
class ProgramGlobalOverview(generics.ListAPIView):
    """  
    'GET: Creating global project overwiew'
    """
    queryset = Program.objects.all()
    # queryset = Program.objects.raw('')
    serializer_class =  ProgramGlobalSerializer

class WeekGlobalOverview(generics.ListAPIView):
    """  
    'GET: Week overwiew'
    """
    queryset = LectureWeek.objects.all()
    serializer_class = WeekSerializer

class LectureGlobalOverview(generics.ListAPIView):
    """  
    'GET: Lecture overwiew'
    """
    queryset = Lecture.objects.all()
    serializer_class = LectureSerializer



###
class ProgramSingleOverview(generics.RetrieveAPIView):
    """  
    'GET: Creating global project overwiew'
    """
    lookup_url_kwarg = 'program_id'
    queryset = Program.objects.all()
    # queryset = Program.objects.raw('')
    serializer_class =  ProgramGlobalSerializer
