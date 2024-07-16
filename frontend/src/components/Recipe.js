import '../styles/Recipe.css';

import React, { useState, useEffect } from 'react';

function Recipe({ recipe }) {
    const [rating, setRating] = useState(0);

    const submitRating = async (newRating) => {
        const response = await fetch(`http://localhost:8000/api/recipes/${recipe.id}/rate_recipe/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ rating: newRating })
        });
        const data = await response.json();
        setRating(data.average_rating);
    };

    return (
        <div>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <div>Current Rating: {rating.toFixed(1)}</div>
            {[1, 2, 3, 4, 5].map(score => (
                <button key={score} onClick={() => submitRating(score)}>{score}</button>
            ))}
        </div>
    );
}

export default Recipe;