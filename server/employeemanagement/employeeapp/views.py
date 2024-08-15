from django.shortcuts import render
from .models import *
from .serializer import EmployeeSerializer
from rest_framework.viewsets import ModelViewSet

# Create your views here.
class EmployeeView(ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
