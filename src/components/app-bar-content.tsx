import { Box, Button, Heading } from "grommet";
import React from "react";
import { Notification } from "grommet-icons";
import { Link, NavLink } from "react-router-dom";

export const AppBarContent = () => (
  <>
    <Heading level="3" margin="none">
      Thomas Walker
    </Heading>
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/Experience">Experience</NavLink>
    </div>
  </>
);
