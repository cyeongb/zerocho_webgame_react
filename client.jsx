import React from "react";
import ReactDom from "react-dom";

//import Response_func from "./Response_func.jsx";
import rsp_clss from "./rsp/rsp_clss.jsx";
const Hot = hot(rsp_clss);
ReactDom.render(<Hot />, document.querySelector("#root"));
