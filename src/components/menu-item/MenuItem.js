import React from "react";

import { useNavigate } from "react-router-dom";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    menuItem: {
      minWidth: "30%",
      height: "240px",
      flex: "1 1 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid black",
      margin: "0 7.5px 15px",
      overflow: "hidden",

      "&:hover": {
        cursor: "pointer",
        "& $menuItemImage": {
          transform: "scale(1.1)",
          transition: "transform 6s cubic-bezier(0.25 , 0.45 , 0.45, 0.95)",
        },
        "& $content": {
          opacity: "0.9",
        },
      },

      "&.large": {
        height: "380px",
      },

      "&:first-child": {
        marginRight: "7.5px",
      },

      "&:last-child": {
        marginLeft: "7.5px",
      },
    },

    menuItemImage: {
      width: "100%",
      height: "100%",
      backgroundPosition: "center",
      backgroundSize: "cover",
    },

    content: {
      height: "90px",
      padding: "0 25px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid black",
      backgroundColor: "white",
      opacity: "0.7",
      position: "absolute",
    },

    title: {
      fontWeight: "bold",
      marginBottom: "6px",
      fontSize: "22px",
      color: "#4a4a4a",
    },

    subTitle: {
      fontWeight: "lighter",
      fontSize: "16px",
    },
  };
});

const MenuItem = ({ title: menuTitle, imageUrl, size, linkUrl }) => {
  const { menuItem, content, title, subTitle, menuItemImage } = useStyles();

  const navigate = useNavigate();

  return (
    <div
      className={`${size} ${menuItem}`}
      onClick={() => navigate(`/${linkUrl}`)}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={menuItemImage}
      />
      <div className={content}>
        <h1 className={title}>{menuTitle.toUpperCase()}</h1>
        <span className={subTitle}>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
