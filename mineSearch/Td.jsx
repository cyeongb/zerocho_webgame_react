import React, { useContext } from "react";
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
      return "x";
    default:
      "";
  }
};

const Td = ({ rowIndex, cellIndex }) => {
  const { tableData } = useContext(TableContext);
  // table 데이터는 contextAPI를 이용해서 받고,
  // 몇번째 줄,칸인지는 props를 이용해서 표시합니다
  return (
    <td style={TdStyle(tableData[rowIndex][cellIndex])}>
      {getTdText(tableData[rowIndex][cellIndex])}
    </td>
  );
};

export default Td;
