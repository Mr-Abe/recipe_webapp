import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import Recipe from './components/Recipe';
import RatingSystem from './components/RatingSystem';
import './App.css'; // Importing a CSS file for global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Use the element prop to pass components */}
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/rate" element={<RatingSystem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;