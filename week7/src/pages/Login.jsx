import React, { useState } from "react";
import * as Content from "./Login.style";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";



export default function Login(props) {

  const navigate = useNavigate();
  const [id,setId] = useState("");
  const [password,setPassword] = useState("");
  const [logIn,setLogIn] = useState(false);


  
  const onIdHandler = (event) =>{
    setId(event.currentTarget.value);
  };
  
  const onPasswordHandler = (event) =>{
    setPassword(event.currentTarget.value);
  };
  const onAccept = () =>{
    navigate(`/`,{
      state : props
  })
  };
  const onGood = () =>{
    setLogIn(true);
  }

  return (
  <Content.BigLogin>
  <Content.Title>이메일과 비밀번호를 입력해주세요.</Content.Title>
  <br/>
  <Content.BigForm>
  <label>이메일을 입력해주세요.</label>
  <Content.StyleForInput name="Id" type="text" value={id} onChange={onIdHandler} placeholder="ID"/>
  <br/>
  <label>비밀번호를 입력해주세요.</label>
  <Content.StyleForInput name="Password" type="password" value={password} onChange={onPasswordHandler} placeholder="영문,숫자,특수문자 포함 8자"/>
  <br/>
  {id&&password?<button id="AcceptBtn" onClick={onAccept} >
    {"확인"}
  </button> : <button id="AcceptBtn" disabled>
    {"확인"}{onGood}
  </button>}
  </Content.BigForm>
  </Content.BigLogin>
  )
}
