import React from "react";

import CollectionPreview from "../../components/collection-preview/CollectionPreview";

import SHOP_DATA from "./ShopData";

const ShopPage = () => {
  const collection = SHOP_DATA;
  return (
    <div className="shopPage">
      {collection.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

export default ShopPage;
