import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function PageHeader({ title }) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 bg-black text-white flex items-center gap-3 py-3 shadow-sm">
      <button
        onClick={() => navigate(-1)}
        className=" rounded-full hover:bg-blue-700"
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </button>

      <h1 className="text-xl font-semibold">{title}</h1>
    </header>
  );
}
