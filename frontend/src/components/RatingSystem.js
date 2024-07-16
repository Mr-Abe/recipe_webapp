import React, { useState } from 'react';
import '../styles/RatingSystem.css';

function RatingSystem() {
  const [rating, setRating] = useState(0);

  return (
    <div className="rating-system">
      <p>Rating: {rating}</p>
      <button onClick={() => setRating(rating + 1)}>Increase Rating</button>
    </div>
  );
}

export default RatingSystem;