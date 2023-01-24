import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTextArea,
  MDBTooltip,
} from "mdb-react-ui-kit";

import { useEffect ,useState} from "react";
import { useDispatch,useSelector,shallowEqual } from "react-redux";
import { deleteTodosError, deleteTodosRequest, deleteTodosSuccess, getTodosError,getTodosRequest,getTodosSuccess, patchTodosError, patchTodosRequest, patchTodosSuccess, POSTTodosError, POSTTodosRequest, POSTTodosSuccess } from "../Redux/Todos/actionTypes"; 
import axios from "axios";

export default function Test() {
    const [text,setText]=useState("");
    const dispatch=useDispatch();
    const {todos,isLoading}=useSelector((state)=>{
      return {
        todos:state.TodosReducer.todos,
        isLoading:state.TodosReducer.isLoading
      }
    },shallowEqual) 

    const getTodos=()=>{
        dispatch(getTodosRequest())
        axios.get("https://blushing-gloves-newt.cyclic.app/todo")
        .then((res)=>{
          // console.log(res)
          dispatch(getTodosSuccess(res.data))
        })
        .catch((e)=>dispatch(getTodosError()))
      }

      const addTodo=()=>{
        // console.log(e.target.value)
        // console.log(text)
        if(text!=""){
          let payload={
            title:text,
            status:false
          }
          dispatch(POSTTodosRequest());
          axios.post(`https://blushing-gloves-newt.cyclic.app/todo/add`,payload)
          .then((res)=>{
            dispatch(POSTTodosSuccess(res.data));
            dispatch(getTodos());
          })
          .catch((err)=>dispatch(POSTTodosError()))
        }else{
          alert("Enter Your Task");
        }
      }

      const deleteTodo=(id)=>{
        // console.log(e.target.value)
        // console.log(text)
          dispatch(deleteTodosRequest());
          axios.delete(`https://blushing-gloves-newt.cyclic.app/todo/delete/${id}`)
          .then((res)=>{
            dispatch(deleteTodosSuccess(res.data));
            dispatch(getTodos());
          })
          .catch((err)=>dispatch(deleteTodosError()))
      }

      const ModifyTodo=(id,status)=>{
        // console.log(status)
          dispatch(patchTodosRequest());
          axios.patch(`https://blushing-gloves-newt.cyclic.app/todo/edit/${id}`,{status:!status})
          .then((res)=>{
            dispatch(patchTodosSuccess(res.data))
            dispatch(getTodos())
          })
          .catch((e)=>dispatch(patchTodosError()));
      }
    
    useEffect(() => {
        getTodos();
      }, []);
  return (
    <section className="vmax-100" style={{ backgroundColor: "#e2d5de",minHeight:"700px" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol xl="10">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-5">
                <h2 className="mb-3">Awesome Todo List</h2>
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <MDBTextArea
                    label="What do you need to do today?"
                    id="textAreaExample"
                    rows={4}
                    wrapperClass="flex-fill"
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                  />
                  <MDBBtn type="submit" size="lg" className="ms-2" onClick={(e)=>addTodo(e)}>
                    Add
                  </MDBBtn>
                </div>
                <MDBListGroup className="mb-0">
                    {todos.length>0&&todos.map((el)=>(
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2" key={el.id}>
                        <div className="d-flex align-items-center"  >
                          <MDBCheckbox
                            name="flexCheck"
                            value=""
                            id="flexCheckChecked"
                            className="me-3"
                            defaultChecked={el.status}
                            onClick={()=>ModifyTodo(el._id,el.status)}
                          />
                          {el.title}
                        </div>
                        <MDBTooltip
                          tag="a"
                          wrapperProps={{ href: "#!" }}
                          title="Remove item"
                          key={el._id}
                        >
                          <MDBIcon fas icon="times" color="primary" onClick={()=>deleteTodo(el._id)} />
                        </MDBTooltip>
                      </MDBListGroupItem>
                    ))}
                  
                  {/* <MDBListGroupItem className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                    <div className="d-flex align-items-center">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheckChecked"
                        className="me-3"
                        defaultChecked
                      />
                      <s>Dapibus ac facilisis in</s>
                    </div>
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Remove item"
                    >
                      <MDBIcon fas icon="times" color="primary" />
                    </MDBTooltip>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                    <div className="d-flex align-items-center">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheck"
                        className="me-3"
                      />
                      Morbi leo risus
                    </div>
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Remove item"
                    >
                      <MDBIcon fas icon="times" color="primary" />
                    </MDBTooltip>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                    <div className="d-flex align-items-center">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheck"
                        className="me-3"
                      />
                      Porta ac consectetur ac
                    </div>
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Remove item"
                    >
                      <MDBIcon fas icon="times" color="primary" />
                    </MDBTooltip>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                    <div className="d-flex align-items-center">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheckChecked"
                        className="me-3"
                        defaultChecked
                      />
                      Vestibulum at eros
                    </div>
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Remove item"
                    >
                      <MDBIcon fas icon="times" color="primary" />
                    </MDBTooltip>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                    <div className="d-flex align-items-center">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheck"
                        className="me-3"
                      />
                      Morbi leo risus
                    </div>
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Remove item"
                    >
                      <MDBIcon fas icon="times" color="primary" />
                    </MDBTooltip>
                  </MDBListGroupItem> */}
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}