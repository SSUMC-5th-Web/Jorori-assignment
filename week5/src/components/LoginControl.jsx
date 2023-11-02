import React, { useState } from "react";

export default function LoginControl() {

    const [logIn,setLogIn] = useState(true);
    const [btn, setBtnName] = useState("로그인");
    const [message, setMessage] = useState("로그인 해주세요!");

    const makeLogIn = () =>{
        setLogIn(true);
        setBtnName("로그인");
        setMessage("로그인 해주세요!");
    };
    
    const makeLogOut = () =>{
        setLogIn(false);
        setBtnName("로그아웃");
        setMessage("환영합니다!");
        
    };

  
  
    return <div className="logInBar">
    <button className="loginBtn"  onClick={logIn ? makeLogOut : makeLogIn}>
    {btn}
    </button>
    <div className="messageSend">
        {message}
    </div>
    </div>;
}
