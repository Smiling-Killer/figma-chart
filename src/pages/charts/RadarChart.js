import * as _ from 'lodash';
import React, { Component } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, Tooltip,
  PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  LabelList } from 'recharts';
import { changeNumberOfData } from './utils';

const data = [
  { subject: 'Math', A: 120, B: 110, C: [80, 120] },
  { subject: 'Chinese', A: 98, B: 130, C: [90, 113] },
  { subject: 'English', A: 86, B: 130, C: [70, 134] },
  { subject: 'Geography', A: null, B: 100, C: [88, 130] },
  { subject: 'Physics', A: 85, B: 90, C: [55, 110] },
  { subject: 'History', A: 65, B: 85, C: [60, 120] },
];

const initialState = { data };

export default class RadarChartView extends Component {

  static displayName = 'RadarChartDemo';

  constructor(props) {
    super(props);

    this.state = initialState;
    this.handleChangeData = this.handleChangeData.bind(this);
  }

  handleChangeData() {
    this.setState(() => _.mapValues(initialState, changeNumberOfData));
  }

  handleMouseEnter(props) {
    console.log(props);
  }

  render() {
    const { data } = this.state;

    return (
      <div
      style={{
        border: "1px solid #d8d8d8",
        padding: "30px 20px",
        margin: "50px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center"}}
      >
      
        
        <RadarChart
          cx={300}
          cy={250}
          outerRadius={150}
          width={600}
          height={500}
          data={data}
        >
          <PolarGrid radialLines={true} />
          <Tooltip />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
            onMouseEnter={this.handleMouseEnter}
          />
          <Radar
            name="Lily"
            dataKey="B"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
            animationBegin={180}
          />
          <Legend />
          <PolarRadiusAxis domain={[0, 150]} label="score"/>
        </RadarChart>

       
      </div>
    );
  }
}