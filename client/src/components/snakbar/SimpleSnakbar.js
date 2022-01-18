import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Snackbar } from "@mui/material";

import * as React from "react";

const SimpleSnakbar = ({ open, handler }) => {
  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handler}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={6000}
      onClose={handler}
      message="Signin First "
      action={action}
    />
  );
};

export default SimpleSnakbar;
