import requests
import urllib

#this get the addresss key of an address

def get_address_key(address='200 N MIDLAND ST, VISALIA, CA 93291'):
    url='https://www.swyfft.com/api/properties'
    params={'address':address}
    data=urllib.parse.urlencode(params)
    response=requests.get(url, params=data)
    try:#checks if the address does not exist
        address_key=response.json()[0]['AddressKey']
        return address_key
    except IndexError:
        return False

#this handles the quote request on swftt
def scrape(address='200 N MIDLAND ST, VISALIA, CA 93291'):
    address_key=get_address_key(address)
    url = 'https://www.swyfft.com/api/quotes'
    if not address_key:
        return address_key #return false if address key does not exist
    data={'Address':address, 'AddressKey':address_key, 'ReferringAgent':None, 'UtmCampaign':None, 'UtmMedium':None, 'UtmSource':None}
    response=requests.put(url, data=data)
    return response.json()

def get_annual_premium(address='200 N MIDLAND ST, VISALIA, CA 93291'):
    data=scrape(address)
    if not data:
        return False
    return data['AnnualPremium']











