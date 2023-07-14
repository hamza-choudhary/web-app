import Header from "./Layout/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import WebFont from 'webfontloader'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {light , dark} from "./Common/Theme/Theme";
import {useSelector} from 'react-redux'
import { useEffect } from "react";
import Home from "./Layout/Home/Home";
import Footer from "./Layout/Footer/Footer";
import Login from "./Layout/Login/Login";
import SignUp from "./Layout/signUp/SignUp";
import Categories from "./Layout/Categories/Categories";
import ProductDetails from "./Layout/ProductDetail.jsx/ProductDetails";
import UserDetails from "./Layout/UserDetails/UserDetails";
function App() {
  const {darkTheme} = useSelector(state=>state.customReducer)
  useEffect(()=>{
    WebFont.load({
      google:{
        families:["Poppins","Roboto"]
      }
    })
  })
  return (
   
      <ThemeProvider theme={createTheme(!darkTheme?light:dark)}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/categories" element={<Categories />}/>
            <Route path="/product" element={<ProductDetails />}/>
            <Route path="/me" element={<UserDetails />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
        </ThemeProvider>
    
  );
}

export default App;
