import React from "react";
import { Grid, Typography } from "@material-ui/core";
//import {   } from "semantic-ui-react"
import Movie from "../Movie";
import StepLineChart from "../StepLineChart";
import MyLine from "../MyLine";
const movieData = {
  imgurl:
    "https://i.ytimg.com/an_webp/nMS1AZ4NYDQ/mqdefault_6s.webp?du=3000&sqp=CNSgvvoF&rs=AOn4CLAEnC1nrZqQjYzw9mOMfmh36Oer2w",
  title: "브론즈에 나타난 '이속 빌런'",
};
const Evaluation = (props) => {
  console.log(props);
  const { id } = props.match.params;
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4">Evaluation Movie {id}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Movie imgUrl={movieData.imgurl} title={movieData.title} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4">This part is Graph</Typography>
        <StepLineChart />
      </Grid>
      <Grid item xs={12}>
        <MyLine />
      </Grid>
    </Grid>
  );
};
export default Evaluation;
