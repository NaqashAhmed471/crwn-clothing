import React from "react";

import CollectionItem from "../collection-item/CollectionItem";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    collectionPreview: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "30px",
    },

    title: {
      fontSize: "28px",
      marginBottom: "25px",
    },

    preview: {
      display: "flex",
      justifyContent: "space-between",
    },
  };
});

const CollectionPreview = ({ title: collectionTitle, items }) => {
  const { collectionPreview, title, preview } = useStyles();

  return (
    <div className={collectionPreview}>
      <h1 className={title}>{collectionTitle.toUpperCase()}</h1>
      <div className={preview}>
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
