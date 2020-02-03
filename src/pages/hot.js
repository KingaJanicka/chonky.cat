import React, { useEffect, useState } from "react";
import clsx from "clsx";
import TestImage from "../testImage";
import Typography from "@material-ui/core/Typography";

const Hot = ({ classes, open, store, numberOfImages }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const endPoint = "https://www.reddit.com/r/airplaneears/.rss?sort=hot";
    fetch(endPoint)
      .then(res => res.xml())
      .then(console.log);
  });
  return (
    <>
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
        tellus. Convallis convallis tellus id interdum velit laoreet id donec
        ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
        suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
        quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
        proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
        tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
        varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
        Lorem donec massa sapien faucibus et molestie ac.
      </Typography>

      <div className={clsx(classes.imageContainer, classes[store.layout])}>
        {Array(numberOfImages)
          .fill()
          .map(() => (
            <TestImage classes={classes} />
          ))}
      </div>
    </>
  );
};

export default Hot;
