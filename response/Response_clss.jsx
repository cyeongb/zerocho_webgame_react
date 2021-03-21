import React, { Component } from "react";
import style from "./response.css";
class Response_clss extends Component {
  state = {
    state: "waiting",
    message: "click and start",
    result: [],
  };

  timeout;
  startTime;
  endTime;

  onClickScreen = (e) => {
    const { state } = this.state;

    if (state === "waiting") {
      timeout.current = setTimeout(() => {
        this.setState({
          state: "now",
          message: "CLICK NOW !!!",
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); //2~3초 랜덤
      this.setState({
        state: "ready",
        message: "색이 바뀌면 빨리 클릭하세요",
      });
    } else if (state === "ready") {
      //성급하게 클릭했을 시
      clearTimeout(this.timeout);
      this.setState({
        state: "waiting",
        message: "실패ㅡ.ㅜ  아직 색이 안바꼈어요 ! ",
      });
    } else if (state === "now") {
      this.endTime.current = new Date();
      this.setState((prevState) => {
        return {
          state: "waiting",
          result: [...prevState.result, this.endTime, this.startTime],
          message: "반응속도 체크하기 GO! ",
        };
      });
    }
  };

  onReset = () => {
    this.setState({ result: [] });
  };

  renderAverage = () => {
    const { result } = this.state;
    return result.length === 0 ? null : (
      <>
        <div>평균시간 : {result.reduce((a, c) => a + c / result.length)}</div>
        <button onclick={onReset}>RESET</button>
      </>
    );
  };
  render() {
    const { state, message } = this.state;
    return (
      <>
        <div id={style.screen} className={state} onclick={this.onClickScreen}>
          {message}
        </div>
        <div>
          평균 걸린 시간 :{this.renderAverage()}
          ms
        </div>
      </>
    );
  }
}

export default Response_clss;
