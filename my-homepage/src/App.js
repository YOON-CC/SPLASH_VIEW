import './App.css';
import React, {useState } from "react";
import TypingText  from './TypingText.js';
import './TypingText.css';

/*READY - 클릭을 하지 않았을 경우의 함수(HOVER)*/
function READY(props){
  return <div className="start">
    <div class ="black_box"></div>
    <div class="click_to_start">▼ CLICK TO START ▼</div>
    <img class="g_class_b" alt="" src="img/G_CLASS_B.png" onMouseOver={(event)=>{
      props.onReady();
    }}></img>
  </div>
}

/*STOP - 클릭을 하지 않았을 경우의 함수*/
function STOP(props){
  return <div className="start">
    <div class ="black_box"></div>
    <div class ="white_circle"></div>
    <div class="click_to_start">▼ CLICK TO START ▼</div>
    <img class="g_class_b" alt="" src="img/G_CLASS_B.png" onMouseLeave={(event)=>{
      props.onReady(); /*다시 Ready상태로 돌아간다.*/
    }}onClick={(event)=>{
      props.onChangeMode();
    }}></img>
  </div>
}

/*GO - 클릭을 했을 경우의 함수, click_to_start에 폭없는 공백문자를 사용했다.*/
function GO(){
  return <div className="start" >
    <div class ="black_box_out"></div>
    <div class ="white_circle_out"></div>
    <div class="click_to_start_out">▼ CLICK TO START ▼​</div>
    <img class="g_class" alt="" src="img/G_CLASS.png"></img>
    <div class='rail'></div>
    <div class='wheel_control'>
      <img class="w1" alt="" src="img/wheel1.png"></img>
      <img class="w2" alt="" src="img/wheel2.png"></img>
    </div>
    <img class="c1" alt="" src="img/건물.png"></img>
    <img class="c2" alt="" src="img/건물.png"></img>
    <img class="t1" alt="" src="img/나무.png"></img>
    <img class="t2" alt="" src="img/나무.png"></img>
    <img class="t3" alt="" src="img/나무.png"></img>
    <img class="t4" alt="" src="img/나무.png"></img>
  </div>
}

/*부스터 온! - 홈페이지로 넘어간다.*/
function BOOST(){
  return <div className="start" >
    <div class="click_to_start_out">​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​</div>
    <img class="g_class_boost" alt="" src="img/G_CLASS.png"></img>
    <div class='rail_boost'></div>
    <div class='wheel_control_boost'>
      <img class="w1" alt="" src="img/wheel1.png"></img>
      <img class="w2" alt="" src="img/wheel2.png"></img>
    </div>
  </div>
}


/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
function App() {
  const [mode, setMode] = useState('stop');
  let content = null;
  let content1 = null;
  let content2 = null;
  
  const [btn, setbtn] = useState(undefined);
  const changebtn = (value) =>{
    setbtn(value);
  }

  //타이핑 문자배열 - 공백문자 출처https://animalface.site/zerospace.html
  const textbox= ["​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​","Hello​​​​​​​​​​​​​​​​​​​​​​​​​​​​","This is Chan's homepage​​​​​​​​​​​​​​​​​​​​​​​​​​​​", "How's it going?​​​​​​​​​​​​​​​​​​​​​​​​​​​​", "I'm the same everyday​​​​​​​​​​​​​​​​​​​​​​​​​​​​",
                  "......​​​​​​​​​​​​​​​​​​​​​​​​​​​​", "We're almost there​​​​​​​​​​​​​​​​​​​​​​​​​​​​", "Then...​​​​​​​​​​​​​​​​​​​​​​​​​​​​",
                   "Shall we visit for a while?​​​​​​​​​​​​​​​​​​​​​​​​​​​​","​"]// 공백문자 사용(텀을 두기 위함)
  
  //시작화면에서 인트로를 위한 코드
  if(mode === 'stop'){
    content = <READY onReady={()=>{
      setMode('ready')
    }}></READY>
  }
  else if(mode === 'ready'){
    content2 = <audio src = "audio/지바겐_시동.mp3" autoPlay></audio>
    content = <STOP onChangeMode={()=>{
      setMode('go');
    }} onReady={()=>{
      setMode('stop');
    }}></STOP>
  }
  else if(mode === 'go'){
    content = <GO></GO>
    content1 = <TypingText text={textbox} speed={200} changebtn = {changebtn}></TypingText>
    content2 = <audio src = "audio/운전브금.mp3" autoPlay></audio>   
  }
  if(btn === 1){
    content = <BOOST></BOOST>;
    content1 = null;
    content2 = null;
  }

  return (
    <div>
      <header>
        {content}
        {content1}
        {content2}
      </header>
    </div>
    
  );
}

export default App;
