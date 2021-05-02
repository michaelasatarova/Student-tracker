from django.db import models
from django.conf import settings
from  apps.user.models import User

# Create your models here.
class Group(models.Model):
    name = models.CharField(
    verbose_name='name',
    max_length=100
    )

    members = models.ManyToManyField(
    to=User,
    related_name='Group',
    blank=True,
    )

    def __str__(self):
        return f'Group: {self.name}'