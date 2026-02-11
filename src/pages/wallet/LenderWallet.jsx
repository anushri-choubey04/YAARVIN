import { useNavigate } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

export default function LenderWallet() {
  const navigate = useNavigate();

  const lenderData = {
    monthlyEarnings: 1240,
    pendingAmount: 800,
    damageClaims: 1,
  };

  return (
    <section className="min-h-screen bg-black text-white px-4 md:px-12 py-8 pb-28">
      <h1 className="text-2xl font-bold mb-6">Lender Wallet</h1>

      <div className="space-y-4">
        {/* TOTAL EARNINGS */}
        <WalletCard
          icon={<TrendingUpIcon />}
          title="Earnings This Month"
          value={`₹${lenderData.monthlyEarnings}`}
          subtitle="From your listed outfits"
          onClick={() => navigate("/closet/earnings")}
        />

        {/* PENDING PAYOUT */}
        <WalletCard
          icon={<StorefrontIcon />}
          title="Pending Amount"
          value={`₹${lenderData.pendingAmount}`}
          subtitle="Outfit not returned yet"
          onClick={() => navigate("/closet/requests")}
        />

        {/* DAMAGE CLAIMS */}
        <WalletCard
          icon={<ReportProblemIcon />}
          title="Damage Claims"
          value={`${lenderData.damageClaims} Case`}
          subtitle="Under review"
          onClick={() => navigate("/closet/damages")}
        />
      </div>

      <div className="mt-8 bg-zinc-900 rounded-xl p-4 text-sm text-zinc-300">
        💰 Earnings are credited after outfit return & renter verification.
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
