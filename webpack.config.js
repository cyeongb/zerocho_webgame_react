const WordRelay = require("./WordRelay");
const path = require("path");

module.exports = {
  name: "word-relay set",
  mode: "development", //production
  devtool: "eval", //빠르게
  resolve: {
    extensions: [".jsx"], //확장자가 .jsx로 끝나는 파일을 다 스캔한다.
  },
  entry: {
    //입력

    //두 jsx파일을 합쳐서 하나의 js 파일로 만들 예정.
    app: ["./client", " ./WordRelay"],
  },
  output: {
    //출력
    path: path.join(__dirname, "dist"), //__dirname: 현재폴더
    // path.join하면 현재 폴더를 중심으로 경로를 잡아준다.
    filename: "app.js", //원하는 파일 명
  },
};
