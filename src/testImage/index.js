import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";

const testImage = ({ classes, url }) => {
  const w = Math.round(Math.random() * 800);
  const h = Math.round(Math.random() * 800);

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={url || `https://placeimg.com/${w}/${h}/animals`}
          title="animal"
        ></CardMedia>
      </CardActionArea>
    </Card>
  );
};

export default testImage;
