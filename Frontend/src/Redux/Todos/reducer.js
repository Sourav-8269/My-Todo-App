
import * as types from "./action";


const initialState={
    todos:[],
    isLoading:false,
    isError:false
}
const reducer=(oldState=initialState,action)=>{
    const {type,payload}=action;
    switch(action.type){
        case types.GET_TODOS_REQUEST:
                return {
                    ...oldState,isLoading:true
                }
        case types.GET_TODOS_ERROR:
                return {
                   ...oldState,isError:true,isLoading:false
                }
        case types.GET_TODOS_SUCCESS:
                return {
                     ...oldState,todos:action.payload,isLoading:false
                }
        case types.POST_TODOS_ERROR:
            return{
                ...oldState,isError:true,isLoading:false
            }
        case types.POST_TODOS_REQUEST:
            return{
                ...oldState,isLoading:true
            }
        case types.POST_TODOS_SUCCESS:
            return{
                ...oldState,todos:[...oldState.todos,payload],isLoading:false
            }
        
            case types.DELETE_TODOS_ERROR:
                return{
                    ...oldState,isError:true,isLoading:false
                }
            case types.DELETE_TODOS_REQUEST:
                return{
                    ...oldState,isLoading:true
                }
            case types.DELETE_TODOS_SUCCESS:
                return{
                    ...oldState,todos:[...oldState.todos,payload],isLoading:false
                }
        default:
            return oldState;
    }
}
export {reducer}