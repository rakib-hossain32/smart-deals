import { Edit2, Trash2, Save } from "lucide-react";

const ProductTable = ({ products }) => {
  //   const [products] = useState([
  //     {
  //       id: 1,
  //       name: "Orange Juice",
  //       category: "Beverage",
  //       price: 100,
  //       status: "Pending",
  //     },
  //     {
  //       id: 2,
  //       name: "Orange Juice",
  //       category: "Beverage",
  //       price: 100,
  //       status: "Pending",
  //     },
  //     {
  //       id: 3,
  //       name: "Orange Juice",
  //       category: "Beverage",
  //       price: 100,
  //       status: "Pending",
  //     },
  //     {
  //       id: 4,
  //       name: "Orange Juice",
  //       category: "Beverage",
  //       price: 100,
  //       status: "Pending",
  //     },
  //     {
  //       id: 5,
  //       name: "Orange Juice",
  //       category: "Beverage",
  //       price: 100,
  //       status: "Pending",
  //     },
  //     {
  //       id: 6,
  //       name: "Orange Juice",
  //       category: "Beverage",
  //       price: 100,
  //       status: "Pending",
  //     },
  //     {
  //       id: 7,
  //       name: "Orange Juice",
  //       category: "Beverage",
  //       price: 100,
  //       status: "Pending",
  //     },
  //     {
  //       id: 8,
  //       name: "Orange Juice",
  //       category: "Beverage",
  //       price: 100,
  //       status: "Pending",
  //     },
  //     {
  //       id: 9,
  //       name: "Orange Juice",
  //       category: "Beverage",
  //       price: 100,
  //       status: "Pending",
  //     },
  //     {
  //       id: 10,
  //       name: "Orange Juice",
  //       category: "Beverage",
  //       price: 100,
  //       status: "Pending",
  //     },
  //   ]);

  return (
    <div className=" bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            My Products:{" "}
            <span className="text-blue-600">{products.length}</span>
          </h1>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    SL No
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Product Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map((product, index) => (
                  <tr
                    key={product._id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-12 h-12 bg-gray-200 rounded-md"></div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {product.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {product.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${product.price_max} - ${product.price_min}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <button className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-purple-700 bg-purple-50 border border-purple-300 rounded-md hover:bg-purple-100 transition-colors">
                          <Edit2 className="w-3 h-3 mr-1" />
                          Edit
                        </button>
                        <button className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-red-700 bg-red-50 border border-red-300 rounded-md hover:bg-red-100 transition-colors">
                          <Trash2 className="w-3 h-3 mr-1" />
                          Delete
                        </button>
                        <button className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-teal-700 bg-teal-50 border border-teal-300 rounded-md hover:bg-teal-100 transition-colors">
                          <Save className="w-3 h-3 mr-1" />
                          Make Sale
                        </button>
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

export default ProductTable;
