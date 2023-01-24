import React from 'react'
import * as types from "./actionTypes"

const initialState={
    isAuth:false,
    token:null,
    isLoading:false,
    isError:false
}

const reducer = (oldState=initialState,action) => {
  const {payload,type}=action;
  switch(type){
    case types.USER_LOGIN_SUCCESS:
        return{
            ...oldState,isLoading:false,isError:false,token:payload,isAuth:true
        }
    case types.USER_LOGIN_REQUEST:
        return{
            ...oldState,isLoading:true,
        }
    case types.USER_LOGIN_ERROR:
        return{
            ...oldState,isError:true,isLoading:false      
        }
    default:
        return oldState
  }
}

export {reducer}