import { createContext,useContext,useReducer } from "react";
import {reducer} from "./reducer";

export const CarContext=createContext();

export const CarProvider=({children})=>{
    let initialValue={
        wishlist:[],
        cart:[]
    }

     const[state,dispatch]=useReducer(reducer,initialValue);
    return(
        <CarContext.Provider value={{state,dispatch}}>
            {children}
        </CarContext.Provider>
    )
}

export function useCar(){
    return useContext(CarContext)
}