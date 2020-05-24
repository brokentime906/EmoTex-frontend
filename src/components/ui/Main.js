import React from "react";
import { Grid, Input } from "@material-ui/core";
import DropInput from "../DropInput";
import InputImage from "../InputImage";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 0,
  },
}));
const Main = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.container}>
        <Grid item xs={0} sm={2} />
        <Grid item container xs={12} sm={8}>
          <InputImage />
        </Grid>

        <Grid item xs={0} sm={2} />
      </Grid>
    </>
  );
};
export default Main;
