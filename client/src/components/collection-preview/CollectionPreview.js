import React from "react";

import CollectionItem from "../collection-item/CollectionItem";

import { makeStyles } from "@mui/styles";

import { useNavigate } from "react-router-dom";

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
      cursor: "pointer",
    },

    preview: {
      display: "flex",
      justifyContent: "space-between",
    },
  };
});

const CollectionPreview = ({ title: collectionTitle, items, routeName }) => {
  const { collectionPreview, title, preview } = useStyles();

  const navigate = useNavigate();

  return (
    <div className={collectionPreview}>
      <h1 className={title} onClick={() => navigate(`${routeName}`)}>
        {collectionTitle.toUpperCase()}
      </h1>
      <div className={preview}>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;

// title, items, history, match, routeName;
