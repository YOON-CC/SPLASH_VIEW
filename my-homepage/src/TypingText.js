import React, { useState, useEffect } from 'react';

const TypingText = ({text, speed}) => { 
  const [Text, setText] = useState("");
  const [Count, setCount] = useState(0);
  const [index, setIndex] = useState(0);
  let updated = Text;
  
  useEffect(() => {
    let typingText = text ? text : "";//기본값
    let typingSpeed = speed ? speed : "";//기본값
    const interval = setInterval(() => { // setInterval은 함수를 반복 한다.
        setText((Text)=>{
          updated = Text + typingText[index][Count];
          return updated;
        });
          setCount(Count + 1);
    }, typingSpeed);
    
    // 다음 배열 실행하는 조건문
    if ((Count === typingText[index].length+1)){ // Count가 일차 배열의길이와 일치 즉, 일차배열의 문자가 다 입력되면
      setCount(Count - (typingText[index].length+1)); // Count는 초기화
      setText(""); // 타이핑문자 초기화
      if (index !==(typingText.length-1)){ // 전체 일차배열의 수를 넣으면 된다.
        setIndex(index + 1); // 그다음 일차배열 실행
      }
    }

    return () => clearInterval(interval);
})
  return (
    <div class='TypingText'>{ Text }</div>
  )
};

export default TypingText;