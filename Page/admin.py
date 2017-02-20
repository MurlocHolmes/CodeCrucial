from django.contrib import admin

# Register your models here.

from .models import QuotePage, AboutPage
# Register your models here.

admin.site.register(QuotePage)
admin.site.register(AboutPage)