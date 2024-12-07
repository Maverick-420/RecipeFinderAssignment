import Home from './components/Home';
import NonVegetarian from './components/NonVegetarian';
import RecipeDetails from './components/RecipeDetails';
import Recipes from './components/Recipes';
import Vegetarian from './components/Vegetarian';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/vegetarian" element={<Vegetarian />} />
        <Route path="/non-vegetarian" element={<NonVegetarian />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
