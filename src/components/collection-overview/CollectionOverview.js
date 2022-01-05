import React from "react";

import { makeStyles } from "@mui/styles";

import CollectionPreview from "../collection-preview/CollectionPreview";

import { selectCollectionsForPreview } from "../../redux/shop/shopSelectors";

import { useSelector } from "react-redux";

const useStyles = makeStyles(() => {
  return {
    collectionOverview: {
      display: "flex",
      flexDirection: "column",
    },
  };
});

const CollectionOverview = () => {
  const { collectionOverview } = useStyles();

  const collection = useSelector(selectCollectionsForPreview);
  return (
    <div className={collectionOverview}>
      {collection.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

export default CollectionOverview;
