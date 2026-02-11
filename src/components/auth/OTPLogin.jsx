import { useState } from "react";

export default function OTPLogin() {
  const [step, setStep] = useState("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  return (
    <div className="space-y-4">
      {step === "phone" ? (
        <>
          <input
            type="tel"
            placeholder="Enter mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-800 rounded-lg px-4 py-3"
          />

          <button
            onClick={() => setStep("otp")}
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Send OTP
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full border border-gray-800 rounded-lg px-4 py-3"
          />

          <button
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Verify & Login
          </button>

          <button
            onClick={() => setStep("phone")}
            className="text-sm text-gray-500 hover:underline text-center w-full"
          >
            Change number
          </button>
        </>
      )}
    </div>
  );
}
