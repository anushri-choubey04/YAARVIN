import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";
import PriceSummary from "./PriceSummary";

export default function CartDrawer() {
  const { cart } = useCart();

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl p-6">

      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      <div className="space-y-4">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <PriceSummary total={total} />
    </div>
  );
}
