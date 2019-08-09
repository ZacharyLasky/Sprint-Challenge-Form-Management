import React from 'react';

function RecipeCard(props) {

  return(
    <div className="recipes">
      {props.recipes.map(recipe => {
        return (
          <p>FOOD: {recipe.name}</p>
        )
      })}
    </div>
  )
}

export default RecipeCard;