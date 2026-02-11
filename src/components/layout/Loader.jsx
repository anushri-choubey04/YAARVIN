import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader() {
  const loaderRef = useRef(null);
  const bagRef = useRef(null);
  const hangerRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // page reveal mask expand
    tl.fromTo(
      maskRef.current,
      { scaleY: 1 },
      { scaleY: 0, duration: 1.3, delay: 1.8, transformOrigin: "top" }
    );

    // bag drop from top
    tl.fromTo(
      bagRef.current,
      { y: -120, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      0.2
    );

    // hanger swing
    tl.fromTo(
      hangerRef.current,
      { rotate: -25 },
      { rotate: 15, duration: 0.8, yoyo: true, repeat: 3 },
      0.6
    );

    // glow pulse
    tl.fromTo(
      ".neon",
      { textShadow: "0px 0px 0px #38bdf8" },
      { textShadow: "0px 0px 15px #38bdf8", duration: 1.2 },
      1
    );

    // fade loader away
    tl.to(loaderRef.current, {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.9,
      delay: 0.4,
    });
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
    >
      {/* PAGE REVEAL MASK */}
      <div
        ref={maskRef}
        className="absolute inset-0 bg-black"
      />

      {/* neon animated gradient bg */}
      <div className="absolute inset-0 opacity-50 blur-xl bg-[conic-gradient(#0ea5e9,#020617,#0ea5e9,#020617)] animate-spin-slow"></div>

      {/* center content */}
      <div className="relative flex flex-col items-center gap-2">

        {/* bag + hanger */}
        <div className="relative">
          <svg
            ref={bagRef}
            width="90"
            height="90"
            viewBox="0 0 64 64"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <path d="M20 22h24l4 30H16l4-30z" />
            <path
              ref={hangerRef}
              d="M32 10c-4 0-7 3-7 7 0 3 2 5 4 6l3 2"
            />
          </svg>
        </div>

        {/* logo */}
        <h1 className="text-5xl md:text-7xl font-extrabold neon text-white tracking-wider">
          Look<span className="text-blue-400">Hook</span>
        </h1>

        <p className="text-gray-300 text-sm md:text-lg tracking-wide">
          peer-to-peer fashion rental service
        </p>
      </div>

      <style>{`
        .animate-spin-slow {
          animation: spin 18s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
