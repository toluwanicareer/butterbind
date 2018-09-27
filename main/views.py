from django.shortcuts import render
from django.views.generic import TemplateView
from .core import get_annual_premium, scrape
import pdb
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import requests
# Create your views here.

@method_decorator(csrf_exempt, name='dispatch')
class Home(TemplateView):
    template_name = 'index.html'

    def post(self, request):
        address=request.POST.get('address')
        #annual_premium=get_annual_premium(address)
        data=scrape(address)
        annual_premium=data['AnnualPremium']
        quote_id=data['QuoteId']
        if annual_premium:
            return JsonResponse({'status':True, 'annual_premium':annual_premium, 'quote_id':quote_id,
                                 'addresskey':data['AddressKey'], 'addressname':address})
        else:
            return JsonResponse({'status':False, 'error':'Address not found'})
    


class Quote(TemplateView):
    template_name = 'quote.html'

    def post(self, request, *args, **kwargs):
        address_key=request.POST.get('addresskey')
        address=request.POST.get('addressname')
        quote_id=request.POST.get('quote_id')
        url='https://www.swyfft.com/api/quotes/quoteid/'+quote_id
        response=requests.get(url)
        response=response.json()
        deductibles=response['Elements']
        primary_element=response['PrimaryElementName']
        replacement_price=response['ReplacementCost']
        for group in deductibles:
            if group['ElementName']==primary_element:
                deductibles_value=group['Value']
                deductibles_choices=group['Choices']
        return render(request, 'quote.html', {'annual_premium':int(response['AnnualPremium']),
                                       'address':address,
                                       'deductibles_value':deductibles_value,
                                       'deductibles_choices':deductibles_choices,
                                        'primaryElementName':primary_element,
                                       'replacement_price':replacement_price})