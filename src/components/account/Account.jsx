import { useNavigate } from "react-router-dom";
import AccountCard from "./AccountCard";
import AccountItem from "./AccountItem";
import { useAuth } from "../../hooks/useAuth";
import {
  Person,
  Settings,
  ShoppingBag,
  Storefront,
  AccountBalanceWallet,
  AssignmentReturn,
  VerifiedUser,
  HelpOutline,
  Logout,
} from "@mui/icons-material";

export default function Account() {
  const navigate = useNavigate();
  const {user} = useAuth();


  return (
    <section className="min-h-screen bg-black pb-24 ">
      {/* ===== PROFILE HEADER ===== */}
      <div className="bg-gradient-to-r from-black to-blue-800 p-6 shadow-sm items-center  text-center">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white  md:text-xl"
        >
          <i className="fas fa-arrow-left" />
        </button>
        <h1 className="text-4xl text-gray-200 font-bold">Hello, {user?.name || "Guest"}👋</h1>
        

        <button
          onClick={() => navigate("/profile")}
          className="mt-6 px-4 py-2 bg-white text-black rounded-xl text-sm font-semibold"
        >
          View / Edit Profile
        </button>
      </div>

      {/* ===== ACCOUNT CONTENT ===== */}
      <div className="px-4 mt-6  space-y-6  md:mx-12 overflow-hidden">
        {/* MY RENTALS */}
        <AccountCard title="My Rentals">
          <AccountItem
            icon={<Settings />}
            title="Rental Details"
            subtitle=""
            onClick={() => navigate("/rentals/:id")}
          />

          <AccountItem
            icon={<ShoppingBag />}
            title="Active Rentals"
            subtitle="Outfits currently with you"
            onClick={() => navigate("/rentals/active")}
          />
          <AccountItem
            icon={<AssignmentReturn />}
            title="Upcoming Returns"
            subtitle="Avoid late return charges"
            onClick={() => navigate("/rentals/returns")}
          />
          <AccountItem
            icon={<VerifiedUser />}
            title="Security Deposit & Charges"
            subtitle="Deposit, damages & late fees"
            onClick={() => navigate("/rentals/deposit")}
          />
        </AccountCard>

        {/* MY CLOSET (P2P POWER FEATURE) */}
        <AccountCard title="My Closet (Rent Your Clothes)">
          <AccountItem
            icon={<Storefront />}
            title="My Listed Outfits"
            subtitle="View & manage your clothes"
            onClick={() => navigate("/closet")}
          />
          <AccountItem
            icon={<ShoppingBag />}
            title="Upload New Outfit"
            subtitle="Add clothes to rent out"
            onClick={() => navigate("/closet/upload")}
          />
          <AccountItem
            icon={<AssignmentReturn />}
            title="Rental Requests"
            subtitle="Approve or reject requests"
            onClick={() => navigate("/closet/requests")}
          />
          <AccountItem
            icon={<AccountBalanceWallet />}
            title="Earnings"
            subtitle="Track rental income"
            onClick={() => navigate("/closet/earnings")}
          />
        </AccountCard>

        {/* WALLET */}
        <AccountCard title="Wallet">
          <AccountItem
            icon={<ShoppingBag />}
            title="Renter Wallet"
            subtitle="Deposits, refunds & charges"
            onClick={() => navigate("/wallet/renter")}
          />

          <AccountItem
            icon={<Storefront />}
            title="Lender Wallet"
            subtitle="Earnings & pending payouts"
            onClick={() => navigate("/wallet/lender")}
          />
        </AccountCard>

        {/* SUPPORT & POLICIES */}
        <AccountCard title="Support & Policies">
          {/* FOR RENTERS */}
          <AccountItem
            icon={<ShoppingBag />}
            title="For Renters"
            subtitle="Renting, returns & refunds"
            onClick={() => navigate("/help/renter")}
          />

          {/* FOR LENDERS */}
          <AccountItem
            icon={<Storefront />}
            title="For Lenders"
            subtitle="Listing, payouts & claims"
            onClick={() => navigate("/help/lender")}
          />

          {/* GENERAL SUPPORT */}
          <AccountItem
            icon={<HelpOutline />}
            title="Customer Support"
            subtitle="Talk to our support team"
            onClick={() => navigate("/contact")}
          />

          <AccountItem
            icon={<VerifiedUser />}
            title="Report Your Problems"
            subtitle="Security, verification & dispute issues"
            onClick={() => navigate("/help/report")}
          />
        </AccountCard>

        {/* LOGOUT */}
        <div className="bg-white rounded-xl shadow-sm">
          <AccountItem
            icon={<Logout />}
            title="Logout"
            danger
            onClick={() => {
              // clear auth + redirect
              localStorage.clear();
              navigate("/login");
            }}
          />
        </div>
      </div>
    </section>
  );
}
