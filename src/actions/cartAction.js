import axios from "axios";
import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART, SAVE_SHIPPING_INFO } from "../constants/cartConstants.js";
import { toast } from "react-toastify"; // <- for notifications
import "react-toastify/dist/ReactToastify.css";

// add to cart
export const addItemsToCart = (id, quantity = 1) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/v1/product/${id}`);

    

    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: data.product._id,
        name: data.product.name,
        seller: data.product.brand?.name || "",
        price: data.product.price,
        cuttedPrice: data.product.cuttedPrice,
        image: data.product.images?.[0]?.url || "",
        stock: data.product.stock,
        quantity,
      },
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));

    toast.success("Item added to cart!");
  } catch (error) {
    console.error("Error adding item to cart:", error);
    toast.error("Something went wrong while adding item to cart");
  }
};


// remove cart item
export const removeItemsFromCart = (id) => async (dispatch, getState) => {

    dispatch({
        type: REMOVE_FROM_CART,
        payload: id,
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

// empty cart
export const emptyCart = () => async (dispatch, getState) => {

    dispatch({ type: EMPTY_CART });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

// save shipping info
export const saveShippingInfo = (data) => async (dispatch) => {

    dispatch({
        type: SAVE_SHIPPING_INFO,
        payload: data,
    });

    localStorage.setItem('shippingInfo', JSON.stringify(data));
}