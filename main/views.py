from django.shortcuts import render
from django.views.generic import TemplateView
from .core import get_annual_premium
import pdb
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

@method_decorator(csrf_exempt, name='dispatch')
class Home(TemplateView):
    template_name = 'index.html'

    def post(self, request):
        address=request.POST.get('address')
        annual_premium=get_annual_premium(address)
        if annual_premium:
            return JsonResponse({'status':200, 'annual_premium':annual_premium})
        else:
            return JsonResponse({'status':404, 'error':'Address not found'})
    

