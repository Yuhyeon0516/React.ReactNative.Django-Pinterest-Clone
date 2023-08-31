from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.


class Board(models.Model):
    token = models.CharField(_("token"), max_length=100)
    board_name = models.CharField(_("board name"), max_length=20)
    is_secret = models.BooleanField(_("is secret"), default=False)
