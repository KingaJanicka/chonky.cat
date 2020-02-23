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
        console.log(res);
        setImages(res);
      });
  }, [page, sort]);
  return (
    <>
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
