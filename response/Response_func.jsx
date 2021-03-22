import React, { useState, useCallback, useRef, useMemo } from "react";

const Response_func = () => {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("click and start");
  const [result, setResult] = useState([]);

  const timeout = useRef(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  //useCallback 으로 데이터가 바뀔때만 컴포넌트를 실행하게 함
  const onClickScreen = useCallback(() => {
    if (state === "waiting") {
      timeout.current = setTimeout(() => {
        setState("now");
        setMessage("CLICK NOW !!!");
        startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); //2~3초 랜덤
      setState("ready");
      setMessage("색이 바뀌면 빨리 클릭하세요");
    } else if (state === "ready") {
      //성급하게 클릭했을 시
      clearTimeout(timeout);
      setState("waiting");
      setMessage("실패ㅡ.ㅜ  아직 색이 안바꼈어요 ! ");
    } else if (state === "now") {
      endTime.current = new Date();
      setState("waiting");
      setMessage("반응속도 체크하기 GO! ");
      setResult((prevState) => {
        return [...prevState, endTime.current, startTime.current];
      });
    }
  }, [state]);

  const onReset = useCallback(() => {
    setResult([]);
  }, []);

  const renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>평균시간 : {result.reduce((a, c) => a + c / result.length)}ms</div>
        <button onClick={onReset}>RESET</button>
      </>
    );
  };

  return (
    <>
      <div id="screen" className={state} onclick={onClickScreen}>
        {message}
      </div>
      <div>{renderAverage()}</div>
    </>
  );
};

export default Response_func;
