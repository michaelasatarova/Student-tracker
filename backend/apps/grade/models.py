from django.db import models
from django.conf import settings
from apps.lectures.models import Lecture
from apps.group.models import Group



class Grade(models.Model):
    grade = models.IntegerField()
    repository = models.CharField(
        verbose_name='repository',
        max_length=200,
        blank=False,
    )
    student = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='grades_student',
        null=True,
        blank=True
    )
    reviewer = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.RESTRICT,
        related_name='reviews_reviewer',
        null=True,
        blank=True
    )

    lecture = models.ForeignKey(
        to=Lecture,
        on_delete=models.RESTRICT,
        related_name='grades_lecture',
        null=True,
        blank=True
    )

    group = models.ForeignKey(
        to=Group,
        on_delete=models.RESTRICT,
        related_name='grades_group',
        null=True,
        blank=True
    )

    def __str__(self):
        return str(self.grade)


