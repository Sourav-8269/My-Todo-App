import {GET_TODOS_ERROR, GET_TODOS_REQUEST, GET_TODOS_SUCCESS,POST_TODOS_ERROR,POST_TODOS_REQUEST,POST_TODOS_SUCCESS
    ,DELETE_TODOS_ERROR,DELETE_TODOS_REQUEST,DELETE_TODOS_SUCCESS,PATCH_TODOS_ERROR,PATCH_TODOS_REQUEST,PATCH_TODOS_SUCCESS } from "./action"
    
    const getTodosRequest=()=>{
        return{
            type:GET_TODOS_REQUEST,
        }
    }
    const getTodosSuccess=(payload)=>{
        return{
            type:GET_TODOS_SUCCESS,
            payload,
        }
    }
    const getTodosError=()=>{
        return{
            type:GET_TODOS_ERROR,
        }
    }
    
    const POSTTodosRequest=()=>{
        return{
            type:POST_TODOS_REQUEST,
        }
    }
    const POSTTodosSuccess=(payload)=>{
        return{
            type:POST_TODOS_SUCCESS,
            payload,
        }
    }
    const POSTTodosError=()=>{
        return{
            type:POST_TODOS_ERROR,
        }
    }
    
    const deleteTodosRequest=()=>{
        return{
            type:DELETE_TODOS_REQUEST,
        }
    }
    const deleteTodosSuccess=(payload)=>{
        return{
            type:DELETE_TODOS_SUCCESS,
            payload,
        }
    }
    const deleteTodosError=()=>{
        return{
            type:DELETE_TODOS_ERROR,
        }
    }
    
    const patchTodosRequest=()=>{
        return{
            type:PATCH_TODOS_REQUEST,
        }
    }
    const patchTodosSuccess=(payload)=>{
        return{
            type:PATCH_TODOS_SUCCESS,
            payload,
        }
    }
    const patchTodosError=()=>{
        return{
            type:PATCH_TODOS_ERROR,
        }
    }
    export {getTodosError,getTodosSuccess,getTodosRequest,POSTTodosError,POSTTodosRequest,POSTTodosSuccess,deleteTodosError,deleteTodosRequest,deleteTodosSuccess
    ,patchTodosError,patchTodosRequest,patchTodosSuccess};