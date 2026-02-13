import { NavLink } from "react-router-dom";
import { Home, Grid, PlusSquare, Heart, User } from "lucide-react";

const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full  z-[100] bg-black border-t  shadow-[0_-4px_10px_rgba(0,0,0,0.5)] md:hidden font-jakarta border-white">
      <div className="flex justify-around items-center min-h-[74px] px-2 w-100% uppercase tracking-wide font-bold">
        
        {/* Home */}
        <NavLink to="/" className="flex flex-col items-center justify-center gap-1">
          {({ isActive }) => (
            <>
              <Home size={22} className={isActive ? "text-[#00A143]" : "text-gray-200"} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[12px]   ${isActive ? "text-[#00A143]" : "text-gray-200"}`}>Home</span>
            </>
          )}
        </NavLink>

        {/* Categories */}
        <NavLink to="/categories" className="flex flex-col items-center justify-center gap-1">
          {({ isActive }) => (
            <>
              <Grid size={22} className={isActive ? "text-[#00A143]" : "text-gray-200"} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[12px]  ${isActive ? "text-[#00A143]" : "text-gray-200"}`}>Category</span>
            </>
          )}
        </NavLink>

        {/* Center Action Button (Feed) */}
        <NavLink
          to="/upload"
          className="flex flex-col items-center justify-center h-[56px] w-[56px] bg-blue-600 text-white rounded-full  border-4 border-blue-900 shadow-xl active:scale-90 transition-transform"
        >
          <PlusSquare size={22} />
          <span className="text-[12px] font-bold mt-1">Feed</span>
        </NavLink>

        {/* Wishlist */}
        <NavLink to="/wishlist" className="flex flex-col items-center justify-center gap-1">
          {({ isActive }) => (
            <>
              <Heart size={22} className={isActive ? "text-[#00A143]" : "text-gray-200"} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[12px]  ${isActive ? "text-[#00A143]" : "text-gray-200"}`}>Wishlist</span>
            </>
          )}
        </NavLink>

        {/* Profile */}
        <NavLink to="/account" className="flex flex-col items-center justify-center gap-1">
          {({ isActive }) => (
            <>
              <User size={22} className={isActive ? "text-[#00A143]" : "text-gray-200"} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[12px]  ${isActive ? "text-[#00A143]" : "text-gray-200"}`}>Account</span>
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNavbar;