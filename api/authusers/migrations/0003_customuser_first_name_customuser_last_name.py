# Generated by Django 4.0.6 on 2022-08-14 08:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authusers', '0002_alter_customuser_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='first_name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='customuser',
            name='last_name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
