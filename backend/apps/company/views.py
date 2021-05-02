from django.shortcuts import render
from .models import Company
from .serializers import CompanySerializer
from rest_framework.generics import ListCreateAPIView, RetrieveAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import AllowAny
from apps.company.permissions import IsOwnerOrReadOnly
from rest_framework.response import Response


class CompanyList(ListCreateAPIView):
    """
    GET: List of Companies for all users
    POST: new company,
    """
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    permission_classes = [AllowAny]


class SearchByCompanyName(RetrieveAPIView):
    """
    Get specific company by name
    """
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        name = kwargs.get('name')
        queryset = self.get_queryset().filter(name__icontains=name)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

class CompanyUpdateDestroy(RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_url_kwarg = 'company_id'
    
