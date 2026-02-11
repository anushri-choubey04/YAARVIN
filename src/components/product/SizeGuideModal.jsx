import { useEffect } from "react";

export default function SizeGuideModal({ open, onClose }) {
  // 🔒 Prevent background scroll
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* MODAL */}
      <div
        className="
          relative bg-white w-full md:w-[420px]
          rounded-t-2xl md:rounded-2xl
          p-6 md:p-8 bottom-32
          animate-slideUp
          max-h-[85vh] overflow-y-auto
        "
      >
        {/* DRAG HANDLE (mobile) */}
        <div className="md:hidden w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg md:text-xl font-semibold">
            Size Guide
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        {/* SIZE TABLE */}
        <div className="border rounded-xl overflow-hidden">
          <div className="grid grid-cols-2 bg-gray-100 text-sm font-medium">
            <div className="p-3">Size</div>
            <div className="p-3">Bust (inches)</div>
          </div>

          {[
            { size: "S", bust: "34 – 36" },
            { size: "M", bust: "36 – 38" },
            { size: "L", bust: "38 – 40" },
            { size: "XL", bust: "40 – 42" },
          ].map((row) => (
            <div
              key={row.size}
              className="grid grid-cols-2 border-t text-sm"
            >
              <div className="p-3 font-medium">{row.size}</div>
              <div className="p-3">{row.bust}</div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <button
          onClick={onClose}
          className="
            mt-6 w-full bg-black text-white py-3
            rounded-xl font-medium
            active:scale-95 transition
          "
        >
          Got it
        </button>
      </div>
    </div>
  );
}
