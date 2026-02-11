import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function AccountItem({
  icon,
  title,
  subtitle,
  onClick,
  danger = false,
}) {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center justify-between px-4 py-3 cursor-pointer
        ${danger ? "text-red-600" : "text-gray-800"}
        hover:bg-gray-100
      `}
    >
      <div className="flex items-center gap-4">
        <div className="text-gray-800">{icon}</div>
        <div>
          <p className="font-medium">{title}</p>
          {subtitle && (
            <p className="text-xs text-gray-600">{subtitle}</p>
          )}
        </div>
      </div>

      <ChevronRightIcon className="text-gray-800" />
    </div>
  );
}
