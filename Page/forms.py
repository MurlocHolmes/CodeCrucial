from django.forms import ModelForm, Textarea
from .models import ContactPage

class ContactForm(ModelForm):
	class Meta:
		model = ContactPage
		fields = ['full_name', 'email_address', 'telephone_number', 'title', 'text']
		labels = {
			'text': ('Message')
		}

