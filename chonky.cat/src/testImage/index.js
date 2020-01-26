import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";

const testImage = ({ classes }) => (
  <Card className={classes.card}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image="https://placeimg.com/345/345/animals"
        title="animal"
      ></CardMedia>
    </CardActionArea>
  </Card>
);

export default testImage;
