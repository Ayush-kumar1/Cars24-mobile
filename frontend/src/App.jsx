import { useState } from 'react';
import './App.css';
import Carasouel from './components/carasouel/Carasouel';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  const[isOpen,setOpen]=useState(false);
  return (
    <div className="App">
      <Header isOpen={isOpen} setOpen={setOpen} />
      <Sidebar isOpen={isOpen} setOpen={setOpen} />
      <Carasouel/>
    </div>
  );
}

export default App;
