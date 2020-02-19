import React from "react";
import TestImage from "../testImage";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Modal = ({ url, classes, handleClose }) => (
  <Dialog
    open={!!url}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogContent>
      {/* <TestImage classes={classes} full={url} /> */}
      <img src={url} width="100%" />
    </DialogContent>
  </Dialog>
);

export default Modal;
