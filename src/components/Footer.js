import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./Styles";

const Footer = (props) => {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Footer</Typography>
        </Container>
      </footer>
    </>
  );
};

export { Footer };
