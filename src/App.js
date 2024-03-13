import React, { useEffect, useState } from 'react';
import './lib/scss/styleSass.css'
import Index2 from './components/website/pages/Index';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from './components/website/pages/Details';
import Cart from './components/website/pages/Cart';
import CustomNavBar from './components/website/CustomNavBar';
import "@fontsource/roboto";
import "@fontsource/righteous";

function App() {
  const [backGround,setBackGround] = useState('');
  const getURL = window.location.pathname;
  useEffect(()=>{
    if(getURL==''){
      setBackGround('bg-top')
    } 
    else if(getURL=='/details'){
      setBackGround('bg-victor')

    }
  },[setBackGround]);
  return (
 <div className={`website ${backGround}`}>
<BrowserRouter>
<Routes>
  <Route path="" index element={<Index2 />} />
  <Route path='details'  element={<Details />} />
  <Route path='cart' element={<Cart />} />
</Routes>
</BrowserRouter>
 </div>

  )
}

export default App;
