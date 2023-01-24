import { ADD,REDUCE} from "./action"
const handleAddActionObj=(payload)=>{
    return {type:ADD,payload:payload}
}

const handleReduceActionObj=(payload)=>{
    return {type:REDUCE,payload:payload}
}


export {handleAddActionObj,handleReduceActionObj};