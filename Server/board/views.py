from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import exceptions, status

from . import models

# Create your views here.


class CreateBoardView(APIView):
    def post(self, request):
        board = models.Board.objects.create(
            token=request.data["token"],
            board_name=request.data["board_name"],
            is_secret=request.data["is_secret"],
        )

        board.save()

        return Response(status=status.HTTP_201_CREATED)


class GetBoardView(APIView):
    def get(self, request):
        queryset = models.Board.objects.filter(token=request.auth)
        value = queryset.values("board_name")

        return Response(data=value, status=status.HTTP_200_OK)