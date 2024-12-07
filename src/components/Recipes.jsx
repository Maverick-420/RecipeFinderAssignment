import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Recipes = () => {
  const [meals, setMeals] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchMeals('Arrabiata');
  }, []);

  const fetchMeals = (query) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => response.json())
      .then((data) => setMeals(data.meals || []));
  };

  const handleSearch = () => {
    fetchMeals(query);
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="meal-container">
        {meals.map((meal) => (
          <div className="meal-card" key={meal.idMeal}>
            <Link to={`/recipe/${meal.idMeal}`}>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h3>{meal.strMeal}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
