import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Vegetarian = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMeals('Vegetarian');
  }, []);

  const fetchMeals = (query) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian`)
      .then((response) => response.json())
      .then((data) => setMeals(data.meals || []));
  };

  return (
    <div>
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

export default Vegetarian;
