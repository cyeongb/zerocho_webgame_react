import React, { memo } from "react";
import Td from "./Td";
const Tr = memo(({ rowData, rowIndex, dispatch }) => {
  console.log("Tr class rendering");
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((v, i) => (
          <Td
            key={i + v}
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
});

export default Tr;
