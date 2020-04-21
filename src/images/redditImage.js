import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Link from "@material-ui/core/Link";

const redditImage = ({ classes, url, preview }) => {
  const [image] = preview.images || [];
  const [, , thumbnail] = image.resolutions || [];
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link>
          <CardMedia
            className={classes.media}
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

export default redditImage;
