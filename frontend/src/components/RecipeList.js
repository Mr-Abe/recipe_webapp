import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import '../styles/RecipeList.css';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:8000/api/recipes/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setRecipes(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.toString());
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading recipes...</p>;
  }

  if (error) {
    return <p>Error loading recipes: {error}</p>;
  }

  return (
    <div className="recipe-list">
      {recipes.length > 0 ? (
        recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)
      ) : (
        <p>No recipes found. Try adding some!</p>
      )}
    </div>
  );
}

export default RecipeList;
