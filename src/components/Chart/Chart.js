import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  console.log(props);
  const maxValuesArray = props.dataPoints.map((element) => {
    return element.value;
  });
  const maximumValue = Math.max(...maxValuesArray);
  return (
    <div className="chart">
      {props.dataPoints.map((element) => {
        return (
          <ChartBar
            key={element.label}
            value={element.value}
            maxValue={maximumValue}
            label={element.label}
          />
        );
      })}
      {/* {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximumValue}
          label={dataPoint.label}
        />
      ))} */}
    </div>
  );
};

export default Chart;
