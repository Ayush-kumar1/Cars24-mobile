import React,{useState} from 'react';
import Carasouel from '../../components/carasouel/Carasouel';
import CardContainer from '../../components/card/CardContainer';
import Header from '../../components/header/Header';
import Selectors from '../../components/Selectors/Selectors';
import Sidebar from '../../components/sidebar/Sidebar';


function Home() {
    const[isOpen,setOpen]=useState(false);
    return (
        <div>
            <Header isOpen={isOpen} setOpen={setOpen}/>
            <Sidebar isOpen={isOpen} setOpen={setOpen}/>
            <Carasouel/>
            <Selectors/>
            <CardContainer/>
        </div>
    )
}

export default Home
