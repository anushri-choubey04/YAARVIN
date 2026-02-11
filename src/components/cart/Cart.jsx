import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MetaData from "../layout/MetaData";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import PriceSidebar from "./PriceSidebar";
import SaveForLaterItem from "./SaveForLaterItem";


const Cart = () => {

  const navigate = useNavigate();

  const { cartItems = [] } = useSelector((state) => state.cart || {});
  const { saveForLaterItems = [] } = useSelector(
    (state) => state.saveForLater || {}
  );

  const placeOrderHandler = () => {
    navigate("/login?redirect=shipping");
  };

  return (
    <>
      <MetaData title="Shopping Cart" />

      {/* add margin so content stays BELOW navbar */}
      <main className="w-full mt-2 sm:mt-28 px-2 sm:px-6">

        <div className="flex flex-col lg:flex-row gap-4 w-full max-w-6xl mx-auto mb-10">

          {/* ---------- LEFT SIDE : CART ITEMS ---------- */}
          <div className="flex-1">

            <div className="bg-white shadow rounded">

              <span className="font-semibold text-lg px-4 py-3 border-b block">
                My Cart ({cartItems.length})
              </span>

              {/* Empty Cart */}
              {cartItems.length === 0 && <EmptyCart />}

              {/* List Items */}
              {cartItems.map((item) => (
                <CartItem key={item.product} {...item} inCart={true} />
              ))}

              {/* PLACE ORDER BUTTON */}
              <div className="p-4 flex justify-end">
                <button
                  onClick={placeOrderHandler}
                  disabled={cartItems.length < 1}
                  className={`${
                    cartItems.length < 1
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-orange-500 hover:bg-orange-600"
                  } w-full sm:w-1/3 text-white py-3 rounded font-semibold`}
                >
                  PLACE ORDER
                </button>
              </div>

            </div>

            {/* ---------- SAVE FOR LATER ---------- */}
            <div className="bg-white shadow rounded mt-5">
              <span className="font-semibold text-lg px-4 py-3 border-b block">
                Saved For Later ({saveForLaterItems.length})
              </span>

              {saveForLaterItems.length === 0 && (
                <p className="p-4 text-gray-500">No saved items</p>
              )}

              {saveForLaterItems.map((item) => (
                <SaveForLaterItem key={item.product} {...item} />
              ))}
            </div>

          </div>

          {/* ---------- RIGHT SIDE : PRICE BOX ---------- */}
          <div className="w-full lg:w-1/3">
            <PriceSidebar cartItems={cartItems} />
          </div>

        </div>
      </main>
    </>
  );
};

export default Cart;
