# Generated by Django 3.1.4 on 2021-01-29 09:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lectures', '0007_auto_20210128_0926'),
        ('link', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='link',
            name='classes',
            field=models.ManyToManyField(blank=True, null=True, related_name='Link', to='lectures.Lecture'),
        ),
    ]