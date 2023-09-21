import DiagramBar from "./DiagramBar";
import "./Diagram.css";

const Diagram = (props) => {


    const costAmountAr = props.dataSets.map(dataSet  => dataSet.value)

    const maxMonthCosts = Math.max(...costAmountAr)

  return (
    <div className="diagram">
      {props.dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.id}
          value={dataSet.value}
          maxValue={maxMonthCosts}
          label={dataSet.label}
        />
      ))}
    </div>
  );
};
export default Diagram;
