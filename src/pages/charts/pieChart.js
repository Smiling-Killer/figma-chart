import React, { Component } from "react";
import { PieChart, Pie, Cell, Label } from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

const colors = scaleOrdinal(schemeCategory10).range();

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 0 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
];

const initialState = { data02 };

const renderLabelContent = (props) => {
  const { value, percent, x, y, midAngle } = props;

  return (
    <g
      transform={`translate(${x}, ${y})`}
      textAnchor={midAngle < -90 || midAngle >= 90 ? "end" : "start"}
    >
      <text x={0} y={0}>{`Count: ${value}`}</text>
      <text x={0} y={20}>{`(Percent: ${(percent * 100).toFixed(2)}%)`}</text>
    </g>
  );
};

export default class PieChartView extends Component {
  static displayName = "PieChartDemo";

  state = {
    ...initialState,
    activeIndex: 0,
    animation: false,
  };

  render() {
    const { data02 } = this.state;

    return (
      <div
        style={{
          border: "1px solid #d8d8d8",
          padding: "30px 20px",
          margin: "50px",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <PieChart width={800} height={400}>
          <Pie
            data={data02}
            dataKey="value"
            startAngle={180}
            endAngle={-180}
            innerRadius={60}
            outerRadius={80}
            label={renderLabelContent}
            paddingAngle={5}
            isAnimationActive
          >
            {data02.map((entry, index) => (
              <Cell key={`slice-${index}`} fill={colors[index % 10]} />
            ))}
            <Label width={50} position="center">
             Oil Tank
            </Label>
          </Pie>
        </PieChart>
      </div>
    );
  }
}
