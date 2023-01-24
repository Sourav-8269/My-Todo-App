import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {handleReduceActionObj,handleAddActionObj} from "../Redux/Counter/actionTypes"
const Counter = () => {

    const count=useSelector((state)=>state.CountReducer.count)
    const dispatch=useDispatch();
  
    const handelAdd=()=>{
      dispatch(handleAddActionObj(2));
    }
  
    const handelReduce=()=>{
      dispatch(handleReduceActionObj(1));
    }
  
  return (
    <div>  
        <h1>Counter:{count}</h1>
        <button onClick={handelAdd}>ADD</button>
        <button onClick={handelReduce}>Reduce</button>
    </div>
  )
}

export default Counter