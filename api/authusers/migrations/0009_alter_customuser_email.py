# Generated by Django 4.0.6 on 2022-08-21 11:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authusers', '0008_alter_customuser_email_alter_customuser_first_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True, unique=True),
        ),
    ]
