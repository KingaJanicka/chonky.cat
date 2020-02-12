import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Link from "@material-ui/core/Link";

const testImage = ({ classes, url, thumbnail }) => {
  const w = Math.round(Math.random() * 800);
  const h = Math.round(Math.random() * 800);

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link href={url}>
          <CardMedia
            className={classes.media}
            image={thumbnail || url || `https://placeimg.com/${w}/${h}/animals`}
            title="animal"
            loading="lazy"
          ></CardMedia>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default testImage;
