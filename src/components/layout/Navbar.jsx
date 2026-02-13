import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Search, ShoppingBag, User, MapPin, ChevronDown, ArrowLeft, X } from "lucide-react";

export default function Navbar({ onLoginClick }) {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const suggestions = [
    "Saree", "Lehenga", "Kurta", "Western Dress", "Party Wear", "Sherwani",
  ];

  const filtered =
    query.trim() === ""
      ? []
      : suggestions.filter((item) =>
          item.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <>
      <header className="w-full sticky top-0 z-50 bg-black border-b border-white/20 font-jakarta">
        <nav className="mx-auto md:px-12 px-4 py-3 flex items-center justify-between h-[56px] md:h-[76px] ">
          
          {/* --- MOBILE VIEW: LOGO & LOCATION (LEFT) --- */}
          <div className="flex items-center h-full gap-3 md:hidden">
            {/* Logo */}
            <div 
              className="text-2xl font-black text-white leading-tight cursor-pointer" 
              onClick={() => navigate("/")}
            >
              LookHook
            </div>
            
            {/* Location Section 
            <div className="flex flex-col justify-center border-l border-gray-800 pl-3 h-8">
              <span className="text-[11px] font-bold text-white leading-none">Location not accessible</span>
              <div className="flex items-center gap-1 text-gray-400 mt-0.5">
                <span className="text-[10px]">Enter Pincode manually</span>
                <ChevronDown size={10} />
              </div>
            </div>*/}
          </div>

          {/* --- DESKTOP VIEW: LOGO (HIDDEN ON MOBILE) --- */}
          <div
            className="hidden md:block text-3xl font-extrabold tracking-wide text-white cursor-pointer hover:scale-105 transition"
            onClick={() => navigate("/")}
          >
            LookHook
          </div>

          {/* --- DESKTOP CENTER: NAV LINKS (HIDDEN ON MOBILE) --- */}
          <div className="hidden md:flex items-center gap-8 text-white text-lg font-medium">
            <button className="hover:text-blue-500 transition" onClick={() => navigate("/")}>Home</button>
            <button className="hover:text-blue-500 transition" onClick={() => navigate("/lend")}>List Your Closet</button>
            <button className="hover:text-blue-500 transition" onClick={() => navigate("/contact")}>Contact Us</button>
            <button className="hover:text-blue-500 transition" onClick={() => navigate("/categories")}>Categories</button>
          </div>

          {/* --- RIGHT SECTION: ICONS (MOBILE & DESKTOP) --- */}
          <div className="flex items-center h-full gap-4 md:gap-6">
            
            {/* Desktop Search Bar */}
            <div className="hidden md:relative md:block w-64">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search outfits..."
                className="w-full rounded-full px-5 py-2 bg-white/10 text-white text-sm border border-white/10 outline-none focus:ring-1 focus:ring-blue-500"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>

            {/* Bag Icon (Both) */}
            <button onClick={() => navigate("/cart")} className="text-white hover:text-blue-800 transition">
              <ShoppingBag size={24} strokeWidth={1.5} />
            </button>

            {/* Search Icon (Mobile Only) */}
            <button 
              onClick={() => setMobileSearchOpen(true)} 
              className="md:hidden text-white hover:text-blue-800 transition"
            >
              <Search size={24} strokeWidth={1.5} />
            </button>

            {/* Profile Icon (Both) */}
            <button 
              onClick={() => navigate(`/account`)} 
              className="hidden md:relative md:block bg-zinc-800 p-1.5 rounded-full text-white hover:bg-blue-800 transition"
            >
              <User size={20} />
            </button>

            {/* Desktop Login Button */}
            <button
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition"
              onClick={onLoginClick}
            >
              Login
            </button>

            {/* Mobile Menu Toggle (Optional) */}
            <button onClick={() => setMobileOpen(true)} className="md:hidden text-white ml-1 ">
              <div className="w-5 h-0.5 bg-white mb-1 "></div>
              <div className="w-5 h-0.5 bg-white mb-1"></div>
              <div className="w-5 h-0.5 bg-white"></div>
            </button>
          </div>
        </nav>
      </header>

      {/* --- FULLSCREEN MOBILE SEARCH OVERLAY --- */}
      {mobileSearchOpen && (
        <div className="fixed inset-0 bg-black z-[100] p-4 flex flex-col font-jakarta animate-in fade-in duration-200">
          <div className="flex items-center gap-4 border-b border-zinc-800 pb-3">
            <ArrowLeft 
              className="text-white cursor-pointer" 
              onClick={() => setMobileSearchOpen(false)} 
            />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, brands..."
              className="flex-1 bg-transparent text-white outline-none text-lg placeholder-zinc-500"
            />
            {query && <X className="text-zinc-500" onClick={() => setQuery("")} />}
          </div>

          <div className="mt-4 overflow-y-auto">
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <div 
                  key={item} 
                  className="py-4 text-white border-b border-zinc-900 active:bg-zinc-900 transition px-2"
                  onClick={() => {
                    setQuery(item);
                    setMobileSearchOpen(false);
                    navigate(`/categories?search=${item}`);
                  }}
                >
                  {item}
                </div>
              ))
            ) : query.trim() !== "" ? (
              <p className="text-zinc-500 mt-4 px-2">No matching results found</p>
            ) : (
              <div className="mt-4 px-2 text-zinc-500">
                <p className="text-xs font-bold uppercase tracking-wider mb-3">Popular Searches</p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map(s => (
                    <span key={s} className="px-3 py-1 bg-zinc-900 rounded-full text-sm" onClick={() => setQuery(s)}>{s}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- MOBILE SIDE MENU --- */}
{mobileOpen && (
  <div className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm">
    <div className="fixed right-0 top-0 h-full w-[280px] bg-black text-white p-6 shadow-2xl border-l border-white/10">
      
      {/* Close Button */}
      <button onClick={() => setMobileOpen(false)} className="absolute right-4 top-4 text-zinc-400">
        <X size={24} />
      </button>

      {/* Header Info */}
      <div className="mt-8 flex gap-3 items-center border-b border-zinc-800 pb-6">
        <div className="w-12 h-12 rounded-full bg-zinc-600 flex items-center justify-center">
          <User size={24} />
        </div>
        <div>
          <p className="font-bold text-lg">Hi, Buddy</p>
          <p className="text-xs text-zinc-400">Welcome to LookHook 👋</p>
        </div>
      </div>

      {/* FIXED NAVIGATION ITEMS */}
      <div className="mt-8 flex flex-col gap-3">
        {/* Home */}
        <button
          className="w-full text-left px-4 py-3 rounded-xl bg-zinc-600/50 hover:bg-blue-600 transition font-medium"
          onClick={() => {
            setMobileOpen(false); // Close first
            navigate("/");        // Navigate second
          }}
        >
          Home
        </button>

        {/* List Your Closet (Lend) */}
        <button
          className="w-full text-left px-4 py-3 rounded-xl bg-zinc-600/50 hover:bg-blue-600 transition font-medium"
          onClick={() => {
            setMobileOpen(false); // Close menu so you can see the new page
            navigate("/lend");    // Correct route for 'List Your Closet'
          }}
        >
          List Your Closet
        </button>

        {/* Contact Us */}
        <button
          className="w-full text-left px-4 py-3 rounded-xl bg-zinc-600/50 hover:bg-blue-600 transition font-medium"
          onClick={() => {
            setMobileOpen(false);
            navigate("/contact");
          }}
        >
          Contact Us
        </button>

        {/* Categories */}
        <button
          className="w-full text-left px-4 py-3 rounded-xl bg-zinc-600/50 hover:bg-blue-600 transition font-medium"
          onClick={() => {
            setMobileOpen(false);
            navigate("/categories");
          }}
        >
          Categories
        </button>
      </div>
    </div>
  </div>
)}
    </>
  );
}