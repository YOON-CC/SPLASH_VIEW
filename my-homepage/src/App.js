import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

/*STOP - 클릭을 하지 않았을 경우의 함수*/
function STOP(props){
  return <div className="start">
    <div class="click_to_start">▼ CLICK TO START ▼</div>
    <img class="g_class_b" alt="" src="img/G_CLASS_B.png" onClick={(event)=>{
      props.onChangeMode();
    }}></img>
  </div>
}

/*GO - 클릭을 했을 경우의 함수, click_to_start에 폭없는 공백문자를 사용했다.*/
function GO(){
  return <div className="start" >
    <div class="click_to_start">​</div>
    <img class="g_class" alt="" src="img/G_CLASS.png"></img>
    <div class='rail'></div>
    <img class="c1" alt="" src="img/건물.png"></img>
    <img class="c2" alt="" src="img/건물.png"></img>
    <img class="t1" alt="" src="img/나무.png"></img>
    <img class="t2" alt="" src="img/나무.png"></img>
    <img class="t3" alt="" src="img/나무.png"></img>
    <img class="t4" alt="" src="img/나무.png"></img>
    <img class="w1" alt="" src="img/wheel1.png"></img>
    <img class="w2" alt="" src="img/wheel2.png"></img>
  </div>
}
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
function App() {
  const [mode, setMode] = useState('stop');
  let content = null;
  let content2 = null;
  if(mode === 'stop'){
    content = <STOP title = {mode} onChangeMode={()=>{
      setMode('go');
    }}></STOP>
  }
  else if(mode === 'go'){
    content = <GO></GO>
    content2 = <audio src = "audio/운전브금.mp3" autoPlay></audio>
  }

  return (
    <div>
      {content}
      {content2}
    </div>
  );
}

export default App;
