from django.contrib import admin
from .models import Board

# Register your models here.


class MyBoardAdmin(admin.ModelAdmin):
    fieldsets = ((None, {"fields": ("token", "board_name", "is_secret")}),)
    list_display = ("token", "board_name", "is_secret")


admin.site.register(Board, MyBoardAdmin)
