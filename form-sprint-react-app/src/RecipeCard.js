import React from 'react';

function RecipeCard(props) {

  return(
    <div className="recipes">
      {props.recipes.map(recipe => {
        return (
          <p>RECIPE: {recipe.name}</p>
        )
      })}
    </div>
  )
}

export default RecipeCard;