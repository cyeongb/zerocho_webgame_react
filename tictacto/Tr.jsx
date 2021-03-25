import React, { memo } from "react";
import Td from "./Td";
const Tr = ({ rowData, rowIndex, dispatch }) => {
  console.log("Tr class rendering");
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((td, i) => (
          <Td
            key={i}
            dispatch={dispatch}
            rowIndex={rowIndex}
            cellIndex={i}
            cellData={rowData[i]}
          >
            {""}
          </Td>
        ))}
    </tr>
  );
};

export default Tr;
