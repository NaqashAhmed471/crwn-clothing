import React from "react";

import { makeStyles } from "@mui/styles";

import MenuItem from "../menu-item/MenuItem";

import { selectDirectorySections } from "../../redux/directory/directorySelectors";

import { useSelector } from "react-redux";

const useStyles = makeStyles(() => {
  return {
    directoryMenu: {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
  };
});

const Directory = () => {
  const { directoryMenu } = useStyles();

  const sections = useSelector(selectDirectorySections);

  return (
    <div className={directoryMenu}>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
