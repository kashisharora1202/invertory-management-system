
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading_circle from "../components/loading_circle";

const myorders = () => {
  const [array, setarray] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    async function myorder() {
      try {
        setloading(true);

        const myorderdata = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/show/myorders`,
          {
            withCredentials: true,
          },
        );

        setarray(myorderdata.data.products);
      } catch (error) {
        alert(error.response.data.message || error.response.data.error);
      } finally {
        setloading(false);
      }
    }

    myorder();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mx-auto mb-8 max-w-7xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center gap-4">
            
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
              📦
            </div>

            <div>
              <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                My Orders
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                View all your ordered products
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
              You haven't ordered any products yet.
            </p>

          </div>
        </div>

      ) : (

        /* Products */
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
                    className="h-full w-full object-fill transition duration-500 group-hover:scale-105"
                  />

                  {/* Ordered Badge */}
                  <div className="absolute left-3 top-3">
                    <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-green-600 shadow-sm backdrop-blur">
                      ✓ Ordered
                    </span>
                  </div>

                </div>

                {/* Details */}
                <div className="p-5">

                  {/* Product Name */}
                  <h2 className="truncate text-lg font-bold capitalize text-slate-800">
                    {item.product}
                  </h2>

                  {/* Divider */}
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

                </div>
              </div>
            );
          })}

        </div>
      )}

    </div>
  );
};

export default myorders;
