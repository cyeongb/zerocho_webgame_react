import React, { useReducer, createContext, useMemo } from "react";
import Table from "./Table";

export const CODE = {
  //지뢰 상태에 대한 코드
  MINE: -7,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6,
  OPENED: 0, // 0이상이면 다  OPENED
};

export const tableContext = createContext({
  //createContext()는 함수.
  // tableContext에 default value를 넣어줄수 있습니다.
  // 초기값은 별 의미없으니 모양만 맞춤
  tableData: [],
  dispatch: () => {},
});

const initialState = {
  tableData: [],
  timer: 0, // 게임시간
  result: "",
};

//지뢰배치함수
const plantMine = (hor, ver, mine) => {
  console.log("가로:" + hor + "세로:" + ver + "지뢰:" + mine);
  const candidate = Array(hor * ver)
    .fill() //0~99까지의 숫자 배열 만듬
    .map((arr, i) => {
      return i;
    });

  const shuffledMine = [];
  while (candidate.length > hor * ver - mine) {
    //지뢰 갯수만큼
    const chosen = candidate.splice(
      Math.floor(Math.random() * candidate.length),
      1
    )[0];
    shuffledMine.push(chosen); //1개씩 지뢰갯수만큼 shuffledMine배열을 채웁니다
  }

  const data = [];

  for (let i = 0; i < ver; i++) {
    const rowData = [];
    data.push(rowdata);
    for (let j = 0; j < hor; j++) {
      rowData.push(CODE.NORMAL); //NORMAL 칸으로 2차원 배열 만듬(100칸)
    }
  }

  //지뢰 크기만큼 랜덤으로 지뢰 심어주기[first,secnod]
  for (let k = 0; k < shuffledMine.length; k++) {
    const first = Math.floor(shuffledMine[k] / hor);
    const second = shuffledMine[k] % hor;
    data[first][second] = CODE.MINE;
  }
  return data; // == tableData
};

export const START_GAME = "START_GAME";

const reducer = (state, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        // 지뢰심는 함수 plantMine
        tableData: plantMine(action.ver, action.hor, action.mine),
      };
    default:
      return state;
  }
};

const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(
    () => ({
      tableData: state.tableData,
      dispatch,
    }),
    [state.tableData] //dispatch는 바뀌지 않습니다
  );
  return (
    <>
      <TableContext.Provider value={value}>
        {/**contextAPI가 Provider를 제공합니다.
         * <Provider>로 묶은 안에 컴포넌트들의 데이터에 접근할 수 있습니다.
         * value= 데이터 , 데이터들을 자식 컴포넌트에서 접근할수 있습니다
         * 다만 단점은, re-rendering이 될때마다 컴포넌트가 다시 만들어집니다.
         *  그 자식 컴포넌트들도 다 다시 만들어져서 성능이 떨어집니다
         * 그래서 useMemo로 캐싱을 해줍니다.
         * */}
        <Form />
        <div>{state.timer}</div>
        <Table />
        <div>{state.result}</div>
      </TableContext.Provider>
    </>
  );
};

export default MineSearch;
