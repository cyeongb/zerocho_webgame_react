import React, { Component } from "react";

class Response_clss extends Component {
  state = {
    state: "waiting",
    message: "click and start",
    result: [],
  };

  onClickScreen = (e) => {};
  render() {
    return (
      <>
        <div
          id="screen"
          className={this.state.state}
          onclick={this.onClickScreen}
        >
          {this.state.message}
        </div>
        <div>
          평균 걸린 시간 :
          {this.state.result.reduce((a, c) => a + c) / this.state.result.length}
          ms
        </div>
      </>
    );
  }
}

export default Response_clss;
