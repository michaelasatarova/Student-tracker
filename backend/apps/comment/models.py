from django.db import models
from django.conf import settings

# Create your models here.


class Comment(models.Model):
     content = models.CharField(
         verbose_name='content',
         max_length=250
     )

     user = models.ForeignKey(
         verbose_name='user',
         to=settings.AUTH_USER_MODEL,
         on_delete=models.CASCADE,
         related_name='comments',
         blank=True
     )

     # grade = models.ForeignKey(
     #     to=Grade,
     #     on_delete=models.CASCADE,
     #     related_name='comments',
     #     null=True
     # )

     def __str__(self):
         return f'Comment by: {self.user.username}'