import React, { useEffect, useState } from "react";
import clsx from "clsx";
import TestImage from "../testImage";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link as RouterLink } from "@reach/router";
import Modal from "../modal";
import { useTranslation } from "react-i18next";
import { Typography } from "@material-ui/core";

const ImageGrid = ({ classes, store, page, sort, location, ...props }) => {
  console.log(location);
  const [images, setImages] = useState([]);
  const [url, setOpen] = React.useState(false);
  const [time, setTime] = useState("week");

  const { t } = useTranslation();

  const [firstImage] = images;
  const [lastImage] = [...images].reverse();

  const handleClickOpen = img => {
    setOpen(img);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const [direction, name] = location.search.slice(1).split("=");
    const endPoint = `/api/images/${sort}?page=${page}&time=${time}&${direction}=${name}`;
    fetch(endPoint)
      .then(res => res.json())
      .then(res => {
        setImages(res);
      });
  }, [location.search, page, sort, time]);
  return (
    <>
      {sort === "top" && (
        <ButtonGroup color="primary">
          <Button onClick={() => setTime("hour")}>Hour</Button>
          <Button onClick={() => setTime("day")}>Day</Button>
          <Button onClick={() => setTime("week")}>Week</Button>
          <Button onClick={() => setTime("month")}>Month</Button>
          <Button onClick={() => setTime("year")}>Year</Button>
          <Button onClick={() => setTime("all")}>All time</Button>
        </ButtonGroup>
      )}
      <div className={clsx(classes.imageContainer, classes[store.layout])}>
        {images.map(d => (
          <Button
            variant="text"
            color="primary"
            onClick={() => handleClickOpen(d.url)}
          >
            <TestImage classes={classes} preview={d.preview} url={d.url} />
          </Button>
        ))}
        <Modal url={url} classes={classes} handleClose={handleClose} />
      </div>

      <ButtonGroup color="primary" aria-label="outlined primary button group">
        {page > 1 && firstImage && (
          <Button
            component={RouterLink}
            to={`/${sort}/${Number(page) - 1}?before=${firstImage.name}`}
          >
            {t("Back")}
          </Button>
        )}
        {lastImage && (
          <Button
            component={RouterLink}
            to={`/${sort}/${Number(page) + 1}?after=${lastImage.name}`}
          >
            {t("Next")}
          </Button>
        )}
      </ButtonGroup>
      <Typography>Current Page : {page}</Typography>
    </>
  );
};

ImageGrid.defaultProps = { page: 1, sort: "hot" };

export default ImageGrid;
