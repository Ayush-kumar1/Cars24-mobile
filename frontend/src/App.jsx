import { useState } from 'react';
import './App.css';
import Carasouel from './components/carasouel/Carasouel';
import CardContainer from './components/card/CardContainer';
import Header from './components/header/Header';
import Selectors from './components/Selectors/Selectors';
import Sidebar from './components/sidebar/Sidebar';


function App() {
  const[isOpen,setOpen]=useState(false);
  return (
    <div className="App">
      <Header isOpen={isOpen} setOpen={setOpen} />
      <Sidebar isOpen={isOpen} setOpen={setOpen} />
      <Carasouel/>
      <Selectors/>
      <CardContainer/>
    </div>
  );
}

export default App;
