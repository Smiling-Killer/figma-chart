/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { DropdownWithSelect, Button, Navbar } from "./components";
import { AreaChartView, BarChartView, LineChartView, PieChartView, BrushDemoView, RadarChartView ,ScaterChartView} from "./charts";
 import DateTime from "./components/Date";           


class Dashboard extends Component {
  constructor() {
    super();
    this.chartTypes = [
      {
       id:1,
        title: "Line Chart",
        image:
          "https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-ppt-data-line-chart-illustration-image_2296398.jpg",
      },
      {
        id: 2,
        title: "Bar Chart",
        image:
          "https://png.pngtree.com/png-clipart/20200701/original/pngtree-bar-chart-png-image_5410472.jpg",
      },
      {
        id: 3,
        title: "Doughnut Chart",
        image:
        "https://png.pngtree.com/png-clipart/20190902/original/pngtree-business-vector-data-column-analysis-forward-arrow-histogram-png-image_4402593.jpg",
    },
    {
      id: 4,
      title: "Pie Chart",
      image:
        "https://png.pngtree.com/png-clipart/20190902/original/pngtree-business-vector-data-analysis-pie-chart-png-image_4402627.jpg",
    },
    {
      id: 5,
        title: "Bar Chart - (Vertical)",
        image:
          "https://datavizproject.com/wp-content/uploads/2016/06/DVP_101_200-14.png",
      },
      {
        id: 6,
        title: "Area Chart ",
        image:
          "https://www.patternfly.org/v3/pattern-library/data-visualization/area-chart/img/single-area-chart.png",
      },
      {
        id: 7,
        title: "Spline Chart ",
        image:
          "https://www.infragistics.com/products/indigo-design/help/images/spline_area_chart_tooltip-off.png",
      },
      {
        id: 8,
        title: "scaterChart",
        image:
          "https://www.encodedna.com/google-chart/google-line-chart-using-dynamic-json-data.png",
      },
    ];
    this.columnList = [
      { value: "liba", label: "Brand: LiBa" },
      { value: "powerlix", label: "Brand: PowerLix" },
      { value: "printerjack", label: "Brand: Printer's Jack" },
      { value: "blami", label: "Brand: Blami" },
      { value: "mckay", label: "Brand: McKay" },
      { value: "ucc", label: "Brand: UCC" },
      { value: "vondior", label: "Brand: Vondior" },
      { value: "sigtuna", label: "Brand: Sigtuna" },
      { value: "powerbear", label: "Brand: PowerBear" },
    ];
    this.rowList = [
      { value: "liba", label: "LiBa" },
      { value: "powerlix", label: "PowerLix" },
      { value: "printerjack", label: "Printer's Jack" },
      { value: "blami", label: "Blami" },
      { value: "mckay", label: "McKay" },
      { value: "ucc", label: "UCC" },
      { value: "vondior", label: "Vondior" },
      { value: "sigtuna", label: "Sigtuna" },
      { value: "powerbear", label: "PowerBear" },
    ];
    this.barChartData = [
      {
        name: "food",
        uv: 2000,
        pv: 2013,
        amt: 4500,
        bmk: 4301,
      },
      {
        name: "cosmetic",
        uv: 3300,
        pv: 2000,
        amt: 6500,
        bmk: 2000,
      },
      {
        name: "storage",
        uv: 3200,
        pv: 1398,
        amt: 5000,
        bmk: 3000,
      },
      {
        name: "digital",
        uv: 2800,
        pv: 2800,
        amt: 4000,
        bmk: 1500,
      },
    ];
    this.state = {
      currentChart: 1,
        };
  }

  _renderButton = (style, title) => {
    return <Button style={style} title={title} />;
  };

  showCharts = (id) => {
    this.setState({ currentChart: id });
  };

  

