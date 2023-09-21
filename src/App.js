import CostItem from "./components/CostItem";
import CostItemApp from "./components/CostItemApp";
import CostsAppItems from "./components/CostItemApp";
import React,{useState} from "react";

import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id:'c1',
    date: new Date(2022, 2, 12),
    description: "TV",
    amount: 999.9,
  },
  {
    id:'c2',
    date: new Date(2023, 11, 14),
    description: "IPhone",
    amount: 2000,
  },
  {
    id:'c3',
    date: new Date(2020, 4, 22),
    description: "PC",
    amount: 3000,
  },
];


const App = ()=> {
   const[costs,setCosts]=useState(INITIAL_COSTS )
 

const addCostHandler = (cost) =>{
  setCosts(prevCosts => {
    return[cost,...prevCosts]
  })
}


  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <CostItemApp costs ={costs}/>
      
    </div>
  );
}

export default App;
