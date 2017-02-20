from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Skill(models.Model):
	title = models.CharField(max_length=30)
	description = models.CharField(max_length=300)
	rating = models.IntegerField();
	image = models.CharField(max_length=30)
	active = models.BooleanField()
	ordering = models.IntegerField(default=5)
	create_date = models.DateTimeField(auto_now_add=True)
	modify_date = models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.title;