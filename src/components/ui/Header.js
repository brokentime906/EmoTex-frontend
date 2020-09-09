import React from "react";
import {
  AppBar,
  SvgIcon,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { withRouter } from "react-router-dom";
const useSytles = makeStyles((theme) => ({
  TeamNameContainer: {
    flex: 1,
  },
  button: {
    marginRight: "20px",
  },
  home: {
    marginRight: 60,
    // fontSize: 40,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}));
const Header = withRouter((props) => {
  const classes = useSytles();

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h4" className={classes.TeamNameContainer}>
            EmoTex
          </Typography>
          <Button
            variant="contained"
            className={classes.home}
            startIcon={<HomeIcon />}
            onClick={(e) => {
              e.preventDefault();
              props.history.push("/");
            }}
          >
            Home
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={(e) => {
              e.preventDefault();
              props.history.push("/login");
            }}
          >
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </>
  );
});
export default Header;
