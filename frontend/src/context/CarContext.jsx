import { createContext,useContext,useReducer,useState } from "react";
import {reducer} from "./reducer";
import data from "../data";

export const CarContext=createContext();

export const CarProvider=({children})=>{
    let initialValue={
        wishlist:[],
        cart:[]
    }

    const[filterData,setFilterData]=useState(data);
    const[openlocation,setOpenLocation]=useState(true);
    const[location,setLocation]=useState(null);

     const[state,dispatch]=useReducer(reducer,initialValue);
    return(
        <CarContext.Provider value={{state,dispatch,data,filterData,setFilterData,openlocation,setOpenLocation,location,setLocation}}>
            {children}
        </CarContext.Provider>
    )
}

export function useCar(){
    return useContext(CarContext)
}