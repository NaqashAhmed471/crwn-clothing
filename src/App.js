import "./App.css";

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/shop" exact element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
