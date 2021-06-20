import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import { Header } from "./Header";
import { Footer } from "./Footer";

import { useStyles } from "./Styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     minHeight: "100vh"
//   },
//   main: {
//     marginTop: theme.spacing(8),
//     marginBottom: theme.spacing(2)
//   },
//   footer: {
//     padding: theme.spacing(3, 2),
//     marginTop: "auto",
//     backgroundColor:
//       theme.palette.type === "light"
//         ? theme.palette.grey[200]
//         : theme.palette.grey[800]
//   }
// }));

console.log(useStyles);

const Layout = (props) => {
  const classes = useStyles();

  console.log("render: Layout component");
  console.log(classes.root);

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Header></Header>
        <Container component="main" className={classes.main} maxWidth="sm">
          {props.children}
        </Container>
        <Footer></Footer>
      </div>
    </>
  );
};

export { Layout };
