import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 340,
    backgroundColor: "lightblue",
    marginTop:"25px",
    borderRadius:"20px"
  },
  media: {
    height: 140
  }
});

export default function Cards({name,temp,desc,wind}) {
  const classes = useStyles();
  const IMG =
    "data:image/jpeg;base64,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";
  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={IMG}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="h2">
            {name}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="secondary"
            component="h2"
          >
            Temperature:{temp}??F
          </Typography>
          <Typography variant="h6" color="secondary" component="p">
            Description:{desc}
          </Typography>
          <Typography variant="h6" color="secondary" component="p">
            Wind Speed:{wind}
          </Typography>
        </CardContent>
    </Card>
  );
}
