import React, { useEffect, useState } from "react";
import clsx from "clsx";
import TestImage from "../testImage";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link as RouterLink } from "@reach/router";
import Modal from "../modal";

const ImageGrid = ({ classes, store, page, sort, AlertDialog }) => {
  const [images, setImages] = useState([]);
  const [url, setOpen] = React.useState(false);

  const handleClickOpen = img => {
    setOpen(img);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const endPoint = `/api/images/${sort}?page=${page}`;
    fetch(endPoint)
      .then(res => res.json())
      .then(res => {
        setImages(res);
      });
  }, [page, sort]);
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
        {images.map(d => (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleClickOpen(d.full)}
          >
            <TestImage
              classes={classes}
              thumbnail={d.thumbnail}
              full={d.full}
            />
          </Button>
        ))}
        <Modal url={url} classes={classes} handleClose={handleClose} />
      </div>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        {page > 1 && (
          <Button component={RouterLink} to={`/${sort}/${Number(page) - 1}`}>
            Back
          </Button>
        )}
        <Button component={RouterLink} to={`/${sort}/${Number(page) + 1}`}>
          Next
        </Button>
      </ButtonGroup>
    </>
  );
};

ImageGrid.defaultProps = { page: 1, sort: "Hot" };

export default ImageGrid;
