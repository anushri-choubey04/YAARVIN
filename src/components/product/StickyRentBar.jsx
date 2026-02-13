export default function StickyRentBar({ total, onRent }) {
  return (
    <div className="fixed bottom-[72px] w-full  md:hidden">
      
      {/* FLOATING CAPSULE */}
      <div
        className="
        flex items-center justify-between
        w-100% 
         py-3 px-4
        bg-white backdrop-blur-2xl
        border border-white/10
        shadow-[0_10px_30px_rgba(0,0,0,0.6)]
      "
      >
        {/* PRICE */}
        <div className="flex flex-col leading-tight">
          <span className="text-[12px] text-black tracking-wider">
            TOTAL
          </span>
          <span className="text-black font-semibold text-lg">
            ₹{total || 0}
          </span>
        </div>

        {/* CTA BUTTON */}
        <button
          onClick={onRent}
          className="
            bg-black text-white
            rounded-full
            px-6 py-2.5
            text-sm font-semibold
            transition-all duration-300
            active:scale-[0.94]
            hover:scale-[1.05]
            shadow-md
          "
        >
          Rent Now
        </button>
      </div>
    </div>
  );
}
