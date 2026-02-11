import { useState } from "react";
import SocialLogin from "./SocialLogin";
import OTPLogin from "./OTPLogin";

export default function LoginForm() {
  const [showOTP, setShowOTP] = useState(false);

  const handleGoogleLogin = () => {
    console.log("Google login triggered");
    // later → dispatch(googleLogin())
  };

  return (
    <div className="min-h-[calc(50vh-100px)] flex items-center justify-center px-4 m-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-6 md:p-8 space-y-6">

        <div className="text-center">
          <h2 className="text-2xl font-bold">Welcome Back</h2>
          <p className="text-sm text-gray-600">Login to continue</p>
        </div>

        {/* GOOGLE */}
        <SocialLogin onGoogleLogin={handleGoogleLogin} />

        {/* EMAIL LOGIN */}
        {!showOTP && (
          <form className="space-y-4">
            <input className="w-full border border-gray-800 rounded-lg px-4 py-3" placeholder="Email" />
            <input
              className="w-full border border-gray-800 rounded-lg px-4 py-3"
              type="password"
              placeholder="Password"
            />

            <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-blue-800">
              Login
            </button>
          </form>
        )}

        {/* OTP LOGIN */}
        {showOTP && <OTPLogin />}

        <button
          onClick={() => setShowOTP(!showOTP)}
          className="text-sm text-gray-800 hover:underline w-full text-center"
        >
          {showOTP ? "Login with Email instead" : "Login with OTP"}
        </button>
      </div>
    </div>
  );
}
