import React, { Suspense } from 'react';
import Navbar from '../components/Navbar';
import { Atom } from "react-loading-indicators";
import LatestProducts from '../components/LatestProducts';


const latestProductsPromise = fetch("http://localhost:3000/latest-products").then(res => res.json())

const Home = () => {
    return (
      <div className="bg-white">
        <Navbar />
        <div className=" py-10">
          <h1 className=" text-center  text-black text-5xl font-bold capitalize">
            Recent{" "}
            <span className="text-violet-700 text-5xl font-bold capitalize">
              Products
            </span>
          </h1>
          <div className=" ">
            {/* h-screen flex flex-col justify-center */}
            <Suspense
              fallback={
                <div className=" text-center py-5">
                  <Atom color="#32cd32" size="large" text="" textColor="" />
                </div>
              }
            >
              <LatestProducts latestProductsPromise={latestProductsPromise} />
            </Suspense>
          </div>
        </div>
    
      </div>
    );
};

export default Home;