import React from "react";
import Chart from "react-google-charts";

function Nutrition(props) {
  return (
    <div className="chart">
      <Chart
        width={"350px"}
        height={"350px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Nutrients", "Gram"],
          ["탄수화물", Number(props.recipe.nutrient.car)],
          ["단백질", Number(props.recipe.nutrient.pro)],
          ["지방", Number(props.recipe.nutrient.fat)],
        ]}
        options={{
          title: "요리 영양정보",
          titleTextStyle: {
            color: "#FFEEDF",
            fontSize: 27,
            fontName: "Jua",
          },
          tooltipTextStyle: {
            color: "#535867",
            fontSize: 15,
            fontName: "Jua",
          },
          legendTextStyle: {
            color: "FFEEDF",
            fontName: "Jua",
            fontSize: 10,
          },

          backgroundColor: "#24997F",
        }}
      />
    </div>
  );
}

export default Nutrition;
