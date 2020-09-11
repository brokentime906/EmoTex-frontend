import React, { useState, useEffect } from "react";
import {
  Grid,
  Input,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  Typography,
  CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Movie from "../Movie";
import { useSelector } from "react-redux";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  greed: {
    textAlign: "center",
    margin: 15,
  },
}));
// const movieStaticData = [
//   {
//     imgurl:
//       "https://i.ytimg.com/an_webp/H4yrb8JPADY/mqdefault_6s.webp?du=3000&sqp=CPD9zfoF&rs=AOn4CLDetkS7vbAn_9sCwZqVPrLJDjy0Qw",
//     title: "뭐? 판테온이 리메이크 되었다고 ?",
//   },
//   {
//     imgurl:
//       "https://i.ytimg.com/an_webp/h2faeXEpPQI/mqdefault_6s_480x270.webp?du=3000&sqp=COz9zfoF&rs=AOn4CLDXJqj2mSEol21gU2b6sx3S6uqJXA",
//     title: `가짜사나이 2기 면접 A조`,
//   },
// ];
const Main = (props) => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fn = async () => {
      const user_email = "btime906@gmail.com";
      try {
        const res = await Axios.get(
          `http://localhost:4000/evaluation/email/${user_email}`
        );
        setMovies(res.data.movies);
        console.log(res.data.movies);
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, []);
  console.log(props);
  // const movies = movieStaticData.map((eachMovie) => (
  //   <Grid item xs={12}>
  //     <Movie imgUrl={eachMovie.imgurl} title={eachMovie.title} />
  //   </Grid>
  // ));
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const greet = auth.isLoggedIn ? (
    <>
      <Typography variant="h5">안녕하세요 {auth.user} 님</Typography>
      <Typography variant="h6">{auth.user} 님의 시청기록</Typography>
    </>
  ) : (
    <Typography variant="h5">로그인 해주세요</Typography>
  );
  return (
    <>
      <Grid container>
        <Grid item xs={12} className={classes.greed}>
          {greet}
        </Grid>
        {movies.map((movie) => (
          <Grid item xs={12}>
            <Movie
              imgUrl={movie.thumbnail}
              title={movie.title}
              comments={movie.comments}
              good={movie.good}
              bad={movie.bad}
              view={movie.view}
              id={movie._id}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Main;
