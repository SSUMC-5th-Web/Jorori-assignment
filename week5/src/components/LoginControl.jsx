import React, { useState } from "react";

export default function LoginControl() {

    const [logIn,setLogIn] = useState(false);


    const makeLogIn = () =>{
        setLogIn(true);
    };
    
    const makeLogOut = () =>{
        setLogIn(false);
    };
   
  
    return <div className="logInBar">
    <button className="loginBtn"  onClick={logIn ? makeLogOut : makeLogIn}>
      {logIn ? "로그아웃" : "로그인" }
    </button>
    <div className="messageSend">
        {logIn ? "환영합니다" : "로그인 하세요"}
    </div>
    </div>;
}
