import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IconButton, Input, Button, Rating } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

import {
  generateDiscountedPrice,
  calculateDiscount,
  dispalyMoney,
} from "../DisplayMoney/DisplayMoney";

import { clearErrors, getProductDetails } from "../../actions/productAction";
import { addItemsToCart } from "../../actions/cartAction";
import { PRODUCT_DETAILS_RESET } from "../../constants/productConstants";

import ReviewCard from "./ReviewCard";
import MetaData from "../layout/MetaData";
import CricketBallLoader from "../layout/Loader";

import useActive from "../../hooks/useActive";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [previewImg, setPreviewImg] = useState("");
  const { handleActive } = useActive(0);

  const { product, loading, error, success } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (success && product) {
      setPreviewImg(product.images[0]?.url);
      handleActive(0);
      dispatch({ type: PRODUCT_DETAILS_RESET });
    }
    dispatch(getProductDetails(id));
    // eslint-disable-next-line
  }, [dispatch, error, success, id]);

  const increaseQuantityHandler = () => {
    if (!product || quantity >= product.Stock) return;
    setQuantity(quantity + 1);
  };

  const decreaseQuantityHandler = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };

  const handleAddItem = () => {
    dispatch(addItemsToCart(id, quantity));
    toast.success("Item Added To Cart");
  };

  const handlePreviewImg = (images, i) => {
    setPreviewImg(images[i]?.url);
    handleActive(i);
  };

  const finalPrice = generateDiscountedPrice(product?.price);
  const discountedPrice = product?.price - finalPrice;
  const newPrice = dispalyMoney(finalPrice);
  const oldPrice = dispalyMoney(product?.price);
  const savedPrice = dispalyMoney(discountedPrice);
  const savedDiscount = calculateDiscount(discountedPrice, product?.price);

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      {loading ? (
        <CricketBallLoader />
      ) : (
        <>
          <MetaData title={product?.name} />
          <div className="min-h-screen bg-gray-900 text-white px-4 md:px-12 py-6">
            <div className="flex items-center mb-4">
              <Button
                onClick={() => window.history.back()}
                variant="contained"
                sx={{ bgcolor: "blue", "&:hover": { bgcolor: "darkblue" } }}
              >
                Back
              </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              {/* LEFT - IMAGES */}
              <div className="md:w-1/2 flex flex-col md:flex-row gap-4">
                {/* Thumbnails */}
                <div className="flex md:flex-col gap-3">
                  {product?.images?.map((img, i) => (
                    <img
                      key={i}
                      src={img.url}
                      alt={`thumb-${i}`}
                      className={`w-20 h-20 md:w-24 md:h-24 rounded-lg cursor-pointer border-2 transition-all ${
                        previewImg === img.url
                          ? "border-blue-500 scale-105"
                          : "border-gray-700 hover:border-blue-500"
                      }`}
                      onClick={() => handlePreviewImg(product.images, i)}
                    />
                  ))}
                </div>

                {/* Main Preview */}
                <div className="flex-1 relative">
                  <img
                    src={previewImg}
                    alt="product-preview"
                    className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-lg"
                  />
                  {product?.Stock > 0 ? (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-green-600 flex items-center gap-1 text-sm">
                      <DoneIcon fontSize="small" /> In Stock
                    </span>
                  ) : (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-red-600 flex items-center gap-1 text-sm">
                      <CloseIcon fontSize="small" /> Out of stock
                    </span>
                  )}
                </div>
              </div>

              {/* RIGHT - DETAILS */}
              <div className="md:w-1/2 flex flex-col gap-4">
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  {product?.name}
                </h1>
                <p className="text-gray-400">{product?.info}</p>

                {/* Ratings */}
                <div className="flex items-center gap-2">
                  <Rating
                    value={product?.ratings || 0}
                    precision={0.5}
                    readOnly
                    sx={{ color: "blue", fontSize: 20 }}
                  />
                  <span>|</span>
                  <Link to="#" className="text-blue-400">
                    {product?.numOfReviews} Ratings
                  </Link>
                </div>

                {/* Price */}
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h2 className="text-2xl font-bold text-white">
                    {newPrice}{" "}
                    <span className="text-gray-400 line-through text-lg">
                      {oldPrice}
                    </span>
                  </h2>
                  <p className="text-blue-400">
                    You save: {savedPrice} ({savedDiscount}%)
                  </p>
                  <span className="text-gray-500 text-sm">
                    (Inclusive of all taxes)
                  </span>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-4">
                  <h5>Quantity:</h5>
                  <IconButton
                    onClick={decreaseQuantityHandler}
                    sx={{ color: "white", border: "1px solid gray" }}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <Input
                    value={quantity}
                    readOnly
                    sx={{
                      width: 50,
                      color: "white",
                      textAlign: "center",
                      border: "1px solid gray",
                      borderRadius: 1,
                    }}
                  />
                  <IconButton
                    onClick={increaseQuantityHandler}
                    sx={{ color: "white", border: "1px solid gray" }}
                  >
                    <AddIcon />
                  </IconButton>
                </div>

                {/* Add to Cart */}
                <Button
                  variant="contained"
                  onClick={handleAddItem}
                  disabled={product?.Stock <= 0}
                  sx={{
                    bgcolor: "blue",
                    "&:hover": { bgcolor: "darkblue" },
                    mt: 2,
                  }}
                >
                  Add to Cart
                </Button>

                {/* Description */}
                <div className="bg-gray-800 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-white mb-2">Description:</h4>
                  <p className="text-gray-300">{product?.description}</p>
                </div>

                {/* Offers */}
                <div className="bg-gray-800 p-4 rounded-lg mt-2">
                  <h4 className="font-semibold text-white mb-2">
                    Offers & Discounts
                  </h4>
                  <ul className="text-gray-300 list-disc list-inside">
                    <li>No Cost EMI on Credit Card</li>
                    <li>Pay Later & Avail Cashback</li>
                  </ul>
                </div>

                {/* Delivery */}
                <div className="flex items-center gap-2 text-gray-300 mt-2">
                  <LocalShippingOutlinedIcon />
                  We deliver! Just say when and how.
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="mt-8">
              <ReviewCard product={product} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
