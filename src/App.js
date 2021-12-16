import "./App.css";

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/"  element={<HomePage />} />
        <Route path="/shop"  element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
