# lectures/admin.py
from django.contrib import admin
from .models import Lecture, Program, Lesson, LectureWeek

class LessonAdmin(admin.ModelAdmin):
    list_display = ('lecture', 'date')

class LectureInline(admin.TabularInline):
    model = Lecture

class LectureWeekAdmin(admin.ModelAdmin):
    inlines = [
        LectureInline,
    ]
admin.site.register(Lecture)
admin.site.register(Program)
admin.site.register(Lesson, LessonAdmin)
admin.site.register(LectureWeek, LectureWeekAdmin)





