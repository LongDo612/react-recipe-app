import react from "react";
import style from './recipe.module.css';
const Recipe = ({title,calories,image, ingredients, totalTime}) => {

    return (
        <div className = {style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {calories}</p>
            <label>Total time approximate: {totalTime}</label>
            <img src={image} alt="" className={style.recipeImage}/>
        </div>
    );
}

export default Recipe;