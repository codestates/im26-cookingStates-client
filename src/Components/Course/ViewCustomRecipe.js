function ViewCustomRecipe(props) {
  const { recipe } = props;
  return (
    <>
      <div className="custom-recipe-card">
        <div className="custom-recipe-card-image">
          <img alt="" src={recipe.image}></img>
        </div>
        <div className="custom-recipe-card-body">
          <div>제목 : {recipe.title}</div>
          <div>제작자 : {recipe.author}</div>
          <div>난이도 : {recipe.difficulty}</div>
          <div>타입 : {recipe.type}</div>
          <div>메뉴얼 : {recipe.manual}</div>
        </div>
      </div>
    </>
  );
}

export default ViewCustomRecipe;
