from django.db import models

# Create your models here.

class Project(models.Model):
	author = models.CharField(max_length=30)
	title = models.CharField(max_length=100)
	description = models.TextField()
	link = models.CharField(max_length=30)
	create_date = models.DateTimeField(auto_now_add=True)
	modify_date = models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.title;

class HomeTile(models.Model):
	project = models.ForeignKey(Project, on_delete=models.CASCADE)
	image = models.CharField(max_length=300)
	active = models.BooleanField()
	create_date = models.DateTimeField(auto_now_add=True)
	modify_date = models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.project.title;