  _renderCharts = () => {
    const { currentChart } = this.state;
    switch (currentChart) {
      case 1:
      return <LineChartView/>;
        
      case 2:
        return <BarChartView position="horizontal" data={this.barChartData} />;
      case 3:
        return<BrushDemoView/>;
      
      case 4:
        return <PieChartView />;
      case 5:
        return <BarChartView position="vertical" data={this.barChartData} />;
        case 6:
          return<AreaChartView/>;
          case 7:
            return <RadarChartView/>;
            case 8:
              return <ScaterChartView/> ;
      default:
      // code block
    }
  };

  _renderDropDown = (data, title) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flex: 1,
        }}
      >
        <div
          style={{
            padding: "10px",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
            borderTop: "1px solid lightgrey",
            borderLeft: "1px solid lightgrey",
            borderBottom: "1px solid lightgrey",
            height: "20px",
          }}
        >
          <span>{title}</span>
          <span
            style={{
              border: "none",
              borderRight: "1px solid grey",
              height: "20px",
              marginLeft: "10px",
            }}
          ></span>
        </div>
        <DropdownWithSelect optionsList={data} />
      </div>
    );
  };

  _renderTitle = () => {
    return (
      <div>
        <h2 style={{ marginTop: 0 }}>New Dashboard (1) <DateTime/></h2>
      </div>
    );
  };

  _renderHeader = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "30px",
        }}
      >
        <div style={{ marginRight: "15px" }}>
          {this._renderButton(
            {
              border: "none",
              borderRadius: "5px",
              padding: "13px",
              backgroundColor: "#f4cc0b",
            },
            "Filter"
          )}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flex: 1,
            marginRight: "15px",
          }}
        >
          <div style={{ flex: 1, display: "flex", marginRight: "15px" }}>
            {this._renderDropDown(this.columnList, "Column")}
          </div>
          <div style={{ flex: 1, display: "flex" }}>
            {this._renderDropDown(this.rowList, "Row")}
          </div>
        </div>
        <div>
          {this._renderButton(
            {
              border: "none",
              borderRadius: "5px",
              padding: "13px",
              backgroundColor: "#f24b4b",
              color: "#fff",
              marginRight: "15px",
            },
            "REF"
          )}
          {this._renderButton(
            {
              border: "none",
              borderRadius: "5px",
              padding: "13px",
              backgroundColor: "#f24b4b",
              color: "#fff",
            },
            "Export"
          )}
        </div>
      </div>
    );
  };

  _renderRightPanel = () => {
    return (
      <div
        style={{
          height: "100%",
          width: "290px",
        }}
      >
        <div
          style={{
            border: "1px solid lightgrey",
            borderRadius: "5px",
            height: "83%",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              listStyleType: "none",
              margin: 0,
              display: "flex",
              flexWrap: "wrap",
              padding: 15,
            }}
          >
            {this.chartTypes.map((item) => (
              <a
                href="#"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  // padding: 15,
                  border: "1px solid lightgrey",
                  borderRadius: 5,
                  marginBottom: 15,
                  width: 120,
                  height: 120,
                }}
                onClick={() => this.showCharts(item.id)}
                key={item.id}
              >
                <img
                  src={item.image}
                  style={{
                    width: 100,
                    height: 100,
                    overflow: "hidden",
                  }}
                />
                <span
                  style={{
                    marginBottom: 15,
                    fontSize: 12,
                  }}
                >
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div>
          {this._renderButton(
            {
              border: "none",
              borderRadius: "5px",
              padding: "13px",
              backgroundColor: "#f24b4b",
              color: "#fff",
              width: "100%",
            },
            "Finish and Save"
          )}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div
        style={{
          height: "100%",
        }}
      >
        <Navbar />
        <div style={{ padding: "30px" }}>
          {this._renderTitle()}
          {this._renderHeader()}
          <div
            style={{
              display: "flex",

              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <div
              style={{
                border: "1px solid lightgrey",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "column",
                flex: 1,
                marginRight: "30px",
              }}
            >
              {this._renderCharts()}
            </div>
            {this._renderRightPanel()}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
