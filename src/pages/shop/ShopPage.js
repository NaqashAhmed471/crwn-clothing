import React, { useEffect } from "react";

import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import Collection from "../collection/Collection";

import { Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shopAction";

import {
  selectIsCollectionFetching,
  selectIsCollectionLoaded,
} from "../../redux/shop/shopSelectors";

import WithSpinner from "../../components/with-spinner/WithSpinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

const ShopPage = () => {
  const dispatch = useDispatch();

  const isCollectionFetching = useSelector(selectIsCollectionFetching);
  const isCollectionLoaded = useSelector(selectIsCollectionLoaded);

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, []);

  return (
    <div className="shopPage">
      <Routes>
        <Route
          path="/"
          element={
            <CollectionOverviewWithSpinner isLoading={isCollectionFetching} />
          }
        />
        <Route
          path=":collectionId"
          element={<CollectionWithSpinner isLoading={!isCollectionLoaded} />}
        />
      </Routes>
    </div>
  );
};

export default ShopPage;
