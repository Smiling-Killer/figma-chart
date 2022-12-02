import * as React from 'react';
import * as _ from 'lodash';
import { changeNumberOfData } from './utils';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Legend,
  ReferenceArea, ReferenceLine, ReferenceDot,
  LabelList, Label } from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, time: 1 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, time: 3 },
  { name: 'Page C', uv: 2000, pv: -9800, amt: 2290, time: 9 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, time: 10 },
  { name: 'Page E', uv: 2500, pv: 4800, amt: 2181, time: 12 },
  { name: 'Page F', uv: 1220, pv: 3800, amt: 2500, time: 16 },
  { name: 'Page G', uv: 2300, pv: 4300, amt: 2100, time: 18 },
  { name: 'Page H', time: 24  },
];
const data01 = [
  { day: '05-01', weather: 'sunny' },
  { day: '05-02', weather: 'sunny' },
  { day: '05-03', weather: 'cloudy' },
  { day: '05-04', weather: 'rain' },
  { day: '05-05', weather: 'rain' },
  { day: '05-06', weather: 'cloudy' },
  { day: '05-07', weather: 'cloudy' },
  { day: '05-08', weather: 'sunny' },
  { day: '05-09', weather: 'sunny' },
];
const data02 = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
];

const rangeData = [
  { day: '05-01', temperature: [-1, 10] },
  { day: '05-02', temperature: [2, 15] },
  { day: '05-03', temperature: [3, 12] },
  { day: '05-04', temperature: [4, 12] },
  { day: '05-05', temperature: [12, 16] },
  { day: '05-06', temperature: [5, 16] },
  { day: '05-07', temperature: [3, 12] },
  { day: '05-08', temperature: [0, 8] },
  { day: '05-09', temperature: [-3, 5] },
];

const initialState = { data, data01, data02 };

const CustomTooltip = (props) => {
  const { active, payload, external, label } = props;

  if (active) {
    const style = {
      padding: 6,
      backgroundColor: '#fff',
      border: '1px solid #ccc',
    };



    return (
      <div className="area-chart-tooltip" style={style}>
        <p>{payload?.[0]?.name + ' : '}<em>{payload?.[0]?.value}</em></p>
        <p>{'uv : '}</p>
      </div>
    );
  }

  return null;
};

const renderCustomizedActiveDot = (props) => {
  const { cx, cy, stroke, index, dataKey } = props;

  return <path d={`M${cx - 2},${cy - 2}h4v4h-4Z`} fill={stroke} key={`dot-${dataKey}`}/>;
};

const RenderRect= (props) => {
  return <rect x={20} y={20} width={100} height={20} stroke="#000"/>;
};

function CustomizedAxisTick(props) {
  const { x, y, stroke, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={-12} textAnchor="end" fill="#999" fontSize="12">{payload.value}</text>
    </g>
  );
}
const renderLabel = (props) => {
  const { index, x, y } = props;

  return <text x={x} y={y} className="customized-label">{index}</text>;
};

export default class AreaChartView extends React.Component{

  static displayName = 'AreaChartDemo';

  state = initialState;

  handleChangeData = () => {
    this.setState(() => _.mapValues(initialState, changeNumberOfData));
  };

  render() {
    const { data, data01, data02 } = this.state;

    return (
      <div  style={{
        border: "1px solid #d8d8d8",
        padding: "30px 20px",
        margin: "50px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center"
      }}
      >
       
  
          <AreaChart width={600}
            height={400}
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <YAxis type="number" yAxisId={0} stroke="#ff7300">
              <Label position="top" offset={10}>uv</Label>
            </YAxis>
            <YAxis type="number" orientation="right" yAxisId={1} stroke="#387908">
              <Label position="top" offset={10}>pv</Label>
            </YAxis>
            <YAxis
              type="number"
              orientation="right"
              yAxisId={2}
              stroke="#38abc8"
            >
              <Label position="top" offset={10}>amt</Label>
            </YAxis>
            <XAxis dataKey="name" interval={0}/>
            <Area dataKey="uv" stroke="#ff7300" fill="#ff7300" strokeWidth={2} yAxisId={0} />
            <Area dataKey="pv" stroke="#387908" fill="#387908" strokeWidth={2} yAxisId={1} />
            <Area dataKey="amt" stroke="#38abc8" fill="#38abc8" strokeWidth={2} yAxisId={2} />
          </AreaChart>
        </div>

      

     
    );
  }
};