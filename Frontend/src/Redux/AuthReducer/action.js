import * as types from "./actionTypes";

const loginRequest=()=>{
    return {
        type:types.USER_LOGIN_REQUEST
    }
}

const loginSuccess=(token)=>{
    return {
        type:types.USER_LOGIN_SUCCESS,
        payload:token
    }
}

const loginError=()=>{
    return {
        type:types.USER_LOGIN_ERROR
    }
}

export {loginError,loginRequest,loginSuccess}