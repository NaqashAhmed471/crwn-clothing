import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    homePage: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px 80px",
    },
    directoryMenu: {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    menuItem: {
      minWidth: "30%",
      height: "240px",
      flex: "1 1 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid black",
      margin: "0 7.5px 15px",
      "&:first-child": {
        marginRight: "7.5px",
      },
      "&:last-child": {
        marginLeft: "7.5px",
      },
    },
    content: {
      height: "90px",
      padding: "0 25px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid black",
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

const HomePage = () => {
  const { homePage, directoryMenu, menuItem, content, title, subTitle } =
    useStyles();

  return (
    <div className={homePage}>
      <div className={directoryMenu}>
        <div className={menuItem}>
          <div className={content}>
            <h1 className={title}>HATS</h1>
            <span className={subTitle}>SHOP NOW</span>
          </div>
        </div>
        <div className={menuItem}>
          <div className={content}>
            <h1 className={title}>JACKETS</h1>
            <span className={subTitle}>SHOP NOW</span>
          </div>
        </div>
        <div className={menuItem}>
          <div className={content}>
            <h1 className={title}>SNEAKERS</h1>
            <span className={subTitle}>SHOP NOW</span>
          </div>
        </div>
        <div className={menuItem}>
          <div className={content}>
            <h1 className={title}>WOMENS</h1>
            <span className={subTitle}>SHOP NOW</span>
          </div>
        </div>
        <div className={menuItem}>
          <div className={content}>
            <h1 className={title}>MENS</h1>
            <span className={subTitle}>SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
