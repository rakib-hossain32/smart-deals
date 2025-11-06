import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import MyProducts from "../pages/MyProducts";
import MyBids from "../pages/MyBids";
import ProductDetails from "../components/ProductDetails";
import CreateProduct from "../pages/CreateProduct";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,

    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all-products",
        Component: AllProducts,
        loader: () => fetch("http://localhost:3000/products"),
      },
      {
        path: "/product-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/product/${params.id}`),
        Component: ProductDetails,
      },
      {
        path: "/my-products",
        element: (
          <PrivateRoute>
            {" "}
            <MyProducts />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/my-bids",
        element: (
          <PrivateRoute>
            <MyBids />
          </PrivateRoute>
        ),
      },
      {
        path: "/create-product",
        Component: CreateProduct,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
]);
