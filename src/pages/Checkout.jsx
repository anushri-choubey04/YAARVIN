import { useState } from "react";
import AuthModal from "../components/auth/AuthModal";

export default function Checkout() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <div>
      <h1 className="text-2xl font-bold">Checkout Page</h1>

      {/* Place Order Button */}
      <button
        onClick={() => setAuthOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4"
      >
        Place Order
      </button>

      {/* Auth Modal show only when state is true */}
      {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
    </div>
  );
}
