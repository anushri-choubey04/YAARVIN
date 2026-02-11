import { NavLink } from "react-router-dom";
import { Home, Search, PlusCircle, Heart, User } from "lucide-react";

const BottomNavbar = () => {
  return (
    <nav
      className="
        fixed bottom-0 left-0 right-0
        bg-black backdrop-blur
        border-t border-gray-300
        shadow-[0_-2px_10px_rgba(0,0,0,0.15)]
        h-16
        flex items-center justify-around
        z-50
        md:hidden
      "
    >
      {/* Home */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex flex-col items-center text-sm font-semibold
          transition-all text-white
          ${isActive ? "hover:text-blue-800" : "text-white"}`
        }
      >
        <Home className="w-5 h-5" />
        <span>Home</span>
      </NavLink>

      {/* Rent / Products */}
      <NavLink
        to="/categories"
        className={({ isActive }) =>
          `flex flex-col items-center text-sm font-semibold
          transition-all 
          ${isActive ? "text-blue-800" : "text-white"}`
        }
      >
        <Search className="w-5 h-5" />
        <span>Category</span>
      </NavLink>

      {/* Center Add Button */}
      <NavLink
        to="/upload"
        className="
          flex flex-col items-center
          -mt-4
          bg-blue-800
          text-white rounded-2xl
          px-4 py-3
          border border-white/40
          shadow-lg
          active:scale-95
          transition
        "
      >
        <PlusCircle className="w-6 h-6" />
        <span className="text-xs font-bold">Feed</span>
      </NavLink>

      {/* Wishlist */}
      <NavLink
        to="/wishlist"
        className={({ isActive }) =>
          `flex flex-col items-center text-sm font-semibold
          transition-all 
          ${isActive ? "text-blue-800" : "text-white"}`
        }
      >
        <Heart className="w-5 h-5" />
        <span>Wishlist</span>
      </NavLink>

      {/* Profile */}
      <NavLink
        to="/account"
        className={({ isActive }) =>
          `flex flex-col items-center text-sm font-semibold
          transition-all 
          ${isActive ? "text-blue-800" : "text-white"}`
        }
      >
        <User className="w-5 h-5" />
        <span>Account</span>
      </NavLink>
    </nav>
  );
};

export default BottomNavbar;
