
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import exceptions,status

from . import models

# Create your views here.

class SignUpView(APIView):
    def post(self, request):
        try:
            user = models.User.objects.create_user(username=request.data['username'], password=request.data['password'], email=request.data['email'])
            profile = models.Profile.objects.create(user=user, birth_date=request.data['birth_date'], gender=request.data['gender'])

            user.save()
            profile.save()

            token = Token.objects.create(user=user)

            return Response(data={"Token": token.key}, status=status.HTTP_201_CREATED)
        
        except:
            raise exceptions.AuthenticationFailed()