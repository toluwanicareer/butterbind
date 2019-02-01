"""betterbind URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.Home.as_view()),
    path('quote', views.Quote.as_view()),
    path('privacy', views.Privacy.as_view()),
    path('index.html', views.Home.as_view()),
    path('patch_quote', views.PatchQuote.as_view()),
    path('get_properties', views.getProperties.as_view()),
    path('about', views.About.as_view()),
    path('faq', views.Faq.as_view()),
    path('contact', views.Contact.as_view()),
    path('send_mail', views.SendMail.as_view()),
    path('thank_you', views.ThankYou.as_view())
]
