import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

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
