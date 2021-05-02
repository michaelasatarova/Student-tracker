from django.db import models
from django.contrib.auth import get_user_model


class Company(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=150)
    city = models.CharField(max_length=150)
    zip_code = models.CharField(max_length=150, blank=True, null=True)
    street = models.CharField(max_length=150, blank=True, null=True)
    about = models.TextField(blank=True, null=True) 
    phone_number = models.IntegerField(unique=True, blank=True, null=True)
    email = models.EmailField(unique=True, blank=True, null=True)

def __str__(self):
    return f'Company:{self.name}'

    