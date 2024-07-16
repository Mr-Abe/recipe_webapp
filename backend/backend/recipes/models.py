from django.db import models

# Create your models here.

from django.db import models

class Recipe(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.title

class Rating(models.Model):
    recipe = models.ForeignKey(Recipe, related_name='ratings', on_delete=models.CASCADE)
    score = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.score}/10 Rating for {self.recipe.title}"

