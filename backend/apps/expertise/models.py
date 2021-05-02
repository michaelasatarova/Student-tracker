from django.db import models
from django.conf import settings


# Create your models here.
class Expertise(models.Model):
    user = models.ManyToManyField(to=settings.AUTH_USER_MODEL, related_name='expertise')
    name = models.CharField(max_length=150, blank=False, null=False)

    def __str__(self):
        return f'Expertise: {self.name}'

