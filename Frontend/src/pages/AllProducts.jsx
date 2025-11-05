import React from 'react';
import { useLoaderData } from 'react-router';
import ProductCard from '../components/ProductCard';

const AllProducts = () => {
    const products = useLoaderData();
    console.log(products);
    return (
      <div className="min-h-screen ">
        <h1 className="font-bold text-4xl text-black text-center py-8">
          All <span className="text-violet-800">Products</span>
        </h1>
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-5 px-7 md:px-10">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    );
};

export default AllProducts;