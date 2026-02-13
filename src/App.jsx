import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
//import { useDispatch } from "react-redux";
//import { loadUser } from "./actions/userActions";

import Login from "./components/auth/LoginForm";
import Register from "./components/auth/RegisterForm";
/* ===== LAYOUT ===== */
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BottomNavbar from "./components/layout/BottomNavbar";
import Loader from "./components/layout/Loader";

import OccasionGrid from "./pages/OccasionSection/OccasionGrid.jsx";

import HeroDetails from "./pages/HeroSection/HeroDetails.jsx";

import Rent from "./pages/HowItWorks/Rent";
import Earn from "./pages/HowItWorks/Earn";
import Delivery from "./pages/HowItWorks/Delivery";

import QuickViewGrid from "./pages/QuickViewGrid";

import VideoGrid from "./pages/VideoSection/VideoGrid.jsx";

import PriceGrid from "./pages/PriceSection/PriceGrid.jsx";

import Wishlist from "./pages/Wishlist";
import SearchPage from "./pages/SearchPage";


import FAQsPage from "./pages/FAQsPage";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";

import Contact from "./pages/Contact/Contact.jsx";
import PrivacyPolicy from "./pages/Policies/PrivacyPolicy.jsx";
import CancellationPolicy from "./pages/Policies/CancellationPolicy.jsx";

import ProductPage from "./components/product/ProductPage";

/* ==== Account ==== */
import Account from "./components/account/Account";

/* ===== RENTALS ===== */
import ActiveRentals from "./pages/rentals/ActiveRentals";
import RentalDetails from "./pages/rentals/RentalDetails";
import Returns from "./pages/rentals/Returns";
import Deposit from "./pages/rentals/Deposit";

/*===== CLOSET====*/
import MyCloset from "./pages/closet/MyCloset";
import UploadOutfit from "./pages/closet/UploadOutfit";
import OutfitSuccess from "./pages/closet/OutfitSuccess.jsx";
import ClosetRequests from "./pages/closet/ClosetRequests";
import ClosetEarnings from "./pages/closet/ClosetEarnings";

/*====Wallet====*/
import RenterWallet from "./pages/wallet/RenterWallet.jsx";
import LenderWallet from "./pages/wallet/LenderWallet.jsx";

/* ====Help==== */
import RenterSupport from "./pages/help/RenterSupport.jsx";
import LenderSupport from "./pages/help/LenderSupport.jsx";
import ReportProblem from "./pages/help/ReportProblem.jsx";

/* ===Category=== */
import CategorySection from "./pages/category/CategorySection.jsx";

import AuthModal from "./components/auth/AuthModal";
import CartDrawer from "./components/cart/CartDrawer";
import Cart from "./components/cart/Cart";

/* === Product === */
import ProductDetails from "./components/product/ProductDetails";
import SingleProductPage from "./components/product/SingleProductPage";

import { CartProvider } from "./context/CartContext";

function App() {
  //const dispatch = useDispatch();
  
  const [showAuth, setShowAuth] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [loading, setLoading] = useState(() => {
    // if user already visited, don't show loader
    return !sessionStorage.getItem("visited");
  });

  useEffect(() => {
    if (!loading) return;

    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
      sessionStorage.setItem("visited", "true"); // mark as visited
    }, 2500); // match your loader animation duration

    return () => clearTimeout(timer);
  }, [loading]);

 // useEffect(() => {
 //  dispatch(loadUser());
    // getStripeApiKey();
 // }, [dispatch]);
  

 useEffect(() => {
  window.scrollTo(0, 0); // instant, no animation
}, []);

  

  useEffect(() => {
    document.body.style.overflow =
      showAuth || showCart || mobileMenu ? "hidden" : "auto";
  }, [showAuth, showCart, mobileMenu]);

  return (
    <CartProvider>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ToastContainer position="top-right" autoClose={3000} />
          <div className="min-h-screen flex flex-col relative  pb-16 md:pb-0 bg-black">
            {/* Navbar always on top */}
            <Navbar
              onLoginClick={() => setShowAuth(true)}
              onCartOpen={() => setShowCart(true)}
              onMobileMenuOpen={() => setMobileMenu(true)}
            />

            {/* Main Content */}
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/heroDetails" element={<HeroDetails />} />

                <Route path="/occasion/:slug" element={<OccasionGrid />} />

                <Route path="/lend" element={<Earn />} />
                <Route path="/rent" element={<Rent />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/delivery" element={<Delivery />} />

                <Route
                  path="/quick-view/:quickId"
                  element={<QuickViewGrid />}
                />

                <Route
                  path="/pricesection/:priceRange"
                  element={<PriceGrid />}
                />

                <Route path="/videos" element={<VideoGrid />} />

                <Route path="/faqs" element={<FAQsPage />} />

                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route
                  path="/cancellation-policy"
                  element={<CancellationPolicy />}
                />

                <Route path="/account" element={<Account />} />

                <Route path="/rentals/active" element={<ActiveRentals />} />
                <Route path="/rentals/:id" element={<RentalDetails />} />
                <Route path="/rentals/returns" element={<Returns />} />
                <Route path="/rentals/deposit" element={<Deposit />} />

                <Route path="/closet" element={<MyCloset />} />
                <Route path="/closet/upload" element={<UploadOutfit />} />
                <Route path="/closet/success" element={<OutfitSuccess />} />
                <Route path="/closet/requests" element={<ClosetRequests />} />
                <Route path="/closet/earnings" element={<ClosetEarnings />} />

                <Route path="/wallet/renter" element={<RenterWallet />} />
                <Route path="/wallet/lender" element={<LenderWallet />} />

                <Route path="/help/renter" element={<RenterSupport />} />
                <Route path="/help/lender" element={<LenderSupport />} />
                <Route path="/help/report" element={<ReportProblem />} />

                <Route path="/categories" element={<CategorySection />} />

                <Route path="/products" element={<ProductPage />} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route
                  path="/single-product/:id"
                  element={<SingleProductPage />}
                />

                <Route path="/search" element={<SearchPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
            </main>

            {/* Footer */}
            <Footer />

            {/* Bottom Navbar */}
            <BottomNavbar />

            {/* Modals */}
            {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
            {showCart && <CartDrawer onClose={() => setShowCart(false)} />}
            {mobileMenu && <MobileMenu onClose={() => setMobileMenu(false)} />}
          </div>
        </>
      )}
    </CartProvider>
  );
}

export default App;
