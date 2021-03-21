import React from "react";
import ReactDom from "react-dom";

import Gugudan from "./gugudan/Gugudan";
import WordRelay from "./wordrelay/WordRelay_func";
import Baseball_clss from "./baseball/Baseball_clss";
import Baseball_func from "./baseball/Baseball_func";
import Response_clss from "./response/Response_clss";

ReactDom.render(<Response_clss />, document.querySelector("#root"));
