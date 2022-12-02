import React, { Component } from "react";

class Navbar extends Component {
  _renderMenu = () => {
    return (
      <div>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            listStyleType: "none",
            margin: 0,
          }}
        >


          <li style={{ padding: "20px", color: "#fff" }}>Summary<select id = "dropdown" style={{ color:"white", backgroundColor:"black"    , border :"none"      }}> <option ></option>  </select></li>
          <li style={{ padding: "20px", color: "#fff" }}>Amazon Tool<select id = "dropdown" style={{ color:"white", backgroundColor:"black"    , border :"none"      }}> <option ></option>  </select></li>   
      
          <li style={{ padding: "20px", color: "#fff" }}>
            Were house Invented
          </li>
        </ul>
      </div>
    );
  };

  _renderLogo = () => {
    return (
      <div>
        <img
          src="https://prominance.com/wp-content/uploads/2017/12/prominancelogo-2-1.png"
          height="35px"
          alt=""
        />
      </div>
    );
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {this._renderLogo()}
          {this._renderMenu()}
        </div>
        <div>
          <p style={{ padding: "10px 0 10px 0", color: "#fff", margin: 0 }}>
            Monica Simons
          </p>
        </div>
      </div>
    );
  }
}

export default Navbar;
