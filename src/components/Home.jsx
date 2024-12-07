import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Recipe Finder</h1>
        <p>Discover delicious recipes from around the world.</p>
        <Link to="/recipes">
          <button>Explore Recipes</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
