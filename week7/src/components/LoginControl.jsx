import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';


export default function LoginControl(props) {


    const navigate = useNavigate();

  


    const makeLogIn = () =>{
        // setLogIn(true);
      
        navigate(`/Login`,{
            state : props
        });
    };
    
    const makeLogOut = () =>{
    //   setLogIn(false);
  
    };
  
    return <div className="logInBar">
    <button className="loginBtn"  onClick={props.logIn ? makeLogOut : makeLogIn}>
      {props.logIn ? "로그아웃" : "로그인" }
    </button>
    <div className="messageSend">
        {props.logIn? "환영합니다" : "로그인 하세요"}
    </div>
    </div>;
}
