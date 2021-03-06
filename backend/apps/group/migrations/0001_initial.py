# Generated by Django 3.1.4 on 2021-01-29 16:04

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='name')),
                ('group', models.CharField(max_length=150, verbose_name='group')),
                ('members', models.ManyToManyField(blank=True, null=True, related_name='Group', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
