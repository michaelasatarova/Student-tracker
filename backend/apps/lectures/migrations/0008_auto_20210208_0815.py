# Generated by Django 3.1.4 on 2021-02-08 08:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lectures', '0007_auto_20210128_0926'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='lecture',
            name='date',
        ),
        migrations.AddField(
            model_name='program',
            name='end_date',
            field=models.DateField(blank=True, null=True, verbose_name='date'),
        ),
        migrations.AddField(
            model_name='program',
            name='start_date',
            field=models.DateField(blank=True, null=True, verbose_name='date'),
        ),
    ]
