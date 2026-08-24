import React from "react";

const settings = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50 p-4 sm:p-6 lg:p-8">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">
          Settings
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage your account information and preferences
        </p>
      </div>

      {/* Settings Card */}
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        {/* Account Header */}
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4 sm:px-6">
          <h2 className="text-lg font-bold text-slate-800">
            Account Settings
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Update your personal account details
          </p>
        </div>

        {/* Username */}
        <div className="grid grid-cols-1 gap-3 border-b border-slate-100 px-5 py-5 sm:grid-cols-3 sm:items-center sm:px-6">
          <div>
            <p className="text-sm font-semibold text-slate-700">
              Username
            </p>
            <p className="text-xs text-slate-400">
              Your account username
            </p>
          </div>

          <p className="text-sm font-medium text-slate-600 sm:col-span-1">
            keshav
          </p>

          <div className="sm:text-right">
            <button className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95">
              Update
            </button>
          </div>
        </div>

        {/* Password */}
        <div className="grid grid-cols-1 gap-3 border-b border-slate-100 px-5 py-5 sm:grid-cols-3 sm:items-center sm:px-6">
          <div>
            <p className="text-sm font-semibold text-slate-700">
              Password
            </p>
            <p className="text-xs text-slate-400">
              Keep your account secure
            </p>
          </div>

          <p className="text-sm font-medium tracking-widest text-slate-500">
            ••••••••
          </p>

          <div className="sm:text-right">
            <button className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95">
              Update
            </button>
          </div>
        </div>

        {/* Email */}
        <div className="grid grid-cols-1 gap-3 border-b border-slate-100 px-5 py-5 sm:grid-cols-3 sm:items-center sm:px-6">
          <div>
            <p className="text-sm font-semibold text-slate-700">
              Email
            </p>
            <p className="text-xs text-slate-400">
              Your registered email address
            </p>
          </div>

          <p className="break-all text-sm font-medium text-slate-600">
            keshav@email.com
          </p>

          <div className="sm:text-right">
            <button className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95">
              Update
            </button>
          </div>
        </div>

        {/* Phone */}
        <div className="grid grid-cols-1 gap-3 border-b border-slate-100 px-5 py-5 sm:grid-cols-3 sm:items-center sm:px-6">
          <div>
            <p className="text-sm font-semibold text-slate-700">
              Phone Number
            </p>
            <p className="text-xs text-slate-400">
              Your registered phone number
            </p>
          </div>

          <p className="text-sm font-medium text-slate-600">
            123456789958
          </p>

          <div className="sm:text-right">
            <button className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95">
              Update
            </button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-50 px-5 py-5 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold text-red-700">
                Remove Account
              </p>
              <p className="mt-1 text-xs text-red-500">
                Permanently remove your account and associated data.
              </p>
            </div>

            <button className="w-full rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 active:scale-95 sm:w-auto">
              Remove Account
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default settings;