from django.shortcuts import render
from django.template.loader import render_to_string
from django.views.generic import TemplateView
from .core import get_annual_premium, scrape
import pdb
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import requests
from django.views import View
# Create your views here.

@method_decorator(csrf_exempt, name='dispatch')
class Home(TemplateView):
    template_name = 'index.html'

    def post(self, request):
        address=request.POST.get('address')
        #annual_premium=get_annual_premium(address)
        data=scrape(address)
        try:
            annual_premium=data['GrossAnnualPayment']
        except:
            pdb.set_trace()
            return JsonResponse({'status': False, 'error': 'Address not found'})
        quote_id=data['QuoteId']
        if annual_premium:
            return JsonResponse({'status':True, 'annual_premium':annual_premium, 'quote_id':quote_id,
                                 'addresskey':data['AddressKey'], 'addressname':address})
        else:
            return JsonResponse({'status':False, 'error':'Address not found'})
    


class Quote(TemplateView):
    template_name = 'quote.html'

    def post(self, request, *args, **kwargs):
        #pdb.set_trace()
        address_key=request.POST.get('addresskey')
        address=request.POST.get('addressname')
        quote_id=request.POST.get('quote_id')
        url='https://www.swyfft.com/api/quotes/quoteid/'+quote_id
        response=requests.get(url)
        response=response.json()
        data=render_to_include(response,address,quote_id)
        elements=response['Elements']
        data['elements']=elements
        #pdb.set_trace()
        return render(request, 'quote.html', data)

class Privacy(TemplateView):
    template_name = 'privacy.html'


class PatchQuote(View):

    def get(self,request, *args, **kwargs):
        elementname=request.GET.get('ElementName')
        quote_id=request.GET.get('quoteid')
        address=request.GET.get('address')
        value=request.GET.get('value')
        addresskey=request.GET.get('addresskey')
        url='https://www.swyfft.com/api/quotes'
        Elements=[{"ElementName":elementname, "Value":float(value)}]
        payload={'ConfiguredOn':None, 'Elements':Elements, 'ManualPremiumAdjustment':0, 'QuoteId':quote_id,
                 'gaEventAction':''}

        response=requests.patch(url, json=payload)
        response=response.json()
        data=render_to_include(response,address, quote_id)
        string=render_to_string('includes/quote_section.html', context=data)
        return JsonResponse({'status':200, 'data':string})


def render_to_include(response, address,quote_id ):
    deductibles = response['Elements']
    #pdb.set_trace()
    primary_element = response['PrimaryElementName']
    replacement_price = response['ReplacementCost']
    for group in deductibles:
        if group['ElementName'] == primary_element:
            deductibles_value = group['Value']
            deductibles_choices = group['Choices']
        if group['ElementName'] == 'ReplacementCost':
            replacement_price = group['Value']
            min_value=group['MinValue']
            max_value=group['MaxValue']
    data={'annual_premium': (response['GrossAnnualPayment']),
                                          'address': address,
                                          'quote_id': quote_id,
                                          'deductibles_value': deductibles_value,
                                          'deductibles_choices': deductibles_choices,
                                          'primaryElementName': primary_element,
                                          'replacement_price': replacement_price,
                                            'min_value': min_value,
                                            'max_value': max_value

          }
    return data

class getProperties(View):

    def get(self, request, *args, **kwargs):
        url='https://www.swyfft.com/api/properties?address='+request.GET.get('term')
        response=requests.get(url)
        data=response.json()
        data=[address['FullAddress'] for address in data]
        return JsonResponse({'data':data})