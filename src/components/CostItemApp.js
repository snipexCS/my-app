import "./CostItemApp.css";
import CostItem from "./CostItem";
import Card from "./Card";
import CostsFilter from "./Costs/CostsFilter";
import React, { useState } from "react";
import CostDiagram from "./Costs/CostsDiagram";
const CostsAppItems = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filtereCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
       <CostDiagram costs={filtereCosts}/>
        {filtereCosts.length === 0 && <p >Nothng</p>}
        {filtereCosts.length > 0 &&
          filtereCosts.map((cost) => (
            <CostItem
              key={cost.id}
              date={cost.date}
              description={cost.description}
              amount={cost.amount}
            />
          ))}
      </Card>
    </div>
  );
};
export default CostsAppItems;
