import ShoppingBag from "@mui/icons-material/ShoppingBag";
import AssignmentReturn from "@mui/icons-material/AssignmentReturn";
import ReportProblem from "@mui/icons-material/ReportProblem";
import { useNavigate } from "react-router-dom";

export default function RenterSupport() {
    const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-black text-white px-4 md:px-12 py-8 pb-28">
      <h1 className="text-2xl font-bold mb-6">Support for Renters</h1>

      <SupportCard
        icon={<ShoppingBag />}
        title="How Renting Works"
        text="Browse outfits, pay rental fee + security deposit. Deposit is held securely during your rental."
        onClick={() => navigate("/rent")}
      />

      <SupportCard
        icon={<AssignmentReturn />}
        title="Returns & Refunds"
        text="Return the outfit on time. Refunds are initiated within 24–48 hours after verification."
      />

      <SupportCard
        icon={<ReportProblem />}
        title="Damage Policy"
        text="Minor wear is okay. Any damage is assessed fairly and deducted only if necessary."
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
