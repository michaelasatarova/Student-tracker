from .models import Grade
from .serializers import GradeSerializer
from rest_framework import generics, filters
from rest_framework.response import Response
from rest_framework.decorators import api_view


# Create your views here.
@api_view(['GET'])
def apiOverview(request):
    return Response("API BASE POINT, safe=False")

class GradeList(generics.ListCreateAPIView):
    """
    List Respository
    """
    search_fields = ['repository']
    filter_backends = (filters.SearchFilter,)
    queryset = Grade.objects.all()
    serializer_class = GradeSerializer


class GradeDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Show / Update / Delete Grades
    """
    queryset = Grade.objects.all()
    serializer_class = GradeSerializer


class GradeUserWeek(generics.ListAPIView):
    """
    Get all the grades / User / Week
    """
    serializer_class = GradeSerializer
    def get_queryset(self):
        return Grade.objects.filter(
            student_id=self.kwargs['user_id'],
            lecture__week_id=self.kwargs['week_id'],
        )


class GradeProgramWeek(generics.ListAPIView):
    """
    Get all the grades / program / Week
    """
    serializer_class = GradeSerializer

    def get_queryset(self):
        return Grade.objects.filter(
            lecture__programs__id=self.kwargs['program_id'],
            lecture__week_id=self.kwargs['week_id'],
        )




