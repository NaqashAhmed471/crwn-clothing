import React from "react";

import { makeStyles } from "@mui/styles";


const useStyles = makeStyles(() => {
  return {
    collectionItem: {
      width: "22%",
      display: "flex",
      flexDirection: "column",
      height: "350px",
      alignItems: "center",
    },

    collItemImage: {
      width: "100%",
      height: "95%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      marginBottom: "5px",
      backgroundRepeat: "no-repeat",
    },

    collectionFooter: {
      width: "100%",
      height: "5%",
      display: "flex",
      justifyContent: "space-between",
      fontSize: "18px",
    },

    collItemName: {
      width: "90%",
      marginBottom: "15px",
    },

    collItemPrice: {
      width: "10%",
    },
  };
});

const CollectionItem = ({ id, name, imageUrl, price }) => {
  const {
    collectionItem,
    collItemImage,
    collectionFooter,
    collItemName,
    collItemPrice,
  } = useStyles();

  return (
    <div className={collectionItem}>
      <div
        className={collItemImage}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={collectionFooter}>
        <span className={collItemName}>{name}</span>
        <span className={collItemPrice}>{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
