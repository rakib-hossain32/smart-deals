// import React, { useState } from "react";

import { Atom } from "react-loading-indicators";

const BidsManagementPage = ({ bids, setBids }) => {
  // const [bids, setBids] = useState([
  //   {
  //     _id: "690a0d6da6a1fa938858a202",
  //     sl_no: 1,
  //     product: "Orange Juice",
  //     size: "672 S",
  //     product_image:
  //       "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=100&h=100&fit=crop",
  //     buyer_name: "Sara Chen",
  //     buyer_email: "crafts.by.sara@shop.net",
  //     buyer_image:
  //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  //     bid_price: 10,
  //     buyer_phone: "+8801648202601",
  //     status: "pending",
  //   },
  //   {
  //     _id: "690a0d6da6a1fa938858a203",
  //     sl_no: 2,
  //     product: "Orange Juice",
  //     size: "5X2 S",
  //     product_image:
  //       "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=100&h=100&fit=crop",
  //     buyer_name: "Sara Chen",
  //     buyer_email: "crafts.by.sara@shop.net",
  //     buyer_image:
  //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  //     bid_price: 10,
  //     buyer_phone: "+8801648202601",
  //     status: "pending",
  //   },
  //   {
  //     _id: "690a0d6da6a1fa938858a204",
  //     sl_no: 3,
  //     product: "Orange Juice",
  //     size: "69Z S",
  //     product_image:
  //       "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=100&h=100&fit=crop",
  //     buyer_name: "Sara Chen",
  //     buyer_email: "crafts.by.sara@shop.net",
  //     buyer_image:
  //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  //     bid_price: 10,
  //     buyer_phone: "+8801648202601",
  //     status: "pending",
  //   },
  // ]);

  if (bids) {
    return (
      <div className=" text-center py-5">
        <Atom color="#32cd32" size="large" text="" textColor="" />
      </div>
    );
  }

  const handleAcceptOffer = (id) => {
    setBids(
      bids?.map((bid) => (bid._id === id ? { ...bid, status: "accepted" } : bid))
    );
  };

  const handleRejectOffer = (id) => {
    setBids(
      bids?.map((bid) => (bid._id === id ? { ...bid, status: "rejected" } : bid))
    );
  };

  return (
    <div className=" bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <p className="text-gray-400 text-sm mb-2">Only Visible to Owner</p>
          <h1 className="text-3xl font-bold text-gray-900">
            Bids For This Products: <span className="text-purple-500">{bids.length}</span>
          </h1>
        </div>

        {/* Bids Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Sl. No
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Product
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Seller
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Bid Price
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {bids?.map((bid,index) => (
                  <tr
                    key={bid._id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {index + 1}
                    </td>

                    {/* Product Column */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={bid.product_image}
                          alt={bid.product}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {bid.product}
                          </p>
                          <p className="text-xs text-gray-500">{bid.size}</p>
                        </div>
                      </div>
                    </td>

                    {/* Seller Column */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={bid.buyer_image}
                          alt={bid.buyer_name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {bid.buyer_name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {bid.buyer_email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Bid Price Column */}
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-gray-900">
                        ${bid.bid_price}
                      </p>
                    </td>

                    {/* Actions Column */}
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        {bid.status === "pending" && (
                          <>
                            <button
                              onClick={() => handleAcceptOffer(bid._id)}
                              className="px-4 py-2 text-sm font-medium text-green-700 bg-white border border-green-300 rounded-md hover:bg-green-50 transition-colors"
                            >
                              Accept Offer
                            </button>
                            <button
                              onClick={() => handleRejectOffer(bid._id)}
                              className="px-4 py-2 text-sm font-medium text-white bg-red-500 border border-red-500 rounded-md hover:bg-red-600 transition-colors"
                            >
                              Reject Offer
                            </button>
                          </>
                        )}
                        {bid.status === "accepted" && (
                          <span className="px-4 py-2 text-sm font-medium text-green-700 bg-green-100 rounded-md">
                            Accepted
                          </span>
                        )}
                        {bid.status === "rejected" && (
                          <span className="px-4 py-2 text-sm font-medium text-red-700 bg-red-100 rounded-md">
                            Rejected
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidsManagementPage;
