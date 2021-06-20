import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";

import { useStyles } from "./Styles";

const LinkWrap = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}>
            Company name
          </Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              to="/"
              component={LinkWrap}
              className={classes.link}>
              Top
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              to="/pages/sample1"
              component={LinkWrap}
              className={classes.link}>
              Sample1
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              to="/pages/sample2"
              component={LinkWrap}
              className={classes.link}>
              Sample2
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
};

export { Header };
