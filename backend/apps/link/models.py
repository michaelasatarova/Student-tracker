from django.db import models
from django.conf import settings
from  apps.lectures.models import Lecture

# Create your models here.
class Link(models.Model):
    name = models.CharField(
    verbose_name='name',
    max_length=100
    )

    link = models.CharField(
    verbose_name='link',
    max_length=150
    )

    classes = models.ManyToManyField(
    to=Lecture,
    related_name='Link',
    blank=True,
    null=True
    )

    def __str__(self):
        return f'Link:{self.name}'