import React from "react";
import ReactDom from "react-dom";

import Gugudan from "./gugudan/Gugudan";

import Baseball_clss from "./baseball/Baseball_clss";
import Baseball_func from "./baseball/Baseball_func";
import Response_clss from "./response/Response_clss";

ReactDom.render(<Baseball_func />, document.querySelector("#root"));
