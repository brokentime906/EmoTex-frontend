import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
//import {   } from "semantic-ui-react"
import Movie from "../Movie";
import StepLineChart from "../StepLineChart";
import MyLine from "../MyLine";
import Axios from "axios";

const Evaluation = (props) => {
  console.log(props);
  const { id } = props.match.params;
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const fn = async () => {
      console.log(id);
      const res = await Axios.get(`http://localhost:4000/movie/${id}`);
      console.log(res);
      setMovie(res.data.movie);
    };
    fn();
  }, []);
  return (
    <Grid container>
      {movie && (
        <>
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
          <Grid item xs={12}>
            {/* <Typography variant="h4">This part is Graph</Typography> */}
            <StepLineChart />
          </Grid>
          <Grid item xs={12}>
            <MyLine />
          </Grid>
        </>
      )}
    </Grid>
  );
};
export default Evaluation;
