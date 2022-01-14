import React, { useEffect } from "react";
import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Checkout from "./pages/checkout/Checkout";
import Header from "./components/header/Header";
import SignInAndUp from "./pages/signin-and-signup/SignInAndUp";

import { selectCurrentUser } from "./redux/user/userSelectors";

import { checkUserSession } from "./redux/user/userAction";

import { useDispatch, useSelector } from "react-redux";

function App() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/signin"
          element={currentUser ? <Navigate to="/" /> : <SignInAndUp />}
        />
      </Routes>
    </div>
  );
}

export default App;
