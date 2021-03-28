import React, { useEffect, useReducer, useCallback } from "react";
import Table from "./Table";
import "./tictacto.css";

//const [state, dispatch] = useReducer(reducer, initialState);

const initialState = {
  //state들의 모음
  winner: "",
  turn: "O",
  tableData: [
    //3x3 2차원배열
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  recentCell: [-1, -1],
};

export const SET_WINNER = "SET_WINNER";
export const CLICK_CELL = "CLICK_CELL";
export const CHANGE_TURN = "CHANGE_TURN";
export const RESET_GAME = "RESET_GAME";

const reducer = (state, action) => {
  //action이 실행될때 state값을 변경하고 싶을때 reducer를 사용합니다.
  //action이 dipatch될때마다 실행=> action의 type별로 action(winner값 변경하는 액션)을 실행합니다.
  switch (action.type) {
    case SET_WINNER:
      return {
        ...state, //state값 복사해서 새로운 state객체 만듬
        winner: action.winner, //그리고 바뀌는 부분만 바꾼다
        //state.winner = action.winner 이렇게 객체에 직접 대입은ㄴㄴ x
      };

    case CLICK_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]]; //immer라는 라이브러리로 가독성 해결할 수 있습니다.
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData,
        recentCell: [action.row, action.cell],
      };
    }

    case CHANGE_TURN: {
      return {
        ...state,
        turn: state.turn === "O" ? "X" : "O",
      };
    }

    case CHANGERESET_GAME: {
      return {
        ...state,
        turn: "O",
        tableData: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        recentCell: [-1, -1],
      };
    }
    default:
      return state;
  }
};

const Tictactoe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tableData, turn, winner, recentCell } = state;
  // const [winner, setWinner] = useState('');
  // const [turn, setTurn] = useState('O');
  // const [tableData, setTableData] = useState([['', '', ''], ['', '', ''], ['', '', '']]);

  const onClickTable = useCallback(() => {
    // 컴포넌트에 넣는 함수들은 다 useCallback을 사용합니다.
    dispatch({ type: SET_WINNER, winner: "O" }); //dispatch안에 들어가는것들은 action 객체입니다.
    //이게 실행되면 action객체들을 전달해주는데, 이 action객체가 dispatch될때마다 reducer함수가 실행됩니다.
  }, []);

  useEffect(() => {});
  return (
    <>
      <Table onClick={onClickTable} />
      {state.winner && <div>{state.winner}님의 승리</div>}
    </>
  );
};

export default Tictactoe;
