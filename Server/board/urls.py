from django.urls import path
from . import views

urlpatterns = [
    path("create/", views.CreateBoardView.as_view()),
    path("check/", views.GetBoardView.as_view()),
]
