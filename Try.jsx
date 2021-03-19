import React from "react";

// import Baseball_clss from "./Baseball_clss";
class Try extends React.Component {
  render() {
    const { tryInfo } = this.props;

    console.log(tryInfo);

    return (
      <div>
        <li>
          <div>{tryInfo.try}</div>
          <div>{tryInfo.result}</div>
        </li>
      </div>
    );
  }
}

export default Try;
