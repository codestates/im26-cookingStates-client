import React from 'react';

function MenuCard(props) {
  return (
    <div className="menu-card">
      <div className="recipe-img">
        <img src={props.recipe.image.small} />
      </div>
      <div>
        <div className="recipe-title">{props.recipe.title}</div>
      </div>
    </div>
  );
}

export default MenuCard;
