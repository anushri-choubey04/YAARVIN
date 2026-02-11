import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar({ onLoginClick, onCartOpen }) {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const suggestions = [
    "Saree",
    "Lehenga",
    "Kurta",
    "Western Dress",
    "Party Wear",
    "Sherwani",
  ];

  const filtered =
    query.trim() === ""
      ? []
      : suggestions.filter((item) =>
          item.toLowerCase().includes(query.toLowerCase()),
        );

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <header className="w-full sticky top-0 z-50 bg-black backdrop-blur-xl border-b border-white/10">
        <nav className="mx-auto md:px-12 px-4 py-4 flex items-center justify-between">
          {/* LEFT: LOGO */}
          <div
            className="text-3xl font-extrabold tracking-wide text-white cursor-pointer hover:scale-105 transition"
            onClick={() => navigate("/")}
          >
            Look<span className="text-blue-500">Hook</span>
          </div>

          {/* CENTER: NAV LINKS */}
          <div className="hidden md:flex items-center gap-8 text-white text-base font-medium">
            <button
              className="hover:text-blue-700 transition"
              onClick={() => navigate("/")}
            >
              Home
            </button>
            <button
              className="hover:text-blue-700 transition"
              onClick={() => navigate("/lend")}
            >
              List Your Closet
            </button>
            <button
              className="hover:text-blue-700 transition"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
            <button
              className="hover:text-blue-700 transition"
              onClick={() => navigate("/categories")}
            >
              Categories
            </button>
          </div>

          {/* RIGHT: SEARCH + ICONS + LOGIN */}
          <div className="hidden md:flex items-center gap-5">
            {/* SEARCH BAR */}
            <div className="relative w-72">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search outfits, brands, styles..."
                className="w-full rounded-full px-5 py-2.5 pr-11 text-sm outline-none 
                           bg-white/10 text-white placeholder-gray-400 
                           border border-white/10 
                            
                           focus:ring-2 focus:ring-blue-500"
              />
              <i className="fas fa-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />

              {/* SEARCH SUGGESTIONS */}
              {filtered.length > 0 && (
                <div className="absolute left-0 right-0 mt-1 bg-white rounded-2xl shadow-xl overflow-hidden z-40">
                  {filtered.map((item) => (
                    <div
                      key={item}
                      className="px-5 py-3 text-sm cursor-pointer hover:bg-gray-100"
                      onClick={() => {
                        setQuery(item);
                        navigate(`/categories?search=${item}`);
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ICONS */}
            <div className="flex items-center gap-5 text-gray-300 text-lg">
              <button
                onClick={onCartOpen}
                className="hover:text-blue-500 transition"
              >
                <i className="fas fa-shopping-bag"></i>
              </button>

              <Link to="/wishlist" className="hover:text-pink-400 transition">
                <i className="fas fa-heart" />
              </Link>

              <button
                className="hover:text-blue-500 transition"
                onClick={() => navigate(`/account`)}
              >
                <i className="fas fa-user"></i>
              </button>
            </div>

            {/* LOGIN BUTTON */}
            <button
              className="flex items-center gap-2 px-5 py-2.5 rounded-full 
                 bg-gradient-to-r from-blue-800 to-blue-500 
                 hover:from-blue-400 hover:to-blue-600 
                 text-white font-medium shadow-lg transition"
              onClick={onLoginClick}
            >
              <i className="fas fa-user" />
              Login
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-2xl text-white"
          >
            <i className="fas fa-bars" />
          </button>
        </nav>

        {/* MOBILE SEARCH BUTTON */}
        <div className="md:hidden px-4 pb-3">
          <button
            onClick={() => setMobileSearchOpen(true)}
            className="w-full rounded-full px-4 py-2 flex items-center gap-2 text-gray-400 border border-gray-500"
          >
            <i className="fas fa-search" />
            <span>Search products…</span>
          </button>
        </div>
      </header>

      {/* FULLSCREEN MOBILE SEARCH */}
      {mobileSearchOpen && (
        <div className="fixed inset-0 bg-black z-[100] p-4">
          <div className="flex items-center gap-3 text-white">
            <i
              className="fas fa-arrow-left text-xl cursor-pointer"
              onClick={() => setMobileSearchOpen(false)}
            />

            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="flex-1 bg-transparent text-white border border-gray-700 outline-none px-2 py-2 text-lg"
            />
          </div>

          <div className="mt-4">
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <div 
                  key={item}
                  className="px-2  py-3  cursor-pointer text-white hover:bg-gray-700 transition border border-gray-100"
                  onClick={() => {
                    setQuery(item);
                    setMobileSearchOpen(false);
                    navigate(`/categories?search=${item}`);
                  }}
                >
                  {item}
                </div>
              ))
            ) : (
              <p className="text-gray-500 mt-4">No results yet</p>
            )}
          </div>
        </div>
      )}

      {/* MOBILE SIDE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-[90]">
          <div className="fixed right-0 top-0 h-full w-4/5 bg-black text-white p-6">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute right-4 top-4 text-xl"
            >
              <i className="fas fa-times" />
            </button>

            <div className="mt-10 flex gap-3 items-center border-b border-gray-700 pb-3">
              <div className="w-12 h-12 rounded-full bg-gray-700" />
              <div>
                <p className="font-semibold text-lg">Hi, Buddy</p>
                <p className="text-sm text-gray-300">Welcome 👋</p>
              </div>
            </div>

            <div className="mt-6 flex  flex-col gap-3  rounded-lg">
              <button
                className=" px-4 py-3 rounded-lg bg-gray-600 hover:bg-blue-800"
                onClick={() => {
                  navigate("/");
                  setMobileOpen(false);
                }}
              >
                Home
              </button>
              <button
                className=" px-4 py-3 rounded-lg bg-gray-600 hover:bg-blue-800"
                onClick={() => {
                  navigate("/lend");
                  setMobileOpen(false);
                }}
              >
                Earn Money
              </button>
              <button
                className=" px-4 py-3 rounded-lg bg-gray-600 hover:bg-blue-800"
                onClick={() => {
                  navigate("/contact");
                  setMobileOpen(false);
                }}
              >
                Contact
              </button>
              <button
                className=" px-4 py-3 rounded-lg bg-gray-600 hover:bg-blue-800"
                onClick={() => {
                  navigate("/categories");
                  setMobileOpen(false);
                }}
              >
                Category
              </button>
              <button
                className="bg-blue-600 px-4 py-3 rounded-lg hover:bg-blue-500"
                onClick={() => {
                  onLoginClick();
                  setMobileOpen(false);
                }}
              >
                👤 Login / Signup
              </button>
            </div>

            <div className="mt-auto border-t border-gray-700 pt-4">
              <button
                onClick={() => setSupportOpen(!supportOpen)}
                className="w-full flex justify-between"
              >
                Support (10AM–9PM)
                <i className="fas fa-chevron-down" />
              </button>

              {supportOpen && (
                <div className="mt-3 text-sm space-y-1">
                  <p>📞 +91 959-959-5513</p>
                  <p>✉️ yaarvin@gmail.com</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* LOGIN MODAL */}
    </>
  );
}
