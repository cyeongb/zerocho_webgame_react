import React, { Component } from "react";


function getNumbers(){  //숫자 4개를  겹치지않고 랜덤하게 뽑는 함수

    const numbers=[1,2,3,4,5,6,7,8,9];
    const array=[];

    for(let i=0;i<4;i++){
        const pick =numbers.splice(Math.floor(Math.random()*(9-i)),1)[0];
        array.push(pick);

    }
    return array;
}

export default class Baseball_clss extends Component {
  state = {
    result: "",
    value: "",
    answer=getNumbers(),
    tries:[]
  };

  onChangeInput=()=>{

  }

  onSubmitForm=(e)=>{
      e.preventDefault();

      if(this.state.value === this.state.answer.join('')){
        this.setState({
          result:'Home Run ~!', 
          tries : [...this.state.tries,{try:this.state.value,result:'Home Run !!'}]})
      }else{
          const answerArray = this.state.value.split('').map((v)=>{parseInt(v)});
          let strike = 0;
          let ball = 0;
          if(this.state.tries.length >9){ //10번 이상 틀리면
            this.setState({
              result:`FAIL !  답 : ${answer.join(',')}`,
            });
            confirm('Continue?');
            this.setState({ 
              value:'' , 
              answer:getNumbers(), 
              tries:[],})
          }else{
            for(let i=0;i<4;i++){
              if(answerArray[i]=== this.state.ansert[i]){
                strike+=1;  //위치와 숫자가 맞으면 스트라이크
              }else if(this.state.answer.includes(answerArray[i])){
                ball +=1; // 숫자만 포함되어있으면 볼
              }
            }
            this.setState({
              tries:[
                ...this.state.tries,{
                try:this.state.value, 
                result:`Strike : ${strike} , Ball : ${ball} `}],
              value:''
              });
          }
      }

  }
  render() {
    return (
    <>
    <h1>결과 : {this.state.result}</h1>
    <form onSubmit={this.onSubmitForm}>
        <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
    </form>
    <div>TRY :{this.state.tries.length}</div>
    <ul>
        {
            [].map((m,index)=>{ 
                //key 값에는 index값을 사용하는걸 지양함. key를 기준으로 데이터가 수정,삭제되기때문에 문제가 생긴다고 함
                return(<li key={m}>{m}</li>) 
            })
        }


    </ul>
    </>
    );
  }
}
