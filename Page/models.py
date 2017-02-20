from django.db import models

# Create your models here.

class QuotePage(models.Model):
	title = models.CharField(max_length=100)
	number_of_quotes = models.IntegerField()
	transition_type = models.CharField(max_length=30)
	create_date = models.DateTimeField(auto_now_add=True)
	modify_date = models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.title;

class AboutPage(models.Model):
	author = models.CharField(max_length=30)
	title = models.CharField(max_length=100)
	images = models.CharField(max_length=300)
	text = models.TextField()
	create_date = models.DateTimeField(auto_now_add=True)
	modify_date = models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.title;

class ContactPage(models.Model):
	full_name = models.CharField(max_length=100)
	email_address = models.EmailField()
	telephone_number = models.CharField(max_length=100)
	title = models.CharField(max_length=100)
	text = models.TextField()
	create_date = models.DateTimeField(auto_now_add=True)
	modify_date = models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.title;