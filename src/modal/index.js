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
    maxWidth="md"
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogContent>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={url} width="100%" />
      </a>
    </DialogContent>
  </Dialog>
);

export default Modal;
