
import { useLocation } from "react-router-dom";
import Loading_circle from "../components/loading_circle";
import { useState, useEffect } from "react";
import axios from "axios";

const place_order = () => {
  const [loading, setloading] = useState(false);
  const [user, setuser] = useState({});
  const [quantity, setquantity] = useState(1);
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [pincode, setpincode] = useState();

  const location = useLocation();
  const product = location.state?.product;

  async function order(e) {
    try {
      e.preventDefault();
      setloading(true);
      if(!address.trim() || !city.trim() || !pincode.trim()){
        alert("Please fill all the information first")
        return
      }

     

      const userorder = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/order`,
        {
          product: product.product,
          image: product.image,
          price: product.price * quantity,
          category: product.catagory,
          coustmorname: user.username,
          phoneno: user.phoneno,
          address,
          quantity,
          city,
          pincode,
          selerid: product.userid,
        },
        {
          withCredentials: true,
        },
      );


      const options = {
        key : import.meta.env.VITE_RAZORPAY_API_KEY,
        amount : userorder.data.payorder.amount,
        currency : "INR",
        name : "kashish arora",
        discription : " testing product payments",
        order_id : userorder.data.payorder.id,

        handler : async function(respponce){
          console.log("responce",respponce)
            try {
              
             await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/orderverification`,{
                
                razorpay_payment_id : respponce.razorpay_payment_id,
                razorpay_order_id: respponce.razorpay_order_id,
                razorpay_signature : respponce.razorpay_signature,
                product: product.product,
                image: product.image,
                price: product.price * quantity,
                category: product.catagory,
                coustmorname: user.username,
                phoneno: user.phoneno,
                address,
                quantity,
                city,
                pincode,
                selerid: product.userid,
              },{
                withCredentials:true
              })
              
            } catch (eror) {
              console.log(error.message)
            }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open()

     

      

      // alert(userorder.data.message);
    } catch (error) {
      console.log(error.message);
      console.log(error);

      alert(
        error.response?.data?.message ||
          error.response?.data?.error ||
          "Something went wrong",
      );
    } finally {
      setloading(false);
      setaddress("")
      setcity("")
      setpincode("")
      setquantity(1 )
    }
  }

  useEffect(() => {
    async function orders() {
      const userdetails = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/find/user`,
        {
          withCredentials: true,
        },
      );

      setuser(userdetails.data.user);
    }

    orders();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 p-4 sm:p-6 lg:p-8">

      {loading ? (
        <div className="flex min-h-[500px] items-center justify-center">
          <Loading_circle />
        </div>
      ) : (
        <div className="mx-auto max-w-5xl">

          {/* Header */}
          <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                🛒
              </div>

              <div>
                <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                  Place Order
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                  Enter your delivery details and confirm your order
                </p>
              </div>

            </div>

            {/* Note */}
            <div className="mt-5 flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-50 p-3">
              <span className="text-lg">⚠️</span>

              <p className="text-sm text-amber-700">
                Please fill in all the required delivery information before
                confirming your order.
              </p>
            </div>

          </div>

          <form onSubmit={order}>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

              {/* Customer Details */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

                <div className="mb-6 flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                    👤
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-slate-800">
                      Customer Details
                    </h2>

                    <p className="text-xs text-slate-400">
                      Your account information
                    </p>
                  </div>

                </div>

                {/* Name */}
                <div className="mb-5">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Name
                  </label>

                  <input
                    type="text"
                    readOnly
                    value={user.username || ""}
                    className="w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-600 outline-none cursor-not-allowed"
                  />
                </div>

                {/* Contact */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Contact
                  </label>

                  <input
                    type="text"
                    readOnly
                    value={user.phoneno || ""}
                    className="w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-600 outline-none cursor-not-allowed"
                  />
                </div>

              </div>

              {/* Product Details */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

                <div className="mb-6 flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                    📦
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-slate-800">
                      Product Details
                    </h2>

                    <p className="text-xs text-slate-400">
                      Review your selected product
                    </p>
                  </div>

                </div>

                {/* Product */}
                <div className="mb-5">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Product
                  </label>

                  <input
                    type="text"
                    readOnly
                    value={product?.product || ""}
                    className="w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-600 outline-none cursor-not-allowed"
                  />
                </div>

                {/* Quantity */}
                <div className="mb-5">

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Quantity
                  </label>

                  <div className="flex items-center gap-3">

                    <button
                      type="button"
                      onClick={() => {
                        setquantity((prev) => Math.max(1, prev - 1));
                      }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-xl font-bold text-slate-700 transition hover:bg-slate-200 active:scale-95"
                    >
                      −
                    </button>

                    <div className="flex h-11 min-w-16 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-lg font-bold text-slate-800">
                      {quantity}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setquantity((prev) => prev + 1);
                      }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white transition hover:bg-blue-700 active:scale-95"
                    >
                      +
                    </button>

                  </div>

                </div>

                {/* Price */}
                <div className="mb-5">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Price
                  </label>

                  <input
                    type="text"
                    readOnly
                    value={product?.price * quantity || ""}
                    className="w-full rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-lg font-bold text-blue-600 outline-none cursor-not-allowed"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Category
                  </label>

                  <input
                    type="text"
                    readOnly
                    value={product?.catagory || ""}
                    className="w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-600 outline-none cursor-not-allowed"
                  />
                </div>

              </div>

              {/* Delivery Address */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:col-span-2">

                <div className="mb-6 flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                    📍
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-slate-800">
                      Delivery Address
                    </h2>

                    <p className="text-xs text-slate-400">
                      Where should we deliver your order?
                    </p>
                  </div>

                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                  {/* Address */}
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Address
                    </label>

                    <input
                      type="text"
                      onChange={(e) => {
                        setaddress(e.target.value);
                      }}
                      placeholder="Enter your complete address"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      City
                    </label>

                    <input
                      type="text"
                      onChange={(e) => {
                        setcity(e.target.value);
                      }}
                      placeholder="Enter city name"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                    />
                  </div>

                  {/* Pincode */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Pin Code
                    </label>

                    <input
                      type="number"
                      onChange={(e) => {
                        setpincode(e.target.value);
                      }}
                      placeholder="Enter pin code"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                    />
                  </div>

                </div>

              </div>

            </div>

            {/* Confirm Button */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md active:scale-[0.99] sm:text-base"
              >
                ✓ Pay Now
              </button>

              <p className="mt-3 text-center text-xs text-slate-400">
                Please check your delivery information before confirming.
              </p>

            </div>

          </form>

        </div>
      )}
    </div>
  );
};

export default place_order; 

