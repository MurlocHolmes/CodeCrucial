from django.template import Library

register = Library()

@register.filter()
def multiply(string, times):
    return string * times

@register.filter()
def multiplyRemainder(string, times):
    return string * (10-times)

@register.simple_tag()
def multiplyRating(rating):
    return 10*rating;

# To keep things responsive, we need to mess with the alignment a little
@register.simple_tag()
def tooltipPlacement(placement):
    if(placement % 4 == 1):
    	return 'right'
    if(placement % 4 == 2):
    	return 'top'
    if(placement % 4 == 3):
    	return 'top'
    if(placement % 4 == 0):
    	return 'left'

