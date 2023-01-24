import { loadData, saveData } from "../utils/accessLocalStorage";
import * as types from "./action";


const initialState={
    count:loadData("count")||10,
  
}
const reducer=(oldState=initialState,action)=>{
    const {type,payload}=action;
    switch(action.type){
        case types.ADD:
            const newCount=oldState.count+payload;
            saveData("count",newCount)
            return {
                ...oldState,count:oldState.count+action.payload
            }
        case types.REDUCE:
            const newReduceCount=oldState.count-payload;
            saveData("count",newReduceCount)
                return {
                    ...oldState,count:oldState.count-action.payload
                }
        default:
            return oldState;
    }
}
export {reducer}