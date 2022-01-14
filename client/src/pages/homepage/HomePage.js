import React from "react";

import { makeStyles } from "@mui/styles";

import Directory from "../../components/directory/Directory";

const useStyles = makeStyles(() => {
  return {
    homePage: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px 80px",
    },
  };
});

const HomePage = () => {
  const { homePage } = useStyles();

  return (
    <div className={homePage}>
      <Directory />
    </div>
  );
};

export default HomePage;
