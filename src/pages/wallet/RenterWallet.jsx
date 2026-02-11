import { useNavigate } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SecurityIcon from "@mui/icons-material/Security";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";


export default function RenterWallet() {
  const navigate = useNavigate();

  // Mock data (later from backend)
  const renterData = {
    activeRentals: 1,
    depositHeld: 3000,
    refundStatus: "Refund expected in 2 days",
    damageCharge: 0,
  };

  return (
    <section className="min-h-screen bg-black text-white px-4 md:px-12 py-8 pb-28">
    
      <h1 className="text-2xl font-bold mb-6">Renter Wallet</h1>

      <div className="space-y-4">
        {/* ACTIVE RENTALS */}
        <WalletCard
          icon={<ShoppingBagIcon />}
          title="Active Rentals"
          value={`${renterData.activeRentals} Outfit`}
          subtitle="Currently rented by you"
          onClick={() => navigate("/rentals/active")}
        />

        {/* SECURITY DEPOSIT */}
        <WalletCard
          icon={<SecurityIcon />}
          title="Security Deposit Held"
          value={`₹${renterData.depositHeld}`}
          subtitle="Released after return verification"
          onClick={() => navigate("/rentals/deposit")}
        />

        {/* REFUND STATUS */}
        <WalletCard
          icon={<AssignmentReturnIcon />}
          title="Refund Status"
          value={renterData.refundStatus}
          subtitle={
            renterData.damageCharge > 0
              ? `₹${renterData.damageCharge} damage deduction`
              : "No damage charges"
          }
        />
      </div>

      {/* INFO */}
      <div className="mt-8 bg-zinc-900 rounded-xl p-4 text-sm text-zinc-300">
        🔒 Deposits are securely held until outfit return & inspection.
      </div>
    </section>
  );
}

function WalletCard({ icon, title, value, subtitle, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`bg-zinc-900 rounded-xl p-5 ${
        onClick ? "cursor-pointer hover:bg-zinc-800" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="text-xl">{icon}</div>
        <div>
          <p className="text-sm opacity-70">{title}</p>
          <p className="text-lg font-bold">{value}</p>
          <p className="text-xs opacity-60">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
