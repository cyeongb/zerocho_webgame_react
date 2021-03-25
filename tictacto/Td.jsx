import React, { useCallback, memo } from "react";
import { CLICK_CELL } from "./Tictactoe";
const Td = memo(({ rowIndex, cellIndex, dispatch, cellData }) => {
  console.log("Td class rendering");

  const onClickTd = useCallback(() => {
    console.log("rowIndex :" + rowIndex + " cellIndex :" + cellIndex);

    if (cellData) {
      return;
    }

    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
  }, [cellData]);
  return <td onClick={onClickTd}>{cellData}</td>;
});

export default Td;
