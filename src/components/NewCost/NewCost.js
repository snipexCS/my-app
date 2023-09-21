import CostForm from './CostForm';
import './NewCost.css'
import React,{useState} from 'react';
const NewCost = (props) => {

const [isFormVisible,  setIsFormVisible] = useState(false)


const saveCostDataHandler = (inputCostData)=>{
const costData={
    ...inputCostData,
    id:Math.random().toString()
}

props.onAddCost(costData);

setIsFormVisible(false)

}

const inputCosdDataHandler = ()=>{
  setIsFormVisible(true)
}

const  cancelHandler= ()=>{
  setIsFormVisible(false)
}




  return <div className="new-cost ">
    {!isFormVisible &&  (<button onClick={inputCosdDataHandler}>Add New Cost</button>)}
    {isFormVisible && <CostForm onSaveCostData={saveCostDataHandler} onCancel={cancelHandler} />}
  </div>;
};
export default NewCost;
