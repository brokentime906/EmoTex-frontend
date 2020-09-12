import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Paper, Typography } from "@material-ui/core";
import StepLineChart from "../StepLineChart";
import MyLine from "../MyLine";
import Movie from "../Movie";
import MovieReport from "../MovieReport";
export const Report = (props) => {
  const { email } = props.match.params;
  const [evaluations, setEvaluations] = useState([]);
  useEffect(() => {
    const fn = async () => {
      const res = await axios.get(
        `http://33775b0df2f5.ngrok.io/evaluation/email/${email}`
      );
      console.log(res.data);
      setEvaluations(res.data.movies);
    };
    fn();
  }, []);
  return (
    <div>
      <Grid container>
        {email}'s Report
        {evaluations && evaluations.length === 0 ? (
          <Paper>
            <Typography>시청기록이 존재하지 않습니다</Typography>
          </Paper>
        ) : (
          ""
        )}
        {evaluations &&
          evaluations.map((movie) => (
            <Grid item xs={12}>
              <Paper>
                <Typography>movie url : {movie.movie_url}</Typography>
                <MovieReport
                  imgUrl={movie.thumbnail}
                  title={movie.title}
                  comments={movie.comments}
                  good={movie.good}
                  bad={movie.bad}
                  view={movie.view}
                  id={movie._id}
                  email={email}
                />
              </Paper>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};
