import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Paper, Typography } from "@material-ui/core";
import StepLineChart from "../StepLineChart";
import MyLine from "../MyLine";
export const Report = (props) => {
  const { email } = props.match.params;
  const [evaluations, setEvaluations] = useState([]);
  useEffect(() => {
    const fn = async () => {
      const res = await axios.get(
        `http://localhost:4000/evaluation/email/${email}`
      );
      console.log(res.data);
      setEvaluations(res.data.data);
    };
    fn();
  }, []);
  return (
    <div>
      {email}'s Report
      {evaluations &&
        evaluations.map((evaluation) => (
          <Paper>
            <Typography>movie url : {evaluation.movie_url}</Typography>
          </Paper>
        ))}
    </div>
  );
};
