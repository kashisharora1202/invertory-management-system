import axios from 'axios';
import React from 'react'
import { useState } from 'react'

const add_product = () => {
 
 const [product, setproduct] = useState("");
 const [image, setimage] = useState(null);
 const [stock, setstock] = useState("");
 const [price, setprice] = useState("");
 const [catagory, setcatagory] = useState("");
 
 async function addproduct(e) {
   try {
    e.preventDefault()

    const newproduct = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/add/product`,{
      product,
      image,
      stock,
      price,
      catagory
    },
  {
    withCredentials:true
  })

 
    alert(newproduct.data.message)

   } catch (error) {
     alert(error.response.data.message)
   }
   finally{
    setproduct("")
    setimage(null)
    setcatagory("")
    setprice("")
    setstock("")
   }
 }
 
 
 
 
 
 
 
 return (
  <div className="min-h-screen w-full bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
    
    {/* Header */}
    <div className="mx-auto mb-6 max-w-3xl">
      <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">
        Add Product
      </h1>

      <p className="mt-1 text-sm text-slate-500">
        Add a new product to your inventory
      </p>
    </div>


    {/* Form Card */}
    <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8">

      <form
        onSubmit={addproduct}
        className="space-y-5"
      >

        {/* Product Name */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Product Name
          </label>

          <input
            type="text"
            onChange={(e) => {
              setproduct(e.target.value)
            }}
            placeholder="Enter product name"
            value={product}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />
        </div>


        {/* Price */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Price
          </label>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-slate-400">
              ₹
            </span>

            <input
              type="text"
              onChange={(e) => {
                setprice(e.target.value)
              }}
              placeholder="Enter product price"
              value={price}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-9 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </div>
        </div>


        {/* Category + Stock */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

          {/* Category */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Product Category
            </label>

            <div className="relative">
              <select
                value={catagory}
                onChange={(e) => {
                  setcatagory(e.target.value)
                }}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-sm text-slate-700 outline-none transition hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              >
                <option value="">Select Category</option>
                <option value="Electronic">Electronic</option>
                <option value="Cloths">Cloths</option>
                <option value="Shoes & Footwear">Shoes & Footwear</option>
                <option value="Groceries">Groceries</option>
                <option value="Beauty & Personal Care">
                  Beauty & Personal Care
                </option>
                <option value="Home & Kitchen">Home & Kitchen</option>
                <option value="Stationery">Stationery</option>
                <option value="Sports">Sports</option>
                <option value="Toys">Toys</option>
                <option value="Games">Games</option>
                <option value="Books">Books</option>
                <option value="Jewellery">Jewellery</option>
                <option value="beg">Beg</option>
              </select>

              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                ▼
              </span>
            </div>
          </div>


          {/* Stock */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Product Stock
            </label>

            <div className="relative">
              <select
                value={stock}
                onChange={(e) => {
                  setstock(e.target.value)
                }}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-sm text-slate-700 outline-none transition hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              >
                <option value="">Select Stock</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </select>

              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                ▼
              </span>
            </div>
          </div>

        </div>


        {/* Image Upload */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Product Image
          </label>

          <label
            htmlFor="image"
            className="group flex h-40 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-4 transition hover:border-blue-400 hover:bg-blue-50"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl transition group-hover:scale-110">
              📷
            </div>

            <span className="mt-3 text-sm font-medium text-slate-600">
              {image ? image.name : "Click to upload image"}
            </span>

            <span className="mt-1 text-xs text-slate-400">
              PNG, JPG, JPEG or WEBP
            </span>

            <input
              id="image"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => setimage(e.target.files[0])}
            />
          </label>
        </div>


        {/* Submit */}
        <div className="flex justify-end border-t border-slate-100 pt-5">
          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md active:scale-[0.98] sm:w-auto"
          >
            + Add Product
          </button>
        </div>

      </form>

    </div>
  </div>
)
}

export default add_product
