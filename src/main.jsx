import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App.jsx";
import store from "./store";
import { SnackbarProvider } from "notistack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuthProvider from "./context/AuthContext";
import { WishlistProvider } from "./context/WishlistContext";

const theme = createTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <SnackbarProvider
          maxSnack={2}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <Router  basename="/YAARVIN">
            <AuthProvider>
              <WishlistProvider>
              <App />
              </WishlistProvider>
            </AuthProvider>
          </Router>
        </SnackbarProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
