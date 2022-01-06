import React, { useEffect } from "react";
import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Checkout from "./pages/checkout/Checkout";
import Header from "./components/header/Header";
import SignInAndUp from "./pages/signin-and-signup/SignInAndUp";

import { setCurrentUser } from "./redux/user/userAction";
import { selectCurrentUser } from "./redux/user/userSelectors";

import { useDispatch, useSelector } from "react-redux";

import {
  auth,
  createUserProfileDocument,
} from "../src/firebase/firebase.utils";

import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";

function App() {
  const dispatch = useDispatch();
  console.log("task2");
  const currentUser = useSelector(selectCurrentUser);
  console.log("currentUser", currentUser);

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userDoc = await createUserProfileDocument(userAuth);
        onSnapshot(userDoc, (doc) => {
          dispatch(
            setCurrentUser({
              id: doc.id,
              ...doc.data(),
            })
          );
        });
      } else {
        dispatch(setCurrentUser(userAuth));
      }
    });

    return () => {
      unsubAuth();
    };
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
