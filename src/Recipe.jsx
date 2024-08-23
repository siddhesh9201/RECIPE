import React, { useEffect } from "react";
import { useState } from "react";
import "./Recipe.css";

function Recipe() {
  let [Dish, setDish] = useState();
  let [Ingredients, setIngredients] = useState(null);
  let search = async () => {
    let recipe = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${Dish}`
    );

    let data = await recipe.json();
    console.log(data);

    setIngredients(data);
  };
  
  let handleDish = (event) => {
    setDish(event.target.value);
  };

  return (
    <div className="recipe">
      <input type="text" placeholder="Enter The Dish..." onChange={handleDish} />
      <button onClick={search}>Search</button>
    
      {Ingredients && Ingredients.meals && (
        <ul>
          <div className="recipe-info">
            <div className="food-category">
             
              <p>
                Food Category: <span>{Ingredients.meals[0].strCategory}</span>
              </p>
            </div>
            <div className="food-area">
              
              <p> </p>
              <p>
                Food Area: <span>{Ingredients.meals[0].strArea}</span>
              </p>
            </div>
          </div>

          <li>Ingredient 1 : {Ingredients.meals[0].strIngredient1}    |  {Ingredients.meals[0].strMeasure1 }       </li>
          <li>Ingredient 2 : {Ingredients.meals[0].strIngredient2}    |  {Ingredients.meals[0].strMeasure2 }       </li>
          <li>Ingredient 3 : {Ingredients.meals[0].strIngredient3}    |  {Ingredients.meals[0].strMeasure3 }       </li>
          <li>Ingredient 4 : {Ingredients.meals[0].strIngredient4}    |  {Ingredients.meals[0].strMeasure4 }       </li>
          <li>Ingredient 5 : {Ingredients.meals[0].strIngredient5}    |  {Ingredients.meals[0].strMeasure5 }       </li>
          <li>Ingredient 6 : {Ingredients.meals[0].strIngredient6}    |  {Ingredients.meals[0].strMeasure6 }       </li>
          <li>Ingredient 7 : {Ingredients.meals[0].strIngredient7}    |  {Ingredients.meals[0].strMeasure7 }       </li>
          <li>Ingredient 8 : {Ingredients.meals[0].strIngredient8}    |  {Ingredients.meals[0].strMeasure8 }        </li>
          <li>Ingredient 9 : {Ingredients.meals[0].strIngredient9}    |  {Ingredients.meals[0].strMeasure9 }       </li>
        </ul>
      )}
    </div>
  );
}

export default Recipe;
