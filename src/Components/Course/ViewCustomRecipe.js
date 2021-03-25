function ViewCustomRecipe(props) {
  const { recipe } = props;

  const diff_num = Number(recipe.difficulty);
  let star = "⭐️".repeat(diff_num);
  return (
    <>
      <div className="custom-recipe-card">
        <div className="custom-recipe-card-image">
          <img alt="" src={recipe.image}></img>
        </div>
        <div className="custom-recipe-card-body">
          <div>{recipe.title}</div>
          <div>author : {recipe.author}</div>
          <div>diff : {star}</div>
          <div>type : {recipe.type}</div>
          <div>manual : {recipe.manual}</div>
        </div>
      </div>
    </>
  );
}

export default ViewCustomRecipe;
