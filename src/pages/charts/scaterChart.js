import React, { Component } from 'react';
import { ScatterChart, Scatter, CartesianGrid, Tooltip, Legend,
 XAxis, YAxis, ZAxis, ReferenceLine, ReferenceDot, ReferenceArea, ErrorBar,
 LabelList } from 'recharts';
import * as _ from 'lodash';
import { changeNumberOfData } from './utils';

const data01 = [
  { x: 100, y: 200, z: 200, errorY: [20, 30], errorX: 30 },
  { x: 120, y: 100, z: 260, errorY: 20, errorX: [20, 30] },
  { x: 170, y: 300, z: 400, errorY: [12, 8], errorX: 20 },
  { x: 140, y: 250, z: 280, errorY: 23, errorX: [12, 8] },
  { x: 150, y: 400, z: 500, errorY: [21, 10], errorX: 23 },
  { x: 110, y: 280, z: 200, errorY: 21, errorX: [21, 10] },
];

const data02 = [
  { x: 200, y: 260, z: 240 },
  { x: 240, y: 290, z: 220 },
  { x: 190, y: 290, z: 250 },
  { x: 198, y: 250, z: 210 },
  { x: 180, y: 280, z: 260 },
  { x: 210, y: 220, z: 230 },
];

const data03 = [
  { x: 10, y: 30 },
  { x: 30, y: 200 },
  { x: 45, y: 100 },
  { x: 50, y: 400 },
  { x: 70, y: 150 },
  { x: 100, y: 250 },
];

const data04 = [
  { x: 30, y: 20 },
  { x: 50, y: 180 },
  { x: 75, y: 240 },
  { x: 100, y: 100 },
  { x: 120, y: 190 },
];

const data05 = [{x: 100, y: 200, z: 200}, {x: 100, y: 100, z: 260},
  {x: 170, y: 300, z: 400}, {x: 140, y: 250, z: 280},
  {x: 150, y: 400, z: 500}, {x: 110, y: 280, z: 200}];

const data06 = [
  { x: 0, y: 'Sun', z: 78 },
  { x: 0, y: 'Mon', z: 40 },
  { x: 0, y: 'Tue', z: 60 },
  { x: 3, y: 'Wed', z: 100 },
];

const initialState = {
  data01,
  data02,
  data03,
  data04,
  data05,
};

export default class ScaterChartView extends Component {

  static displayName = 'ScatterChartDemo';

  state = initialState;

  handleChangeData = () => {
    this.setState(() => _.mapValues(initialState, changeNumberOfData));
  };

  renderSquare = (props) => {
    const { cx, cy, size, xAxis, yAxis, zAxis } = props;
    const xBandSize = xAxis.bandSize;
    const yBandSize = yAxis.bandSize;

    return <rect x={cx - xAxis.bandSize / 2} y={cy - yAxis.bandSize / 2} width={xAxis.bandSize} height={yAxis.bandSize} fill="red" fillOpacity={size} />;
  }


  render () {
    const { data01, data02, data03, data04 } = this.state;

    return (
     
       <div
       style={{
        border: "1px solid #d8d8d8",
        padding: "30px 20px",
        margin: "50px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center"}}>

      

       
        <div className="scatter-chart-wrapper">
          <ScatterChart width={800} height={400} margin={{ top: 20, right: 20, bottom: 0, left: 20 }}>
            <XAxis type="number" dataKey="x" name="stature" unit="cm" />
            <YAxis dataKey="y" name="weight" unit="kg" />
            <ZAxis range={[64]} />
            <CartesianGrid />
            <Tooltip cursor={{ stroke: '#808080', strokeDasharray: '5 5' }}/>
            <Legend/>
            <Scatter line lineJointType="monotoneX" shape="wye" legendType="wye" data={data03} fill="#ff7300" />
            <Scatter line shape="square" legendType="square" data={data04} fill="#347300" />
          </ScatterChart>
        </div>

      

      
      </div>
    );
  }
}