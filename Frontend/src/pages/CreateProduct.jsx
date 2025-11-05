import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Swal from "sweetalert2";
import { use } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router";

export default function CreateProduct() {

    const {user}= use(AuthContext)
  const [formData, setFormData] = useState({
    title: "",
    minPrice: "",
    maxPrice: "",
    condition: "brand-new",
    imageUrl: "",
    sellerName: "",
    sellerEmail: "",
    sellerContact: "",
    sellerImageUrl: "",
    location: "",
    description: "",
    category: "",
    usageTime: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
      
      const email = e.target.sellerEmail.value
      const name = e.target.sellerName.value
    //   console.log(email)
    const newProduct = {
      title: formData?.title,
      price_min: formData?.minPrice,
      price_max: formData?.maxPrice,
      email: email,
      category: formData?.category,
      created_at: new Date(),
      image: formData?.imageUrl,
      status: "pending",
      location: formData?.location,
      seller_image: formData?.sellerImageUrl,
      seller_name: name,
      description: formData?.description,
      seller_contact: formData?.sellerContact,
      usage: formData?.usageTime,
      condition: formData?.condition,
    };
      console.log("Form submitted:", newProduct);
      
      fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("after placing bid", { data });
          if (data.insertedId) {
              // bidModalRef.current.close();
              e.target.reset()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your bid has been placed",
              showConfirmButton: false,
              timer: 1500,
            });
            // add the new bid state
            // newBid._id = data.insertedId;
            // const newBids = [...bids, newBid].sort(
            //   (a, b) => b.bid_price - a.bid_price
            // );
            // setBids(newBids);
          }
        });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleCreateProduct = (e) => {
  //     e.target.preventDefault()
  //     console.log('first')
  //  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 text-black">
      <div className="max-w-xl mx-auto">
        {/* Back Button */}
        <Link
          to={"/all-products"}
          className="flex items-center text-gray-600 mb-6 hover:text-gray-800"
        >
          <span className="mr-2">←</span>
          Back To Products
        </Link>

        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-8">
          Create <span className="text-purple-600">A Product</span>
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-sm p-6 space-y-5"
        >
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Yamaha Fx Guitar for Sale"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Price Range */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Min Price You want to Sale ($)
              </label>
              <input
                type="text"
                name="minPrice"
                value={formData.minPrice}
                onChange={handleChange}
                placeholder="e.g. 100"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Price You want to Sale ($)
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="maxPrice"
                  value={formData.maxPrice}
                  onChange={handleChange}
                  placeholder="Optional (default = Min Price)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
              </div>
            </div>
          </div>

          {/* Product Condition and Category */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Condition
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="condition"
                    value="brand-new"
                    checked={formData.condition === "brand-new"}
                    onChange={handleChange}
                    className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Brand New</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="condition"
                    value="used"
                    checked={formData.condition === "used"}
                    onChange={handleChange}
                    className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Used</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <div className="relative">
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm text-gray-500"
                >
                  <option value="">Select a Category</option>
                  <option value="electronics">Electronics</option>
                  <option value="furniture">Furniture</option>
                  <option value="clothing">Clothing</option>
                  <option value="sports">Sports</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
              <label className="block text-xs text-gray-500 mt-2">
                Product Usage time
              </label>
              <input
                type="text"
                name="usageTime"
                value={formData.usageTime}
                onChange={handleChange}
                placeholder="e.g. 1 year 3 month"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm mt-1"
              />
            </div>
          </div>

          {/* Product Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Product Image URL
            </label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Seller Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Seller Name
              </label>
              <input
                type="text"
                name="sellerName"
                defaultValue={user?.displayName}
                // value={formData.sellerName}
                onChange={handleChange}
                placeholder="e.g. Artisan Roasters"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Seller Email
              </label>
              <input
                type="email"
                name="sellerEmail"
                // value={formData.sellerEmail}
                defaultValue={user?.email}
                onChange={handleChange}
                placeholder="lala1955@gmail.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Contact and Image */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Seller Contact
              </label>
              <input
                type="text"
                name="sellerContact"
                value={formData.sellerContact}
                onChange={handleChange}
                placeholder="e.g. +1-XXX-XXXX"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Seller Image URL
              </label>
              <input
                type="text"
                name="sellerImageUrl"
                defaultValue={user?.photoURL}
                // value={formData.sellerImageUrl}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City, Country"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Simple Description about your Product
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="e.g. I bought this product 3 month ago, did not used more than 1/2 time, actually warming guitar is so tough..."
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-md transition-colors"
          >
            Create A Product
          </button>
        </form>
      </div>
    </div>
  );
}
