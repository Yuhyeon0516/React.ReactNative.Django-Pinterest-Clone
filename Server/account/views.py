from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import exceptions, status
from django.contrib.auth import authenticate

from . import models

# Create your views here.


class SignUpView(APIView):
    def post(self, request):
        try:
            user = models.User.objects.create_user(
                username=request.data["username"],
                password=request.data["password"],
                email=request.data["email"],
            )
            profile = models.Profile.objects.create(
                user=user,
                birth_date=request.data["birth_date"],
                gender=request.data["gender"],
            )

            user.save()
            profile.save()

            token = Token.objects.create(user=user)

            return Response(data={"Token": token.key}, status=status.HTTP_201_CREATED)

        except:
            raise exceptions.AuthenticationFailed()

    def get(self, request):
        queryset = models.User.objects.filter(email=request.user)
        name = queryset.values("username", "email")

        return Response(name[0], status=status.HTTP_200_OK)


class LoginView(APIView):
    def post(self, request):
        user = authenticate(
            username=request.data["email"], password=request.data["password"]
        )

        if user is not None:
            token = Token.objects.get(user=user)

            return Response(data={"Token": token.key}, status=status.HTTP_202_ACCEPTED)

        else:
            return Response("", status=status.HTTP_406_NOT_ACCEPTABLE)
