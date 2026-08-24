import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading_circle from "../components/loading_circle"

const product = () => {
  const [array, setarray] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    async function allproducts() {
      try {
        setloading(true);
        const productdata = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/show/allproducts`,
          {
            withCredentials: true,
          },
        );

        setarray(productdata.data.products);
      } catch (error) {
        alert(error.response.data.message);
      } finally {
        setloading(false);
      }
    }
    allproducts();
  }, []);

  return (
  <div className="w-full min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
    
    {/* Header */}
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">
          Products
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage and view all your products
        </p>
      </div>

      <button className="w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md active:scale-95 sm:w-auto">
        + Add Product
      </button>
    </div>

    {/* Products */}
    {loading ? (
      <Loading_circle />
    ) : (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {array.map((item) => {
          return (
            <div
              key={item._id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.product}
                  className="h-full w-full object-fill transition duration-500 group-hover:scale-110"
                />

                {/* Stock Badge */}
                <span
                  className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${
                    item.stock > 0
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>

                {/* Category */}
                <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium capitalize text-slate-600 shadow-sm backdrop-blur">
                  {item.catagory}
                </span>
              </div>

              {/* Details */}
              <div className="p-5">
                <h2 className="truncate text-lg font-bold capitalize text-slate-800">
                  {item.product}
                </h2>

                <div className="mt-3 flex items-center justify-between">
                  {/* Price */}
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Price
                    </p>

                    <p className="mt-1 text-xl font-bold text-blue-600">
                      ₹{item.price}
                    </p>
                  </div>

                  {/* Stock */}
                  <div className="text-right">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Stock
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-700">
                      {item.stock} units
                    </p>
                  </div>
                </div>

                {/* View Button */}
                <button className="mt-5 w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white active:scale-[0.98]">
                  View Product
                </button>
              </div>
            </div>
          );
        })}
      </div>
    )}
  </div>
);
};

export default product;
