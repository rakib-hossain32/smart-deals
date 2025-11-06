import React, { use, useEffect, useRef, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { ArrowLeft, MapPin, Mail, Phone, User } from "lucide-react";
import Swal from "sweetalert2";
import BidsManagementPage from "../pages/BidsManagementPage";
import AuthContext from "../context/AuthContext";

const ProductDetails = () => {
  const product = useLoaderData();
  const [bids, setBids] = useState([]);
  const { user } = use(AuthContext);

  //     console.log({ product });
  //     const {category,
  // condition,
  // created_at,
  // description,
  // email,
  // image,
  // location,
  // price_max,
  // price_min,
  // seller_contact,
  // seller_image,
  // seller_name,
  // status,
  // title,
  // usage,
  // _id, } = product || {}

  // category,: "Furniture",
  // condition,: "used",
  // created_at,: "2025-01-18T13:55:25Z",
  // description,: "Wooden double bed with headboard.",
  // email,: "user14@gmail.com",
  // image,: "https://example.com/images/bed.jpg",
  // location,: "Rangpur",
  // price_max,: 12000,
  // price_min,: 8000,
  // seller_contact,: "01933334444",
  // seller_image,: "",
  // seller_name,: "Hasan Ali",
  // status,: "sold",
  // title,: "Double Bed",
  // usage,: "2 years old",
  // _id,: "676a1a01c9df1014"
  const bidModalRef = useRef(null);
  console.log(bids);

  useEffect(() => {
    fetch(`http://localhost:3000/product/bids/${product._id}`, {
      headers: {
        authorization: `Bearer ${user?.accessToken}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("bids for this product", data);
        setBids(data);
      });
  }, [product, user]);

  const handleBidModal = () => {
    bidModalRef.current.showModal();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  };

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const buyer_name = e.target.name.value;
    const buyer_email = e.target.email.value;
    const buyer_image = e.target.image.value;
    const buyer_price = e.target.price.value;
    const buyer_phone = e.target.phone.value;

    // console.log({
    //   buyer_email,
    //   buyer_name,
    //   buyer_image,
    //   buyer_phone,
    //   buyer_price,
    // });

    const newBid = {
      product: product._id,
      buyer_name: buyer_name,
      buyer_email: buyer_email,
      buyer_image: buyer_image,
      bid_price: buyer_price,
      buyer_phone: buyer_phone,
      status: product.status,
    };
    console.log(newBid);

    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        //   console.log("after placing bid", { data });
        if (data.insertedId) {
          bidModalRef.current.close();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your bid has been placed",
            showConfirmButton: false,
            timer: 1500,
          });
          // add the new bid state
          newBid._id = data.insertedId;
          const newBids = [...bids, newBid].sort(
            (a, b) => b.bid_price - a.bid_price
          );
          setBids(newBids);
        }
      });
  };

  return (
    <div className=" bg-[#F5F5F5] p-4 md:p-8 text-black">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Image */}
          <div className="space-y-4">
            <div className="border-4 border-blue-400 rounded-lg p-2 bg-gray-100">
              <div className="aspect-square bg-gray-200 rounded flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML =
                      '<div class="text-gray-400 text-6xl">🛏️</div>';
                  }}
                />
              </div>
            </div>

            {/* Product Description Section */}
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">
                Product Description
              </h3>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Condition:</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm capitalize">
                    {product.condition}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-medium">Usage Time:</span>
                  <span className="text-gray-600">{product.usage}</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <ArrowLeft size={20} />
              <Link to={"/all-products"}>Back To Products</Link>
            </button>

            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.title}
              </h1>
              <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded text-sm ">
                {product.category}
              </span>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600 mb-1">
                ৳{product?.price_min?.toLocaleString()} -{" "}
                {product?.price_max?.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 ">Price range from</div>
            </div>

            {/* Product Details */}
            <div className="border-t pt-6">
              <h3 className="font-semibold text-lg mb-4 text-black">
                Product Details
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Product ID:</span>
                  <span className="font-medium text-black">{product._id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Posted:</span>
                  <span className="font-medium text-black">
                    {formatDate(product.created_at)}
                  </span>
                </div>
              </div>
            </div>

            {/* Seller Information */}
            <div className="border-t pt-6">
              <h3 className="font-semibold text-lg mb-4 text-black">
                Seller Information
              </h3>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={product.seller_image}
                    alt={product.seller_name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML =
                        '<div class="text-gray-400"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>';
                    }}
                  />
                </div>
                <div>
                  <div className="font-semibold text-black">
                    {product.seller_name}
                  </div>
                  <div className="text-sm text-gray-500">
                    (+88) {product.seller_contact}
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={16} />
                  <span>
                    <strong>Location:</strong> {product.location}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail size={16} />
                  <span>
                    <strong>Contact:</strong> Let's chat, contact
                  </span>
                </div>
              </div>

              <div className="inline-block">
                <span
                  className={`px-4 py-1 rounded-full text-sm font-medium ${
                    product.status === "sold"
                      ? "bg-red-500 text-white"
                      : "bg-yellow-400 text-gray-900"
                  }`}
                >
                  {product.status === "sold" ? "Sold" : "Active"}
                </span>
              </div>
            </div>

            <button
              onClick={handleBidModal}
              className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                product.status === "sold"
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
              disabled={product.status === "sold"}
            >
              {product.status === "sold"
                ? "This Product Is Sold"
                : "I Want Buy This Product"}
            </button>

            <dialog
              ref={bidModalRef}
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle "
            >
              <div className="modal-box bg-white">
                <div className=" rounded-lg  w-full max-w-md p-8">
                  <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                    Give Seller Your Offered Price
                  </h2>

                  <div className="modal-action">
                    <form onSubmit={handleBidSubmit} className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Buyer Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            defaultValue={user?.displayName}
                            // value={formData.buyerName}
                            // onChange={handleChange}
                            placeholder="Your name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Buyer Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            defaultValue={user?.email}
                            // value={formData.buyerEmail}
                            // onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Buyer Image URL
                        </label>
                        <input
                          defaultValue={user?.photoURL}
                          type="url"
                          name="image"
                          //   value={formData.imageUrl}
                          //   onChange={handleChange}
                          placeholder="https://...your_img_url"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Place your Price
                        </label>
                        <input
                          type="text"
                          name="price"
                          //   value={formData.price}
                          //   onChange={handleChange}
                          placeholder="e.g. Artisan Roasters"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Contact Info
                        </label>
                        <input
                          type="text"
                          name="phone"
                          //   value={formData.contactInfo}
                          //   onChange={handleChange}
                          placeholder="e.g. +1-555-1234"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        />
                      </div>
                      <div className="flex justify-end gap-3 pt-4">
                        <form method="dialog">
                          <button
                            //   type="button"
                            //   onClick={}
                            className="px-5 py-2 text-purple-600 font-medium rounded-md border border-purple-600 hover:bg-purple-50 transition-colors"
                          >
                            Cancel
                          </button>
                        </form>
                        <button
                          //   type="submit"
                          className="px-5 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors"
                        >
                          Submit Bid
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* <div className="modal-action">
                  <form method="dialog">
                   
                    <div className="flex justify-end gap-3 pt-4">
                      <button
                        type="button"
                        //   onClick={}
                        className="px-5 py-2 text-purple-600 font-medium rounded-md border border-purple-600 hover:bg-purple-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors"
                      >
                        Submit Bid
                      </button>
                    </div>
                  </form>
                </div> */}
              </div>
            </dialog>
          </div>
        </div>
      </div>
      <BidsManagementPage bids={bids} setBids={setBids} />
    </div>
  );
};

export default ProductDetails;
