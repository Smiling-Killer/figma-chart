/* eslint-disable react/no-multi-comp */
import React from "react";
import {
  BarChart,
  Bar,
  ReferenceArea,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
} from "recharts";

export default function BarChartView(props) {
  const { position, data } = props;

  if (position === "vertical") {
    return (
      <div
      style={{
        border: "1px solid #d8d8d8",
        padding: "30px 20px",
        margin: "50px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <BarChart
        width={800}
        height={600}
        data={data}
        // margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        layout="vertical"
      >
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Bar dataKey="uv" fill="#ff7300" label />
        <Bar dataKey="pv" fill="#387908">
          <LabelList position="right" />
        </Bar>
          <Bar dataKey="amt" fill="#683a98">
            <LabelList position="left" />
          </Bar>
          <Bar dataKey="bmk" fill="#183a91">
            <LabelList position="insideRight" fill="#ffffff" />
          </Bar>
        </BarChart>
      </div>
    );
  }

  return (
    <div
      style={{
        border: "1px solid #d8d8d8",
        padding: "30px 20px",
        margin: "50px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <BarChart
        width={800}
        height={400}
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        layout="horizontal"
      >
        <YAxis type="number" />
        <XAxis dataKey="name" type="category" />
        <Tooltip />
        <ReferenceArea x1="food" x2="cosmetic" />
        <Bar dataKey="uv" fill="#ff7300" label />
        <Bar dataKey="pv" fill="#387908">
          <LabelList position="top" />
        </Bar>
        <Bar dataKey="amt" fill="#683a98">
          <LabelList position="bottom" />
        </Bar>
        <Bar dataKey="bmk" fill="#183a91">
          <LabelList position="insideTop" fill="#ffffff" />
        </Bar>
      </BarChart>
    </div>
  );
}
