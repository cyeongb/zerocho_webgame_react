const React = require("react");
const { Component } = React;

class WordRelay extends Component {
  state = {
    word: "감비",
    value: "",
    result: "",
    next: this.word + "다음에 올 말은?",
  };
  onSubmitForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({ result: "NICE! ", word: this.state.value, value: "" });
      this.input.focus();
    } else {
      this.setState({ result: "NOPE" });
      this.input.focus();
    }
  };

  input;
  onRefInput = (c) => {
    this.input = c;
  };

  onChangeInput = (e) => {
    this.setState({ value: e.currentTarget.value });
  };

  render() {
    console.log("Success Webpack!");
    return (
      <>
        {this.state.word}
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.onRefInput}
            value={this.state.value}
            onChange={this.onChangeInput}
            placeholder={this.state.next}
          />
          <button>Next!</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = WordRelay;
