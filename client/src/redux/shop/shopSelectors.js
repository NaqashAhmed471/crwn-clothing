import { createSelector } from "reselect";

const selectShop = (state) => state.shopReducer;

export const selectCollections = createSelector(
  [selectShop],
  (shopReducer) => shopReducer.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shopReducer) => shopReducer.isFetching
);

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  (shopReducer) => !!shopReducer.collections
);
