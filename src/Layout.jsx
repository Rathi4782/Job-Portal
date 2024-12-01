// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
    const navigate = useNavigate();
  // Redirect to the homepage whenever the page reloads
    useEffect(() => {
        navigate("/");
    }, [ navigate]);
  
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer/>
      </div>
    );
  };
  
  export default Layout;
