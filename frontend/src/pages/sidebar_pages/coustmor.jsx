
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading_circle from "../components/loading_circle";

const coustmororders = () => {
  const [array, setarray] = useState([]);
  const [loading, setloading] = useState(false);
  const [details, setdetails] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    async function coustmororder() {
      try {
        setloading(true);

        const coustmororderdata = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/show/coustmororders`,
          {
            withCredentials: true,
          },
        );

        setarray(coustmororderdata.data.product);
      } catch (error) {
        alert(error.response.data.message || error.response.data.error);
      } finally {
        setloading(false);
      }
    }

    coustmororder();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mx-auto mb-8 max-w-7xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl">
              📦
            </div>

            <div>
              <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                Customer Orders
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                View and manage all customer orders
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="flex min-h-[300px] items-center justify-center">
          <Loading_circle />
        </div>
      ) : array.length === 0 ? (

        /* Empty State */
        <div className="mx-auto flex min-h-[350px] max-w-7xl items-center justify-center">

          <div className="w-full max-w-md rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-3xl">
              📦
            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-800">
              No Orders Yet
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              There are currently no customer orders.
            </p>

          </div>

        </div>

      ) : (

        /* Orders */
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {array.map((item) => {
            return (
              <div
                key={item._id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >

                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-slate-100">

                  <img
                    src={item.image}
                    alt={item.product}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Ordered Badge */}
                  <div className="absolute left-3 top-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-green-600 shadow-sm backdrop-blur">
                      ✓ Ordered
                    </span>
                  </div>

                </div>

                {/* Details */}
                <div className="p-5">

                  {/* Product */}
                  <h2 className="truncate text-lg font-bold capitalize text-slate-800">
                    {item.product}
                  </h2>

                  <div className="my-4 h-px bg-slate-100"></div>

                  {/* Price + Quantity */}
                  <div className="flex items-end justify-between">

                    {/* Price */}
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Price
                      </p>

                      <p className="mt-1 text-2xl font-bold text-blue-600">
                        ₹{item.price}
                      </p>
                    </div>

                    {/* Quantity */}
                    <div className="text-right">

                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Quantity
                      </p>

                      <div className="mt-1 inline-flex items-center rounded-lg bg-slate-100 px-3 py-1.5">

                        <span className="text-sm font-bold text-slate-700">
                          {item.quantity}
                        </span>

                        <span className="ml-1 text-xs text-slate-500">
                          units
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* Customer Details Button */}
                  <button
                    onClick={() => {
                      setSelectedOrder(item);
                      setdetails(true);
                    }}
                    className="mt-5 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md active:scale-[0.98]"
                  >
                    View Customer Details
                  </button>

                  {/* Customer Details */}
                  {details && selectedOrder?._id === item._id && (
                    <div className="relative mt-4 rounded-xl border border-blue-100 bg-blue-50 p-4">

                      {/* Close Button */}
                      <button
                        onClick={() => {
                          setdetails(false);
                          setSelectedOrder(null);
                        }}
                        className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-500 shadow-sm transition hover:bg-red-50 hover:text-red-500"
                      >
                        ×
                      </button>

                      {/* Heading */}
                      <div className="mb-4 pr-8">
                        <p className="text-sm font-bold text-slate-800">
                          Customer Details
                        </p>

                        <div className="mt-1 h-0.5 w-8 rounded-full bg-blue-600"></div>
                      </div>

                      {/* Name */}
                      <div className="mb-3">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          Name
                        </p>

                        <p className="mt-0.5 text-sm font-semibold text-slate-700">
                          {item.coustmorname}
                        </p>
                      </div>

                      {/* Contact */}
                      <div className="mb-3">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          Contact
                        </p>

                        <p className="mt-0.5 text-sm font-semibold text-slate-700">
                          {item.phoneno}
                        </p>
                      </div>

                      {/* Address */}
                      <div className="mb-3">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          Address
                        </p>

                        <p className="mt-0.5 text-sm font-semibold leading-5 text-slate-700">
                          {item.address}
                        </p>
                      </div>

                      {/* City + Pincode */}
                      <div className="grid grid-cols-2 gap-3">

                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                            City
                          </p>

                          <p className="mt-0.5 truncate text-sm font-semibold text-slate-700">
                            {item.city}
                          </p>
                        </div>

                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                            Pincode
                          </p>

                          <p className="mt-0.5 text-sm font-semibold text-slate-700">
                            {item.pincode}
                          </p>
                        </div>

                      </div>

                    </div>
                  )}

                </div>

              </div>
            );
          })}

        </div>
      )}

    </div>
  );
};

export default coustmororders;
