import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
const useSytles = makeStyles((theme) => ({
  TeamNameContainer: {
    flex: 1,
  },
  button: {
    marginRight: "20px",
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}));
const Header = (props) => {
  const classes = useSytles();
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h3" className={classes.TeamNameContainer}>
            EmoTex
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Sign In
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </>
  );
};
export default Header;
