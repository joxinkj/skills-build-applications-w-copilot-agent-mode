from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from djongo import models
from django.conf import settings
from django.apps import apps

from django.db import connection

# Define models for test data if not already present
from django.db import models as dj_models

class Team(dj_models.Model):
    name = dj_models.CharField(max_length=100, unique=True)
    class Meta:
        app_label = 'octofit_tracker'

class Activity(dj_models.Model):
    user = dj_models.CharField(max_length=100)
    team = dj_models.CharField(max_length=100)
    type = dj_models.CharField(max_length=100)
    duration = dj_models.IntegerField()
    class Meta:
        app_label = 'octofit_tracker'

class Leaderboard(dj_models.Model):
    team = dj_models.CharField(max_length=100)
    points = dj_models.IntegerField()
    class Meta:
        app_label = 'octofit_tracker'

class Workout(dj_models.Model):
    name = dj_models.CharField(max_length=100)
    description = dj_models.TextField()
    class Meta:
        app_label = 'octofit_tracker'

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        # Delete all data
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()
        User.objects.all().delete()

        # Create teams
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Create users
        users = [
            {'username': 'ironman', 'email': 'ironman@marvel.com', 'team': 'Marvel'},
            {'username': 'spiderman', 'email': 'spiderman@marvel.com', 'team': 'Marvel'},
            {'username': 'batman', 'email': 'batman@dc.com', 'team': 'DC'},
            {'username': 'superman', 'email': 'superman@dc.com', 'team': 'DC'},
        ]
        for u in users:
            User.objects.create_user(username=u['username'], email=u['email'], password='password')

        # Create activities
        Activity.objects.create(user='ironman', team='Marvel', type='run', duration=30)
        Activity.objects.create(user='spiderman', team='Marvel', type='cycle', duration=45)
        Activity.objects.create(user='batman', team='DC', type='swim', duration=60)
        Activity.objects.create(user='superman', team='DC', type='run', duration=50)

        # Create leaderboard
        Leaderboard.objects.create(team='Marvel', points=75)
        Leaderboard.objects.create(team='DC', points=110)

        # Create workouts
        Workout.objects.create(name='Hero HIIT', description='High intensity interval training for heroes')
        Workout.objects.create(name='Super Strength', description='Strength workout for super heroes')

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data.'))
