"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views
from apps.lectures.urls import urlpatterns_lectures, urlpatterns_programs, \
    urlpatterns_lectureweeks, urlpatterns_lessons
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
# from django.conf import settings
# from django.conf.urls.static import static


# Documentation configuration
schema_view = get_schema_view(
    openapi.Info(
        title="Students Tracker API",
        default_version='v1',
        description="Creating student performance tracker",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="learn@propulsionacademy.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,  # Set to False to restrict access to protected endpoints
    permission_classes=(permissions.AllowAny,)  # Permissions for docs access
)

urlpatterns = [
    # ADMIN
    path('backend/admin/', admin.site.urls),
     
    # Documentation
    path('backend/api/docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    
    # Registration
    path('backend/api/registration/', include('apps.email_validation.urls')),
    path('backend/api/comment/', include('apps.comment.urls')),
    path('backend/api/link/', include('apps.link.urls')),

    # Authentication
    path('backend/api/auth/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('backend/api/auth/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('backend/api/auth/token/verify/', jwt_views.TokenVerifyView.as_view(), name='token_refresh'),

    #Grade
    path('backend/api/grade/', include('apps.grade.urls')),

    #Group
    path('backend/api/group/', include('apps.group.urls')),

    # LecturesLayout and Programs
    path('backend/api/lectures/', include(urlpatterns_lectures)),
    path('backend/api/programs/', include(urlpatterns_programs)),
    path('backend/api/lectureweeks/', include(urlpatterns_lectureweeks)),
    path('backend/api/lessons/', include(urlpatterns_lessons)),

    # User
    path('backend/api/users/', include('apps.user.urls')),

    # Company
    path('backend/api/company/', include('apps.company.urls')),

    # Expertise
    path('backend/api/expertise/', include('apps.expertise.urls')),

]

# if settings.DEBUG:
#     urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
#     urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)