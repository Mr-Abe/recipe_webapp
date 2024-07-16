from django.shortcuts import render

# Create your views here.
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, status
from django.db import models 
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets
from .models import Recipe, Rating
from .serializers import RecipeSerializer, RatingSerializer

class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    @action(detail=True, methods=['post'])
    def rate_recipe(self, request, pk=None):
        """Post a new rating for a recipe."""
        recipe = get_object_or_404(Recipe, pk=pk)
        rating = request.data.get('rating', 0)
        Rating.objects.create(recipe=recipe, score=rating)

        # Calculate the new average rating
        average_rating = recipe.ratings.all().aggregate(models.Avg('score'))['score__avg']
        return Response({'average_rating': average_rating}, status=status.HTTP_200_OK)

class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
