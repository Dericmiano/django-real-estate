# Generated by Django 3.2.7 on 2023-09-02 11:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("properties", "0003_alter_property_total_floors"),
    ]

    operations = [
        migrations.AddField(
            model_name="property",
            name="bedrooms",
            field=models.IntegerField(default=1, verbose_name="Bedrooms"),
        ),
    ]
