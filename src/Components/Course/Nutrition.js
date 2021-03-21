import React from "react";
import Chart from "react-google-charts";
import recipeData from "../../recipe.json";
console.log(recipeData[0].nutrient);

function Nutrition(props) {
  return (
    <div>
      <Chart
        width={"400px"}
        height={"400px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Nutrients", "Gram"],
          ["탄수화물", Number(recipeData[0].nutrient.car)],
          ["단백질", Number(recipeData[0].nutrient.pro)],
          ["지방", Number(recipeData[0].nutrient.fat)],
        ]}
        options={{
          title: "요리 영양정보",
        }}
      />
    </div>
  );
}

export default Nutrition;
