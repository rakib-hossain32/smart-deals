import React, { use } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router";

const LatestProducts = ({ latestProductsPromise }) => {
  const products = use(latestProductsPromise);
  // console.log(products);
    return (
      <div className=" px-8 md:px-10 lg:px-15">
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-5">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        <div className=" flex justify-center py-5">
          <Link
            to={"/all-products"}
            className="h-12 rounded-xl px-2 md:px-4 py-3 bg-linear-to-br from-violet-700 to-purple-500   font-bold "
          >
            Show All
          </Link>
        </div>
      </div>
    );
};

export default LatestProducts;
