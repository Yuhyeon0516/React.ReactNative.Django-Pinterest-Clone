

# Create your views here.

# 기존 장고 방식

from django.http import HttpResponse
from django.shortcuts import render

def hello_world(request):
    return HttpResponse('Hello_world!');

# DRF 방식

from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view()
def hello_world_drf(request):
    return Response({"message": "Hello_world!"})