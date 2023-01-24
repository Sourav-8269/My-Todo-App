import logo from './logo.svg';
import './App.css';
import {useState} from "react";

import { store } from './Redux/store';


import Counter from './Components/Counter';
import Todos from './Components/Todos';
import { useDispatch, useSelector } from 'react-redux';
import { loginError, loginRequest, loginSuccess } from './Redux/AuthReducer/action';
import axios from 'axios';
import Test from './Components/Test';
function App() {
  const isAuth=useSelector((state)=>state.AuthReducer.isAuth);
  // console.log(isAuth)
  const dispatch=useDispatch();

  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");

 
  const handleLogin=()=>{
    console.log(email,password)
    if(email&&password){
      const payload={
        email,
        password
      }
      dispatch(loginRequest());
      axios.post(`https://reqres.in/api/login`,payload)
      .then((res)=>{
        // console.log(res)
        dispatch(loginSuccess(res.data.token))
        console.log(store.getState())
      })
      .catch((e)=>dispatch(loginError()))
    }
  }

  return (
    <div className="App" style={{backgroundColor:"#e2d5de"}} >
      {/* <Counter/>
      {isAuth&&<Todos/>} */}
      <Test/>
      {/* <div>
        <input placeholder='email' type="email" value={email} onChange={(e)=>setemail(e.target.value)} />
        <input placeholder='password' type="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button onClick={handleLogin} >Login</button>
      </div> */}

    </div>
  );
}

export default App;
