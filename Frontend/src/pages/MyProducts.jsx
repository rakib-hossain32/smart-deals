import React from "react";
import { use } from "react";
import AuthContext from "../context/AuthContext";
import { useEffect } from "react";
import { useState } from "react";
import ProductTable from "../components/ProductTable";

const MyProducts = () => {
  const { user } = use(AuthContext);
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/products?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setProducts(data);
        });
    }
  }, [user]);

  return <div>{<ProductTable products={products} />}</div>;
};

export default MyProducts;
