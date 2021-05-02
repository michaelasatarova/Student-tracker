from django.db import models
from django.contrib.auth.models import AbstractUser
from apps.lectures.models import Program
from apps.company.models import Company


# Save avatar to user specific directory in media files
def user_profile_picture_directory(instance, filename):
  return f'users/{instance.username}/{filename}'


class User(AbstractUser):
    
    # Field that is used as the unique identifier
    USERNAME_FIELD = 'email'

  # Fields that are required when using createsuperuser (username_field and password fields are required by default)
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

    # Fields that shall be treated as public and can be exposed to all logged-in users
    PUBLIC_FIELDS = ('id', 'username', 'first_name', 'last_name', 'country','about', 'country', 'city' )

  # status options
    ADMIN_STATUS = 'Teacher'
    STUDENT_STATUS = 'Student'
    STATUS_CHOICES = [
        (ADMIN_STATUS, 'Teacher'),
        (STUDENT_STATUS, 'Student'),
    ]


    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    country = models.CharField(max_length=150, blank=True, null=True)
    city = models.CharField(max_length=150, blank=True, null=True)
    zip_code = models.CharField(max_length=150, blank=True, null=True)
    street = models.CharField(max_length=150, blank=True, null=True)
    about = models.TextField(max_length=250, blank=True, null=True)
    profile_picture = models.ImageField(upload_to=user_profile_picture_directory, blank=True, null=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default=ADMIN_STATUS)
    is_staff = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)
    gitlabe_profile = models.URLField(max_length=100, null=True, blank=True)
    program = models.ForeignKey(to=Program, on_delete=models.CASCADE, related_name='students', blank=True, null=True)
    company = models.ForeignKey(to=Company, on_delete=models.CASCADE, related_name='company', null=True)
  



    # related in another model
    # registration_profile - ForeignKey field defined in RegistrationProfile model
    # expertise in expertise model
    # classes teacher
    # classes_ speaker
    # GRADES
    # review
    # comments
    # groups

    def __str__(self):
        return self.username

