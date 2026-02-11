import Storefront from "@mui/icons-material/Storefront";
import AccountBalanceWallet from "@mui/icons-material/AccountBalanceWallet";
import ReportProblem from "@mui/icons-material/ReportProblem";

export default function LenderSupport() {
  return (
    <section className="min-h-screen bg-black text-white px-4 md:px-12 py-8 pb-28">
      <h1 className="text-2xl font-bold mb-6">Support for Lenders</h1>

      <SupportCard
        icon={<Storefront />}
        title="How Listing Works"
        text="Upload outfit details clearly. Approve rental requests and hand over outfits safely."
      />

      <SupportCard
        icon={<AccountBalanceWallet />}
        title="Payouts & Earnings"
        text="Earnings are credited after outfit return and verification. Platform fees are transparent."
      />

      <SupportCard
        icon={<ReportProblem />}
        title="Damage Claims"
        text="Report damages within 24 hours of return. Claims are reviewed fairly with photo proof."
      />
    </section>
  );
}

function SupportCard({ icon, title, text }) {
  return (
    <div className="bg-zinc-900 rounded-xl p-5 mb-4">
      <div className="flex gap-3 items-start">
        <div className="text-xl">{icon}</div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm opacity-70 mt-1">{text}</p>
        </div>
      </div>
    </div>
  );
}
