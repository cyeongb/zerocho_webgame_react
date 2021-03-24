import React, { useState, useRef, useEffect } from "react";

const rsp_func = () => {
  const rspCoords = {
    rock: "0",
    scissor: "-142px",
    paper: "-284px",
  };

  const scores = {
    scissor: 1,
    rock: 0,
    paper: -1,
  };

  const computerChoice = (coord) => {
    return Object.entries(rspCoords).find(function (v) {
      return v[1] === coord;
    })[0];
  };

  const changeHand = () => {
    if (coord === rspCoords.rock) {
      setCoord(rspCoords.scissor);
    } else if (coord === rspCoords.scissor) {
      setCoord(rspCoords.paper);
    } else if (coord === rspCoords.paper) {
      setCoord(rspCoords.rock);
    }
  };

  const onClickBtn = (choice) => () => {
    // high oreder function :onClick 이벤트에 쓰이는 ()=> 를 컴포넌트에 붙여 쓸수 있습니다.
    const { coord } = this.state;

    clearInterval(interval.current); //클릭하면 멈춰서 누가 이겼는지 눈으로 확인하기 위함입니다.
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(coord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      setResult("비겼다!");
    } else if ([-1, 2].includes(diff)) {
      setResult("이겼다!");
      setScore((prevScore) => {
        prevScore + 10;
      });
    } else {
      setResult("졌다 ㅠㅠ");
      setScore((prevScore) => {
        prevScore - 5;
      });
    }
    setTimeout(() => {
      //결과 확인하는 시간
      interval.current = setInterval(changeHand, 100); //대결 후 잠깐 멈춰지고 다시 움직이게합니다.
    }, 1200);
  };

  const [result, setResult] = useState("");
  const [coord, setCoord] = useState(rspCoords.rock);
  const [score, setScore] = useState(0);
  const interval = useRef();

  useEffect(() => {
    //componentDidMount +componentDidUpdate 역할  특정 데이터가 바뀌면 계속 실행됩니다. setTimeout처럼.
    interval.current = setInterval(changeHand, 400);
    return () => {
      // return 은 componentWillUnMount 역할.
      clearInterval(interval.current); //클릭하면 멈춰서 누가 이겼는지 눈으로 확인하기 위함입니다.
    };
  }, [coord]); //이미지가 바뀔때마다 실행

  return (
    <>
      <div
        id="computer"
        style={{
          background: `url(https://imgnn.seoul.co.kr/img/upload/2011/07/25/SSI_20110725110811_V.jpg) ${coord}0`,
        }}
      />
      <div>
        <button id="rock" className="btn_r" onClick={onClickBtn("rock")}>
          바위
        </button>
        <button id="scissor" className="btn_s" onClick={onClickBtn("scissor")}>
          가위
        </button>
        <button id="paper" className="btn_p" onClick={onClickBtn("paper")}>
          보
        </button>
      </div>
      <div>{result}</div>
      <div>SCORE:{score}</div>
    </>
  );
};

export default rsp_func;
