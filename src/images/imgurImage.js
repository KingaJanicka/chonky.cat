import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Link from "@material-ui/core/Link";

const ImgurImage = ({ classes, url, thumbnail }) => {
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link>
          <CardMedia
            cclassName={classes.media}
            image={(thumbnail && thumbnail.url) || url}
            title="animal"
            component="img"
            loading="lazy"
          ></CardMedia>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default ImgurImage;
