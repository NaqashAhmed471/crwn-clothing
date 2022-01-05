import React from "react";

import { useParams } from "react-router-dom";

import { makeStyles } from "@mui/styles";

import CollectionItem from "../../components/collection-item/CollectionItem";

import { useSelector } from "react-redux";

import { selectCollection } from "../../redux/shop/shopSelectors";

const useStyles = makeStyles(() => {
  return {
    collectionPage: {
      display: "flex",
      flexDirection: "column",
    },

    collectionTitle: {
      fontSize: "38px",
      margin: "0 auto 30px",
    },

    collectionItems: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      gridGap: "10px",

      "& $collectionItem": {
        marginBottom: "30px",
      },
    },
  };
});

const Collection = () => {
  const { collectionPage, collectionTitle, collectionItems } = useStyles();

  let { collectionId } = useParams();

  const collection = useSelector(selectCollection(collectionId));

  const { title, items } = collection;

  return (
    <div className={collectionPage}>
      <h2 className={collectionTitle}>{title}</h2>
      <div className={collectionItems}>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} ismarginBottom />
        ))}
      </div>
    </div>
  );
};

export default Collection;
