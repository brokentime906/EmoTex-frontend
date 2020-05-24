import React, { useState } from "react";
import { makeStyles, Paper } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Videocam from "@material-ui/icons/Videocam";
const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
  container: {
    margin: 0,
    marginTop: "40px",
    height: "60vh",
    width: "60vw",
    display: "flex",
    justifyContent: "center",
    paddingTop: "20px",
  },
}));

const InputImage = (props) => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const classes = useStyles();
  const handleCapture = ({ target }) => {
    const fileReader = new FileReader();
    const name = target.accept.includes("s") ? "images" : "videos";

    fileReader.readAsDataURL(target.files[0]);
    fileReader.onload = (e) => {
      if (name === "images") {
        setImages((prevState) => [...prevState, e.tartget.result]);
      } else {
        setVideos((prevState) => [...prevState, e.tartget.result]);
      }
    };
  };

  return (
    <Paper elevation={10} className={classes.container}>
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-photo"
        onChange={handleCapture}
        type="file"
      />
      <label htmlFor="icon-button-photo">
        <IconButton color="primary" component="span">
          <PhotoCamera />
        </IconButton>
      </label>

      <input
        accept="video/*"
        capture="camcorder"
        className={classes.input}
        id="icon-button-video"
        onChange={handleCapture}
        type="file"
      />
      <label htmlFor="icon-button-video">
        <IconButton color="primary" component="span">
          <Videocam />
        </IconButton>
      </label>
    </Paper>
  );
};
export default InputImage;
