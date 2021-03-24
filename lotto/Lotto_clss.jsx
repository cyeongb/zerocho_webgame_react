import React, { Component } from "react";
import Ball from "./Ball";

function getNumbers() {
  console.log("getNumbers()");
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const lottoNums = shuffle.slice(0, 6).sort((a, b) => a - b); //오름차순
  return [...lottoNums, bonusNumber];
}

class Lotto_clss extends Component {
  state = {
    lottoNums: getNumbers(),
    lottoNumber: [],
    bonus: null,
    redo: false,
  };
  timeouts = [];

  runTimeouts = () => {
    console.log("runTimeouts()");
    const { lottoNums } = this.state;
    for (let i = 0; i < lottoNums.length - 1; i++) {
      this.timeouts[i] = setTimeout(() => {
        this.setState((prevState) => {
          return {
            lottoNumber: [...prevState.lottoNumber, lottoNums[i]],
          };
        });
      }, (i + 1) * 1000);
    }
    this.timeouts[6] = setTimeout(() => {
      this.setState({
        bonus: lottoNums[6],
        redo: true,
      });
    }, 7000);
  };

  componentDidMount() {
    console.log("componentDidMount()");
    this.runTimeouts();
    console.log("로또 숫자 생성중..");
  }

  componentDidUpdate(pevProps, prevState) {
    console.log("componentDidUpdate()");
    if (this.state.lottoNumber.length === 0) {
      this.runTimeouts();
    }
    if (prevState.lottoNums !== this.state.lottoNums) {
      console.log("로또 숫자 생성중..");
    }
    console.log("로또 숫자 생성중..");
  }

  componentWillUnmount() {
    console.log("componentWillUnMount()");
    this.timeouts.forEach((v) => {
      clearTimeout(v);
    });
  }

  onClickRedo = () => {
    console.log("onClickRedo()");

    this.setState({
      lottoNums: getNumbers(),
      lottoNumber: [],
      bonus: null,
      redo: false,
    });
    this.timeouts = [];
  };

  render() {
    return (
      <>
        <h2>L O T T O 💲🔴🟠🟡🟢🔵🟣</h2>
        <div id="result">
          {lottoNumber.map((v) => (
            <Ball key={v} number={v} />
          ))}
        </div>
        <h2>BONUS ! 🔻 </h2>
        <div>
          {bonus && <Ball number={bonus} />}
          {redo && <Button onClick={this.onClickRedo}></Button>}
        </div>
      </>
    );
  }
}

export default Lotto_clss;
