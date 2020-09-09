import React, { Component } from "react";
import CanvasJSReact from "../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class StepLineChart extends Component {
  render() {
    const options = {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Emotion Movement",
      },
      axisY: {
        title: "Emotion Category",
        includeZero: false,
      },
      data: [
        {
          type: "stepLine",
          xValueFormatString: "timestamp 00:0#",
          markerSize: 5,
          dataPoints: [
            { x: 0, y: 0 },
            { x: 1, y: 2 },
            { x: 2, y: 2 },
            { x: 3, y: 4 },
            { x: 4, y: 3 },
            { x: 5, y: 4 },
            { x: 6, y: 4 },
            { x: 7, y: 2 },
            { x: 8, y: 2 },
            { x: 9, y: 6 },
          ],
        },
      ],
    };

    return (
      <div>
        <h1>Movie id= 1795 분석</h1>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default StepLineChart;
