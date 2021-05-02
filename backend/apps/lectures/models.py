# lectures/models.py
from django.db import models
from django.conf import settings

"""

    links = Set('Link')
    grades = Set('Grade')
    """

class Lecture(models.Model):
    title = models.CharField(
        verbose_name='title',
        max_length=200,
        blank=False,
    )
    exercise = models.CharField(
        verbose_name='exercise',
        max_length=200,
        blank=True,
    )
    description = models.CharField(
        verbose_name='description',
        max_length=1000,
        blank=True,
    )
    expertise = models.CharField(
        verbose_name='expertise',
        max_length=30,
        blank=True,
    )
    programs = models.ManyToManyField(
        to='Program',
        related_name='lectures',
        blank=True
    )
    week = models.ForeignKey(
        to='LectureWeek',
        on_delete=models.RESTRICT,
        null=True,
        blank=True,
    )
    weekday = models.IntegerField(
        verbose_name='weekday',
        null=True,
        blank=True,
        choices=[(1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5')]
    )
    def __str__(self):
        return self.title


class Program(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=200,
        blank=False,
    )
    description = models.CharField(
        verbose_name='description',
        max_length=1000,
        blank=True,
    )
    start_date = models.DateField(
        verbose_name='date',
        null=True,
        blank=True,
    )
    end_date = models.DateField(
        verbose_name='date',
        null=True,
        blank=True,
    )

    def __str__(self):
        return self.name

class LectureWeek(models.Model):
    title = models.CharField(
        verbose_name='title',
        max_length=200,
        blank=False,
    )
    sort = models.PositiveIntegerField(
        verbose_name='sort',
        default=0,
    )
    class Meta:
        ordering = ['sort']

    def __str__(self):
        return self.title

class Lesson(models.Model):
    lecture = models.ForeignKey(
        to=Lecture,
        on_delete=models.SET_NULL,
        related_name='lessons',
        null=True
    )
    date = models.DateField(
        verbose_name='date',
        blank=False,
    )
    # I tried with timefield but postgres has an issue with timezone
    start_time = models.CharField(
        verbose_name='start_time',
        max_length=5,
        null=True,
        blank=True,
    )
    end_time = models.CharField(
        verbose_name='end_time',
        max_length=5,
        null=True,
        blank=True,
    )
    teacher = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.RESTRICT,
        related_name='classes_teacher',
        null=True,
        blank=True
    )
    speakers = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.RESTRICT,
        related_name='classes_speaker',
        null=True,
        blank=True
    )

    def __str__(self):
        return f'{self.lecture.title} {self.date}'



