import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router';

const options = ['2020 Hyundai AURA/0', '2020 Maruti IGNIS/1','2020 Maruti New Wagon-R/2','2019 Maruti Swift/3','2020 Hyundai GRAND I10 NIOS/4','2020 Maruti New Wagon-R/5','2020 Maruti Baleno/6'];

export default function Search() {

  
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const navigate=useNavigate();
 

  React.useEffect(()=>{
    let id=null;
    
    if(value!==null){
        id=value.split("/");
    }

    if(id!==null){
      navigate(`/product/${id[1]}`)
    }
  },[value]) // eslint-disable-line react-hooks/exhaustive-deps

  console.log(value);
  

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search by Name" />}
      />
    </div>
  );
}