import { Box } from "grommet";
import React from "react";

export const AppBar = (props: any) => (
  <Box
    tag="header"
    direction="row"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);
