import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Heart, Trash2, ChevronRight, ChevronDown } from "lucide-react";
import MetaData from "../layout/MetaData";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems = [] } = useSelector((state) => state.cart || {});

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalMRP = cartItems.reduce((acc, item) => acc + (item.mrp || item.price * 1.5) * item.quantity, 0);

  return (
    <>
      <MetaData title="Shopping bag" />
      <main className="w-full min-h-screen bg-black text-white font-jakarta pb-44">
        
        {/* --- HEADER --- */}
        <header className="flex items-center border-t gap-3 px-4 py-2 border-b">
        <button onClick={() => navigate(-1)} className="text-xl">
          <i className="fas fa-arrow-left" />
        </button>
        <h2 className="absolute left-1/2 -translate-x-1/2 font-semibold text-lg md:text-2xl text-center">
          Shopping Bag ({cartItems.length})
        </h2>
      </header>

        {/* --- TABS --- */}
        <div className="flex border-b border-zinc-900 bg-black">
          <button className="flex-1 py-3 text-sm font-bold border-b-2 border-white">Added to bag</button>
          <button className="flex-1 py-3 text-sm font-medium text-zinc-500">Add from Wishlist</button>
        </div>

        <div className="max-w-md mx-auto px-4 mt-4">
          <p className="text-xs font-bold text-zinc-400 mb-6 uppercase tracking-widest">{cartItems.length}/{cartItems.length} items selected</p>

          {/* --- ITEM LIST --- */}
          <div className="flex flex-col gap-8">
            {cartItems.map((item) => (
              <div key={item.product} className="flex gap-4 relative">
                <div className="w-24 h-32 bg-zinc-900 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-bold leading-tight pr-6">{item.name}</h3>
                    <Trash2 size={18} className="text-zinc-600 absolute right-0 top-0" />
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg font-black">₹{item.price}</span>
                    <span className="text-xs text-zinc-500 line-through">₹{item.mrp || item.price * 1.5}</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <div className="bg-zinc-900 px-3 py-1 rounded text-xs border border-zinc-800">Size: {item.size || 'M'}</div>
                    <div className="bg-zinc-900 px-3 py-1 rounded text-xs border border-zinc-800">x{item.quantity}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- COUPONS --- */}
          <div className="mt-10 bg-zinc-900/40 p-4 rounded-2xl border border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-[#00A143]/20 p-2 rounded-full text-[#00A143] font-bold">%</div>
              <span className="text-sm font-bold">Log in to use coupons</span>
            </div>
            <ChevronRight size={18} className="text-zinc-500" />
          </div>

          {/* --- ORDER DETAILS --- */}
          <div className="mt-10 mb-20">
            <div className="flex justify-between items-center mb-4">
               <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Order Details</h3>
               <ChevronDown size={16} className="text-zinc-500" />
            </div>
            <div className="flex justify-between text-sm py-2">
              <span className="text-zinc-400">MRP Total</span>
              <span>₹{totalMRP.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* --- STICKY FOOTER (Fixed above BottomNavbar) --- */}
        <div className="fixed bottom-[65px] left-0 right-0 bg-black border-t border-zinc-900 px-5 py-4 flex items-center justify-between z-40 md:max-w-[450px] md:left-1/2 md:-translate-x-1/2">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black">₹{totalPrice.toLocaleString()}</span>
              <span className="text-xs text-zinc-500 line-through">₹{totalMRP.toLocaleString()}</span>
            </div>
            <button className="text-[10px] text-[#00A143] font-bold uppercase">View breakup</button>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="bg-[#00A143] text-white px-10 py-3 rounded-xl font-bold uppercase text-sm tracking-wide active:scale-95 transition-all"
          >
            Checkout
          </button>
        </div>
      </main>
    </>
  );
};

export default Cart;
