import React, { useEffect, useState } from "react";
import clsx from "clsx";
import TestImage from "../testImage";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link as RouterLink } from "@reach/router";
import Modal from "../modal";
import { useTranslation } from "react-i18next";

const ImageGrid = ({ classes, store, page, sort, AlertDialog }) => {
  const [images, setImages] = useState([]);
  const [url, setOpen] = React.useState(false);

  const { t, i18n } = useTranslation();

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
      <div className={clsx(classes.imageContainer, classes[store.layout])}>
        {images.map(d => (
          <Button
            variant="text"
            color="primary"
            onClick={() => handleClickOpen(d.url)}
          >
            <TestImage classes={classes} thumbnail={d.thumbnail} url={d.url} />
          </Button>
        ))}
        <Modal url={url} classes={classes} handleClose={handleClose} />
      </div>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        {page > 1 && (
          <Button component={RouterLink} to={`/${sort}/${Number(page) - 1}`}>
            {t("Back")}
          </Button>
        )}
        <Button component={RouterLink} to={`/${sort}/${Number(page) + 1}`}>
          {t("Next")}
        </Button>
      </ButtonGroup>
    </>
  );
};

ImageGrid.defaultProps = { page: 1, sort: "hot" };

export default ImageGrid;
