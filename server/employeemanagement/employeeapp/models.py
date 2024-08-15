from django.db import models

# Create your models here.

class Employee(models.Model):
    name = models.CharField(max_length=100)
    place = models.CharField(max_length=100)
    email = models.EmailField()
    salary = models.PositiveIntegerField()
    phone = models.CharField(max_length=100)
   