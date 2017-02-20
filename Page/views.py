from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render
from email.header import Header
from email.mime.text import MIMEText
from getpass import getpass
from smtplib import SMTP_SSL
import json

from Quote.models import Quote
from Project.models import HomeTile
from Skill.models import Skill
from .models import AboutPage, QuotePage, ContactPage
from .forms import ContactForm

def index(request):

	# Create all the pieces for the home page; Quotes, project tiles, 
	# about section, skills, and contact form
	quotePage = QuotePage.objects.get(pk=1)
	quotes = list(Quote.objects.filter(active=True).order_by('ordering')[:quotePage.number_of_quotes])
	hometiles = HomeTile.objects.order_by('id')[:3]
	about = AboutPage.objects.order_by('create_date')[:1]
	skills = Skill.objects.filter(active=True).order_by('-rating')
	contact = ContactForm()

	# Add all the pieces to a singular context object
	context = {
		'quotePage': quotePage,
		'quotes': quotes,
		'hometiles': hometiles,
		'about': about,
		'contact': contact,
		'skills': skills
	}
	return render(request, 'home/home.html', context)

def submit_contact(request):
	# The AJAX call should only fire if it's a POST method
	if request.method == 'POST':

		# Collect the POST variables
		full_name = request.POST.get('full_name')
		email_address = request.POST.get('email_address')
		telephone_number = request.POST.get('telephone_number')
		title = request.POST.get('title')
		text = request.POST.get('text')
		# Maybe uncomment this to store in database later?
		#contactPage = ContactPage(full_name, email_address, telephone_number, title, text)
		#contactPage.save()

		# Login to gmail
		login, password = 'user@gmail.com', 'password'
		recipients = [login]
		message = ("Name: " + full_name + "\n" +
					"Email Address: " + email_address + "\n" +
					"Telephone Number: " + telephone_number + "\n" +
					"Message: " + text + "\n")
		# create message
		msg = MIMEText(message, 'plain', 'utf-8')
		msg['Subject'] = Header(title, 'utf-8')
		msg['From'] = login
		msg['To'] = login

		# send it via gmail
		s = SMTP_SSL('smtp.gmail.com', 465, timeout=10)
		s.set_debuglevel(1)
		try:
			s.login(login, password)
			s.sendmail(msg['From'], recipients, msg.as_string())
		finally:
			s.quit()
			return HttpResponse(
				json.dumps({"Message": "Successfully sent"}),
				content_type="application/json"
			)
	else:
		return HttpResponse(
			json.dumps({"nothing to see": "this isn't happening"}),
			content_type="application/json"
		)

