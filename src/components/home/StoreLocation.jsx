import images from "../../utils/images";

export default function StoreLocation() {
  return (
    <div className="container-location">
      {/* ===== MOBILE LUXURY STORE SECTION ===== */}
      <section
        id="store-location"
        className="block md:hidden bg-black  px-4 py-6"
      >
        {/* MAIN STORE CARD */}
        <div className="bg-[#111] rounded-3xl border border-white/10 shadow-xl px-6 py-2 text-center relative overflow-hidden bg-gradient-to-r from-blue-900  to-stone-800">
          {/* Soft Top Accent Line */}

          <div className="absolute top-0 left-0 w-full h-[3px]" />

          {/* Store Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
              <img
                src={images["storeLocation.jpg"]}
                alt="Store Icon"
                className="w-20 h-20 rounded-xl object-contain"
              />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-xl font-semibold text-white tracking-wide">
            Walk-in to our store
          </h2>

          {/* Description */}
          <p className="text-zinc-400 mt-3 text-sm leading-relaxed max-w-[260px] mx-auto">
            Check for your closest store and drop your clothes at our premium
            rental & laundry facility.
          </p>

          {/* VIDEO AREA */}
          <div className="my-4 rounded-xl overflow-hidden border border-white/10">
            <video controls className="w-full h-52 object-cover">
              <source src="#" type="video/mp4" />
            </video>
          </div>

          
        </div>
      </section>
    </div>
  );
}
