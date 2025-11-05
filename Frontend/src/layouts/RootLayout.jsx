import React from 'react';
import { Outlet } from 'react-router';

import Header from '../components/Header';
import Footer from '../pages/Footer';

const RootLayout = () => {
    return (
      <div className=' bg-white'>
        <Header />
        <div className=" bg-white  ">

        <Outlet />
        </div>
        <Footer/>
      </div>
    );
};

export default RootLayout;