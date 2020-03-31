import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Link from "@material-ui/core/Link";

const testImage = ({ classes, full, preview }) => {
  const [image] = preview.images || [];
  const [, , thumbnail] = image.resolutions || [];
  return thumbnail.url ? (
    <Card className={classes.card}>
      <CardActionArea>
        <Link>
          <CardMedia
            className={classes.media}
            image={thumbnail.url}
            title="animal"
            component="img"
            loading="lazy"
          ></CardMedia>
        </Link>
      </CardActionArea>
    </Card>
  ) : null;
};

export default testImage;
