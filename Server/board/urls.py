from django.urls import path
from . import views

urlpatterns = [
    path("create/", views.BoardView.as_view()),
]
