import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Recipe from './Recipe';

const App = () => {
  const APP_ID = '33302f3a';
  const APP_KEY = '63297493aec1cd765b0c00875da53e15';

  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState("");

  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearchQuery = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <header>
        <h2>Thousand of famous variety food ingridients, proudly to make your meal better!</h2>
        <h3>Choose your recipe.</h3>
      </header>
      <form className="search-form" onSubmit={getSearchQuery} >
        <input className="search-bar" placeholder = "Search for ingridients,..." type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            totalTime={recipe.recipe.totalTime}
          ></Recipe>
        ))}
      </div>


      <footer>
        <p>Copyright &copy; 2021. All right reserved.</p>
      </footer>
    </div>
  );
}

export default App;
