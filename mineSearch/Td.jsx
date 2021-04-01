import React, { useContext, useCallback } from "react";
import { TableContext } from "./MineSearch";

const TdStyle = (code) => {
  switch (code) {
    case CODE.NORMAL:
      return {
        background: "black",
      };

    case CODE.OPENED:
      return {
        background: "white",
      };
    default:
      "white";
  }
};

const getTdText = (code) => {
  switch (code) {
    case CODE.NORMAL:
      return "";
    case CODE.MINE:
      return "😱";
    case CODE.CLICKED_MINE:
      return "💥";
    default:
      "";
  }
};

const Td = ({ rowIndex, cellIndex }) => {
  const { tableData, dispatch } = useContext(TableContext);
  // table 데이터는 contextAPI를 이용해서 받고,
  // 몇번째 줄,칸인지는 props를 이용해서 표시합니다

  const onClickTd = useCallback(() => {
    switch (
      tableData[rowIndex][cellIndex] //클릭 시 cell 상태별 분기처리
    ) {
      case CODE.OPENED:
      case FLAG:
      case FLAG_MINE:
      case QUESTION:
      case QUESTION_MINE:
        return;

      case CODE.NORMAL: {
        dispatch({ type: OPEN_CELL, ver: rowIndex, hor: cellIndex });
        return;
      }
      case CODE.MINE: {
        dispatch({ type: CLICKED_MINE, ver: rowIndex, hor: cellIndex });
        return;
      }
    }
  });

  return (
    <td style={TdStyle(tableData[rowIndex][cellIndex])} onClick={onClickTd}>
      {getTdText(tableData[rowIndex][cellIndex])}
    </td>
  );
};

export default Td;
