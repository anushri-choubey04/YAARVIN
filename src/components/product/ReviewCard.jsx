import React, { useState, lazy, Suspense } from "react";
import {
  Typography,
  Grid,
  Select,
  MenuItem,
  Button,
  Paper,
  Avatar,
  Divider,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import CricketBallLoader from "../layout/Loader";
import { useStyles } from "./ReviewStyle";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DialogBox = lazy(() => import("./DialogBox"));

/* ------------------ REVIEW CARD ------------------ */
const MyCard = ({ review }) => (
  <Paper
    elevation={0}
    sx={{
      p: 2,
      borderRadius: "16px",
      border: "1px solid #eee",
      background: "#fff",
    }}
  >
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Avatar sx={{ bgcolor: "#111", color: "#fff" }}>
          {review.name?.[0] || "U"}
        </Avatar>
      </Grid>

      <Grid item xs>
        <Typography fontWeight={600} fontSize={14}>
          {review.name || "Verified User"}
        </Typography>

        <Rating
          value={review.rating}
          size="small"
          precision={0.5}
          readOnly
        />
      </Grid>
    </Grid>

    <Typography
      variant="body2"
      sx={{ mt: 1.5, color: "#555", lineHeight: 1.6 }}
    >
      {review.comment}
    </Typography>

    <Typography
      variant="caption"
      sx={{ display: "block", mt: 1, color: "#999" }}
    >
      ✔ Verified Rental
    </Typography>
  </Paper>
);

/* ------------------ MAIN COMPONENT ------------------ */
const ReviewCard = ({ product }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.userData) || {};
  const isAuthenticated = userData.isAuthenticated || false;

  const [sortValue, setSortValue] = useState("highest");
  const [open, setOpen] = useState(false);

  const handleSortChange = (e) => setSortValue(e.target.value);

  const handleClickOpen = () => {
    if (!isAuthenticated) {
      toast.info("Login required to write a review");
      navigate("/login");
      return;
    }
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <section className={classes.reviewRoot} >
      <ToastContainer />

      {/* HEADER */}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 3 }}
      >
        <Typography variant="h5" fontWeight={700}>
          Customer Reviews
        </Typography>

        <Button
          variant="contained"
          onClick={handleClickOpen}
          sx={{
            borderRadius: "999px",
            textTransform: "none",
            px: 3,
            background: "#111",
            "&:hover": { background: "#000" },
          }}
        >
          ✍ Write Review
        </Button>
      </Grid>

      {/* DIALOG */}
      <Suspense fallback={<CricketBallLoader />}>
        <DialogBox open={open} handleClose={handleClose} />
      </Suspense>

      {/* RATING SUMMARY */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: "20px",
          background: "#fafafa",
          mb: 3,
        }}
      >
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="h3" fontWeight={700}>
              {product?.ratings || 0}
            </Typography>
          </Grid>

          <Grid item>
            <Rating
              value={product?.ratings}
              precision={0.5}
              readOnly
            />
            <Typography variant="body2" color="text.secondary">
              {product?.numOfReviews || 0} verified rentals
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* SORT */}
      <Grid
        container
        justifyContent="flex-end"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Typography variant="body2" sx={{ mr: 1, color: "#777" }}>
          Sort by
        </Typography>

        <Select
          value={sortValue}
          size="small"
          onChange={handleSortChange}
          sx={{ borderRadius: "999px" }}
        >
          <MenuItem value="highest">Highest Rated</MenuItem>
          <MenuItem value="lowest">Lowest Rated</MenuItem>
          <MenuItem value="latest">Latest</MenuItem>
          <MenuItem value="oldest">Oldest</MenuItem>
        </Select>
      </Grid>

      <Divider sx={{ mb: 3 }} />

      {/* REVIEWS LIST */}
      <Grid container spacing={2}>
        {product?.reviews?.length ? (
          product.reviews.map((review, i) => (
            <Grid item xs={12} md={6} key={i}>
              <MyCard review={review} />
            </Grid>
          ))
        ) : (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mx: "auto", mt: 4 }}
          >
            No reviews yet. Be the first to rent & review ✨
          </Typography>
        )}
      </Grid>
    </section>
  );
};

export default ReviewCard;
