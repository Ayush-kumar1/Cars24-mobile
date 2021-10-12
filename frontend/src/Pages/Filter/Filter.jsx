import React, { useEffect, useReducer, useState } from 'react'
import "./filter.css";
import { Slider } from '@mui/material';
import { Button } from '@mui/material';
import {initialValue,filterReducer} from "./filterReducer";
import {useCar} from "../../context/CarContext";
import {Link} from "react-router-dom";
import arr from "../../data";

function Filter() {

    const{data,setFilterData,filterData}=useCar();

    const[val,setVal]=useState([0,1000000]);
    const updateRange=(e,data)=>{
        setVal(data)
    }

    const[state,dispatch]=useReducer(filterReducer,initialValue);

    function getSorted(){
        if(state.sortByPrice==="HIGH_TO_LOW"){
            return filterData.sort((a,b)=>b.price-a.price)
        }
        else if(state.sortByPrice==="LOW_TO_HIGH"){
            return filterData.sort((a,b)=>a.price-b.price)
        }
    }

    function getFilter(){

        let slider_data=data.filter(elem=> {
           return elem.price>= val[0] && elem.price<=val[1]
        });
        
        if(state.filterByFirstOwner===false && state.filterBySecondOwner===false && state.filterByThirdOwner===false && state.filterByFourthOwner===false && state.filterByPetrol===false && state.filterByDiesel===false){
            return slider_data;
        }

        let owner1=[]
        let owner2=[]
        let owner3=[]
        let owner4=[]
        let petrol=[]
        let diesel=[]

        if(state.filterByFirstOwner===true){
            owner1=slider_data.filter(elem=>elem.owner==="1st owner")
        }
        
        if(state.filterBySecondOwner===true){
            owner2=slider_data.filter(elem=>elem.owner==="2nd owner")
        }
        
        if(state.filterByThirdOwner===true){
            owner3=slider_data.filter(elem=>elem.owner==="3rd owner")
        }

        if(state.filterByFourthOwner===true){
            owner4=slider_data.filter(elem=>elem.owner==="4th owner")
        }

        if(state.filterByPetrol===true){
            petrol=slider_data.filter(elem=>elem.fuel==="Petrol")
        }

        if(state.filterByDiesel===true){
            diesel=slider_data.filter(elem=>elem.fuel==="Diesel")
        }

        let ans=owner1.concat(owner2);
        ans=ans.concat(owner3);
        ans=ans.concat(owner4);
        ans=ans.concat(petrol);
        ans=ans.concat(diesel);

        let temp= [...new Map(ans.map(item => [JSON.stringify(item), item])).values()];
        return temp;
    }

    getSorted();
    const newarr=getFilter();

    useEffect(()=>{
      setFilterData(newarr)
    },[state,val]) // eslint-disable-line react-hooks/exhaustive-deps
    
    

     return (
        <div className="filter-container">
 
        <div className="slider-container">
            <h1>Price of car</h1>
            <h3>Min Value: {val[0]}</h3>
            <h3>Max Value: {val[1]}</h3>
        <div style={{width:300,margin:10}}>
            <Slider
            value={val}
            max={1000000}
            onChange={updateRange}
            />
        </div>
        </div>

        <div className="owner-container">
            <h1>Ownership</h1>
            <label>
              <input type="checkbox" onChange={()=>dispatch({type:"FILTER_BY_FIRST_OWNER"})} />
              1st Owner
            </label>
            <label>
              <input type="checkbox" onChange={()=>dispatch({type:"FILTER_BY_SECOND_OWNER"})} />
              2nd Owner
            </label>
            <label>
              <input type="checkbox" onChange={()=>dispatch({type:"FILTER_BY_THIRD_OWNER"})} />
              3rd Owner
            </label>
            <label>
              <input type="checkbox" onChange={()=>dispatch({type:"FILTER_BY_FOURTH_OWNER"})} />
              4th Owner
            </label>
        </div>

        <div className="fuel-container">
            <h1>Fuel </h1>
            <label>
              <input type="checkbox" onChange={()=>dispatch({type:"FILTER_BY_PETROL"})} />
               Petrol
            </label>
            <label>
              <input type="checkbox" onChange={()=>dispatch({type:"FILTER_BY_DIESEL"})}/>
               Diesel
            </label>
        </div>

        <div className="price_sort_container">
            <h1>Sort with price</h1>
            <label>
                <input type="radio" name="price-sort" onChange={()=>dispatch({type:"SORT_BY_PRICE",payload:"HIGH_TO_LOW"})}/>
                High to Low
            </label>

            <label>
                <input type="radio" name="price-sort" onChange={()=>dispatch({type:"SORT_BY_PRICE",payload:"LOW_TO_HIGH"})}/>
                Low to High
            </label>
        </div>
        
        <div className="filter-btn-container">
        <Link to="/home">
        <Button variant="contained">Done</Button>
        </Link>

        <Link to="/home">
        <Button variant="contained" onClick={()=>setFilterData(arr)}>Clear All</Button>
        </Link>
        </div>

        
        </div>
    )
}

export default Filter
