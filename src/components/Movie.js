import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    margin: 30,
  },
  media: {
    height: 250,
  },
}));
//import {   } from "@material-ui/core"
//import {   } from "semantic-ui-react"
const Movie = withRouter((props) => {
  const classes = useStyles();
  const { imgUrl, title } = props;
  const onClick = (e) => {
    e.preventDefault();
    props.history.push(`/evaluation/id=1795`);
  };
  return (
    <>
      <Card className={classes.root} onClick={onClick}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={imgUrl}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Views : 542,001
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Likes 17,650 | DisLikes 1,213
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions> */}
      </Card>
    </>
  );
});
export default Movie;
