import { useState } from "react";
import SocialLogin from "./SocialLogin";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleLogin = () => {
    console.log("Google login triggered");
    // later → dispatch(googleLogin())
  };
  
  return (
    <div className="min-h-[calc(50vh-100px)] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 md:p-8">

        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-black">Create Account</h2>
          <p className="text-sm text-gray-500 mt-1">
            Join LookHook & start Renting
          </p>
        </div>

        {/* GOOGLE */}
          <SocialLogin onGoogleLogin={handleGoogleLogin} />

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full name"
            className="w-full border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border border-gray-800 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-black"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Create Account
          </button>

          
        </form>
      </div>
    </div>
  );
}
