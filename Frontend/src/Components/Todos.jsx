import React from 'react'
import TodoInput from './TodoInput'
import { useEffect } from 'react'
import axios from "axios"
import { useDispatch, useSelector,shallowEqual } from 'react-redux'
import { DELETE_TODOS_SUCCESS, GET_TODOS_REQUEST } from '../Redux/Todos/action'
import { deleteTodosError, deleteTodosRequest, deleteTodosSuccess, getTodosError, getTodosRequest,patchTodosRequest, getTodosSuccess, patchTodosError, patchTodosSuccess, POSTTodosError, POSTTodosRequest, POSTTodosSuccess } from '../Redux/Todos/actionTypes'

const Todos = () => {

  const dispatch=useDispatch();
  const {todos,isLoading}=useSelector((state)=>{
    return {
      todos:state.TodosReducer.todos,
      isLoading:state.TodosReducer.isLoading
    }
  },shallowEqual) 
  // console.log(todos)
  const getTodos=()=>{
    dispatch(getTodosRequest())
    axios.get("http://localhost:8080/todos")
    .then((res)=>dispatch(getTodosSuccess(res.data)))
    .catch((e)=>dispatch(getTodosError()))
  }

  const addTodo=(title)=>{
    if(title){
      const payload={
        title,
        status:false
      }
      dispatch(POSTTodosRequest());
      axios.post(`http://localhost:8080/todos`,payload)
      .then((res)=>dispatch(POSTTodosSuccess(res.data)))
      .catch((e)=>dispatch(POSTTodosError()));
    }
  }

  const ModifyTodo=(id,status)=>{
    console.log(status)
      dispatch(patchTodosRequest());
      axios.patch(`http://localhost:8080/todos/${id}`,{status:!status})
      .then((res)=>{
        dispatch(patchTodosSuccess(res.data))
        dispatch(getTodos())
      })
      .catch((e)=>dispatch(patchTodosError()));
  }

  const deleteTodo=(id)=>{
    console.log(id)
    dispatch(deleteTodosRequest())
    axios.delete(`http://localhost:8080/todos/${id}`)
    .then((res)=>{
      dispatch(deleteTodosSuccess(res.data))
      dispatch(getTodos())
    })
    .catch((e)=>dispatch(deleteTodosError))
  }

  useEffect(() => {
    getTodos();
  }, []);

  if(isLoading){
    return <h1>Loading...</h1>
  }
  return (
    <div border="1px solid red">
        <h1>Todos</h1>
        <TodoInput addTodo={addTodo}/>
        {todos.length>0&&todos.map((el)=>(
          <div key={el.id} mb={50} border="1px solid red">
            <h3>{el.title}--{el.status?"true":"false"}</h3>
            <button onClick={()=>deleteTodo(el.id)}>Delete Todo</button>
            <button onClick={()=>ModifyTodo(el.id,el.status)}>Modify Todo</button>
          </div>
        ))}
    </div>
  )
}

export default Todos