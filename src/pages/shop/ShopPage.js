import React from "react";

import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import Collection from "../collection/Collection";

import { Routes, Route } from "react-router-dom";

const ShopPage = () => {
  return (
    <div className="shopPage">
      <Routes>
        <Route path="/" element={<CollectionOverview />} />
        <Route path=":collectionId" exact element={<Collection />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
