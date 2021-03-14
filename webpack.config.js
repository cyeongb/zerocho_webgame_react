//const WordRelay = require("./WordRelay");
const path = require("path");

module.exports = {
  name: "word-relay-set",
  mode: "development", //production
  devtool: "eval", //:개발용  hidden-source-map : production용
  resolve: {
    extensions: [".jsx", ".js"], //확장자가 .jsx로 끝나는 파일을 다 스캔한다.
  },
  entry: {
    //입력

    //두 jsx파일을 합쳐서 하나의 js 파일로 만들 예정.
    app: ["./client"], // ./WordRelay 파일은 이미 client.jsx안에서 가져옴
  },

  module: {
    //modules는 entry파일을 해당 module에 적용한 후에 output으로 내보냄.
    rules: [
      {
        //module에 여러개의 규칙을 적용합니다.
        test: /\.jsx$/, //정규표현식으로, .jsx파일에 rule을 적용.
        loader: "babel-loader", //babel-loader를 적용해서 최신문법을 babel에 돌아가는 버전으로 바꿈
        options: {
          //바벨은 presets와 plugin이 없으면 아무런 동작을 하지않는다고함
          presets: [
            // presets은 plugin의 모음이다. 그래서 presets를 좀 더 새밀하게 설정할 수 있음.
            // 배열형태로 만들어서 첫번째 인자로는 preset이름을, 두번째 인자로는 설정값을 넣어준다.
            [
              "@babel/preset-env", //preset-env : 환경에맞게 맞춰줌
              //--> 자신의 환경에 맞게 지원하는 버전만 해주는것이 좋다. 너무 많이 지원하게되면 바벨이 느려짐
              { targets: { browsers: ["last 2 chrome versions"] } }, //최근 두 크롬 버전 브라우저만 지원한다.
            ],
            "@babel/preset-react", //preset-react : react를 지원하는 플러그인들
          ],
          plugins: [
            "@babel/plugin-syntax-class-properties",
            "babel-plugin-transform-class-properties",
          ], //react class형을 쓰기위한 플러그인
        },
      },
    ],
  },
  output: {
    //출력
    path: path.join(__dirname, "dist"), //__dirname: 현재폴더
    // path.join하면 현재 폴더를 중심으로 경로를 잡아준다.
    filename: "app.js", //원하는 파일 명
  },
};
