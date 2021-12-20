import React, { useState, useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SignInAndUp from "./pages/signin-and-signup/SignInAndUp";

import { auth } from "../src/firebase/firebase.utils";

import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(currentUser);
    });
    return () => {
      unsubAuth();
    };
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignInAndUp />} />
      </Routes>
    </div>
  );
}

export default App;
