from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Quote(models.Model):
	title = models.CharField(max_length=30)
	author = models.CharField(max_length=100)
	quote_text = models.TextField()
	image = models.CharField(max_length=30)
	active = models.BooleanField()
	ordering = models.IntegerField()
	create_date = models.DateTimeField(auto_now_add=True)
	modify_date = models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.title;