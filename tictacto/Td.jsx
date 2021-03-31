import React, { useCallback, memo, useEffect, useRef } from "react";
import { CLICK_CELL } from "./Tictactoe"; // export한 action을 가져옵니다
const Td = memo(({ rowIndex, cellIndex, dispatch, cellData }) => {
  console.log("Td rendering");

  //useEffect와 useRef로 불필요한 렌더링이 일어나고있는지 확인하는 방법.
  const ref = useRef([]);
  useEffect(() => {
    console.log(
      //바뀌는 값이 있으면 false가 되고 그 데이터때문에 re-renering이 발생한다고 볼수 있습니다.
      rowIndex === ref.current[0],
      cellIndex === ref.current[1],
      dispatch === ref.current[2],
      rowIndecellDatax === ref.current[3]
    );
    ref.current = [rowIndex, cellIndex, dispatch, cellData];
    return () => {
      cleanup;
    };
  }, [rowIndex, cellIndex, dispatch, cellData]);

  const onClickTd = useCallback(() => {
    console.log("rowIndex :" + rowIndex + " cellIndex :" + cellIndex);

    if (cellData) {
      //이미 클릭을 해서 해당 td에 cellData가 있으면 재생성 안되게 막습니다
      return;
    }

    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });

    //몇번째줄(row), 몇번째 칸(cell)을 클릭했는지에 대한 action을 만들어서 reducer에 전달합니다.
  }, [cellData]);
  return <td onClick={onClickTd}>{cellData}</td>;
});

export default Td;
