import React, { Component } from "react";
import "./CountPeople.css"; 

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entryCount: 0,
      exitCount: 0,
    };
  }

  updateEntry = () => {
    this.setState((prevState) => ({
      entryCount: prevState.entryCount + 1,
    }));
  };

  updateExit = () => {
    this.setState((prevState) => ({
      exitCount: prevState.exitCount + 1,
    }));
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
        <div style={{ marginRight: "50px", textAlign: "center" }}>
          <button
            onClick={this.updateEntry}
            style={{ backgroundColor: "lightgreen", padding: "10px 20px", fontSize: "16px" }}
          >
            Login
          </button>
          <p style={{ fontSize: "18px" }}>{this.state.entryCount} People Entered!!!</p>
        </div>

        <div style={{ textAlign: "center" }}>
          <button
            onClick={this.updateExit}
            style={{ backgroundColor: "lightgreen", padding: "10px 20px", fontSize: "16px" }}
          >
            Exit
          </button>
          <p style={{ fontSize: "18px" }}>{this.state.exitCount} People Left!!!</p>
        </div>
      </div>
    );
  }
}

export default CountPeople;
