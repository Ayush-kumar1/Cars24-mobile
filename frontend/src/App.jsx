import './App.css';
import Cart from './Pages/cart/Cart';
import Detail from './Pages/detailedpage/Detail';
import Wishlist from './Pages/wishlist/Wishlist';
import Home from './Pages/home/Home';
import {Routes,Route} from "react-router-dom";
import Header from './components/header/Header';
import {useState} from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Auto from './Pages/search/Auto';
import Filter from './Pages/Filter/Filter';
import Location from './Pages/location/Location';


function App() {
  const[isOpen,setOpen]=useState(false);
  return (
    <div className="App">
      <Header isOpen={isOpen} setOpen={setOpen}/>
      <Sidebar isOpen={isOpen} setOpen={setOpen}/>
       <Location/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/product/:id" element={<Detail/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/search" element={<Auto/>}/>
        <Route path="/filters" element={<Filter/>}/>
      </Routes>
    </div>
  );
}

export default App;
