import React from "react";

import { makeStyles } from "@mui/styles";

import CustomButton from "../custom-button/CustomButton";

import { addItem } from "../../redux/cart/cartAction";

import { useDispatch } from "react-redux";

const useStyles = makeStyles(() => {
  return {
    collectionItem: {
      width: "22vw",
      display: "flex",
      flexDirection: "column",
      height: "350px",
      alignItems: "center",
      position: "relative",

      "&:hover": {
        "& $collItemImage": {
          opacity: "0.8",
        },
        "& button": {
          opacity: "0.85",
          display: "flex",
        },
      },
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

    marginBottom: {
      marginBottom: "30px",
    },
  };
});

const CollectionItem = ({ item, ismarginBottom }) => {
  const {
    collectionItem,
    collItemImage,
    collectionFooter,
    collItemName,
    collItemPrice,
    marginBottom,
  } = useStyles();

  const { name, imageUrl, price } = item;

  const dispatch = useDispatch();

  return (
    <div className={`${ismarginBottom ? marginBottom : ""} ${collectionItem}`}>
      <div
        className={collItemImage}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={collectionFooter}>
        <span className={collItemName}>{name}</span>
        <span className={collItemPrice}>{price}</span>
      </div>
      <CustomButton isInverted onClick={() => dispatch(addItem(item))}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
