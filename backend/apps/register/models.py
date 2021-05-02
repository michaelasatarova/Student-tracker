from django.conf import settings
from django.db import models
import random


def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class RegistrationProfile(models.Model):
    objects = None
    code = models.CharField(default=code_generator, max_length=5)
    code_used = models.BooleanField(default=False)
    user = models.OneToOneField(to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE,
                                related_name='register')

