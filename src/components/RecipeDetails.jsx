import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams(); // To get the meal ID from the URL
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true); // Manage loading state
  const [error, setError] = useState(null); // Manage error state

  useEffect(() => {
    const fetchMealDetails = async (id) => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.meals) {
          setMeal(data.meals[0]);
        } else {
          setError('Meal not found');
        }
      } catch (error) {
        setError('Failed to fetch meal details');
      } finally {
        setLoading(false);
      }
    };

    fetchMealDetails(id);
  }, [id]);

  if (loading) return <div>Loading...</div>; // Consider showing a spinner or animation
  if (error) return <div>{error}</div>; // Show error message

  // Extract ingredients dynamically
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: meal[`strIngredient${i}`],
        measure: meal[`strMeasure${i}`],
      });
    }
  }

  return (
    <div className="meal-details">
      <div className="meal-card" key={meal.idMeal}>
        <Link to={`/recipe/${meal.idMeal}`}>
          <h3>{meal.strMeal}</h3>
        </Link>
      </div>

      <div className="meal-info">
        <h4>Category: {meal.strCategory}</h4>
        <h4>Area: {meal.strArea}</h4>
        <h4>Instructions:</h4>
        <h4>Ingredients:</h4>
        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>
              <strong>{item.ingredient}</strong> - {item.measure}
            </li>
          ))}
        </ul>

        {meal.strYoutube && (
          <div className="meal-video">
            <h4>Watch the Recipe:</h4>
            <iframe
              title="recipe-video"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${
                meal.strYoutube.split('v=')[1]
              }`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};
export default RecipeDetails;
