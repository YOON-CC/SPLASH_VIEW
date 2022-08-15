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
      <img class="w1_boost" alt="" src="img/wheel1.png"></img>
      <img class="w2_boost" alt="" src="img/wheel2.png"></img>
    </div>
    <div class ="wind1"></div>
    <div class ="wind2"></div>
    <div class ="wind3"></div>
    <div class ="wind4"></div>
    <div class ="wind5"></div>
    <div class ="wind6"></div>
    <div class ="wind7"></div>
    <div class ="wind8"></div>
    <div class ="wind9"></div>
    <div class ="wind10"></div>
    <div class ="wind11"></div>

    <div class = "curtain1"></div>
    <div class = "curtain2"></div>
    <div class = "curtain3"></div>
    <div class = "curtain4"></div>
    <div class = "curtain5"></div>
    <div class = "curtain6"></div>
  </div>
}

//드라이브1
function DRIVE1(){
  return <div className="start">
    <div class="click_to_start_out">​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​</div>
    <img class="g_class_drive" alt="" src="img/G_CLASS.png"></img>
    <div class='rail_drive1'></div>
    <div class='wheel_control_drive'>
      <img class="w1_drive" alt="" src="img/wheel1.png"></img>
      <img class="w2_drive" alt="" src="img/wheel2.png"></img>
    </div>
</div>
}

//드라이브2 => 사이드
function DRIVE2(){
  return <div className="start">
    <div class="click_to_start_out">​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​</div>
    <img class="g_class_drive2" alt="" src="img/G_CLASS_FRONT.png"></img>
    <div class ="rail_drive2"></div>
    <div class ="rail_drive22"></div>
    <div class='wheel_control_drive2'>
      <img class="w1_drive2" alt="" src="img/wheel1.png"></img>
      <img class="w2_drive2" alt="" src="img/wheel2.png"></img>
    </div>
</div>
}

/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
function App() {
  const [mode, setMode] = useState('stop');
  let content = null;
  let content1 = null;
  let content2 = null;

  //타이핑 문자에서 버튼 state
  const [btn, setbtn] = useState(undefined);
  const changebtn = (value) =>{
    setbtn(value);
  }

  //드라이브 state
  const[drive, setDrive] = useState(0);

  //홈페이지 이동
  const [go, setGo] = useState(0);

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
  
  //부스트 온!
  if(btn === 1){ 
    content = <BOOST></BOOST>;
    content1 = <audio src = "audio/지바겐_과속.mp3" autoPlay></audio>
    setTimeout(()=>{ setGo(1) }, 8000);
  }  
  
  //드라이브시작~
  if(btn === 2 && drive == 0){ 
    content = null;
    content1 = <DRIVE1></DRIVE1>
    setTimeout(()=>{ setDrive(1) }, 7000);
  }

  //씬전환1
  if(drive === 1){
    content = null;
    content1 = <DRIVE2></DRIVE2>
  }


  // 홈페이지 이동!
  if(go === 1){
    content = null;
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
