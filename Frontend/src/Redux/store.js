import {applyMiddleware, combineReducers, legacy_createStore,compose} from "redux";
import { reducer as CountReducer} from "./Counter/reducer";    
import { reducer as TodosReducer} from "./Todos/reducer";  
import {reducer as AuthReducer} from "./AuthReducer/reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware=(store)=>(next)=>(action)=>{
    // console.log(store);
    // console.log(action)
    //next is dispatch fn() and action is actionObj which holds type and payload 
    return next(action);
}

const rootReducer=combineReducers({CountReducer,TodosReducer,AuthReducer});

const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(middleware)));

// console.log(store.getState())
export {store};