import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({ product }) => {
    // console.log(product);
    const {image, title, price_max,price_min, _id} = product || {}
    return (
      <div className=" text-black p-4 shadow-xl rounded-2xl hover:scale-105 transition ease-in-out space-y-4">
        <img src={image} alt="" className="" />
        <h3 className="text-2xl font-medium  capitalize">{title}</h3>
        <p className=" text-violet-700 text-xl font-semibold  capitalize">$ 
           {price_max} - {price_min}
            </p>
            <Link to={`/product-details/${_id}`} className='btn w-full'>View Details</Link>
      </div>
    );
};

export default ProductCard;