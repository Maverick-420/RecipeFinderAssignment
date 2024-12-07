Recipe Finder 🍳
Recipe Finder is a responsive web application that allows users to explore recipes based on categories like vegetarian and non-vegetarian, view detailed instructions, and discover ingredients. It's built using React and React Router, ensuring smooth navigation and a modern UI.

🚀 Features
Dynamic Recipe Navigation:

Browse recipes categorized as Vegetarian and Non-Vegetarian.
View detailed information about each recipe, including:
Ingredients with measurements.
Step-by-step cooking instructions.
Category and regional origin.
Embedded YouTube video for visual guidance.
Responsive Design:

Optimized for both desktop and mobile devices.
Burger menu for small screens.
Interactive Navbar:

Accessible navigation bar with links for seamless page switching.
🛠️ Tech Stack
Frontend:
React.js
React Router
Backend API:
TheMealDB API for recipe data.
📁 Project Structure
php
Copy code
RecipeFinder/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation bar component
│   │   ├── Home.jsx          # Home page component
│   │   ├── RecipeDetails.jsx # Detailed recipe view
│   │   ├── Vegetarian.jsx    # Vegetarian recipes page
│   │   ├── NonVegetarian.jsx # Non-Vegetarian recipes page
│   ├── App.jsx               # Main application entry point
│   ├── index.jsx             # Renders the React app
├── public/
│   ├── index.html            # Main HTML template
├── package.json              # Project dependencies and scripts
├── README.md                 # Documentation
🖥️ Installation and Setup
Clone the repository:

bash
Copy code
git clone https://github.com/Maverick-420/RecipeFinder.git
cd RecipeFinder
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Open your browser and navigate to:

arduino
Copy code
http://localhost:5173
🌐 API Reference
This project utilizes the TheMealDB API for fetching recipe data. Below are the endpoints used:

Get Recipe by ID:

http
Copy code
GET https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}
Fetch detailed recipe data by its unique ID.

Get Recipe Categories:

http
Copy code
GET https://www.themealdb.com/api/json/v1/1/categories.php
Fetch available recipe categories.

📸 Screenshots
1. Home Page
Displays featured recipes and navigation options.

2. Recipe Details Page

Detailed view of a selected recipe, showing ingredients, instructions, and an embedded video.

3. Mobile View
Responsive burger menu and optimized layout for small screens.

🛠️ Future Enhancements
Add a search functionality to find recipes by name or ingredient.
Include user authentication for saving favorite recipes.
Enhance UI/UX with animations and styling libraries like Framer Motion.
🧑‍💻 Author
Aniket Bhagat

GitHub
LinkedIn
📜 License
This project is licensed under the MIT License.

Feel free to contribute and star ⭐ the repository!

Usage:
Copy the content above and save it as README.md in your project's root directory.
