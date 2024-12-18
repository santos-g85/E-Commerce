import React, { useEffect, useState } from "react";
import { NavbarSimple } from "../../components/Navbar";
import { Product } from "./Product";
import { PRODUCTS } from "../../Products";

const Home = () => {
  
  return (
    <>
    <NavbarSimple/>
    <div className="grid  gap-x-14 gap-y-10 grid-cols-4  px-10 mx-auto max-w-screen mt-6">
      {PRODUCTS.map((product) => (
        <Product key={product.id} data={product}/>
      ))}
    </div>
    </>
  );
};

export default Home;
