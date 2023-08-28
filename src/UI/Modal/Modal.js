import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.scss";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Backdrop = ({ modalContent }) => {
  return (
    <div
      className={classes["backdrop"]}
      onClick={modalContent.dismissModalHandler}
    ></div>
  );
};

const ModalOverlay = ({ className, modalContent }) => {
  return (
    <Card className={`${classes["modal"]} ${className ? className : ""}`}>
      <header className={classes["header"]}>
        <h2>{modalContent.header}</h2>
      </header>
      <body className={classes["content"]}>{modalContent.body}</body>
      <footer className={classes["actions"]}>
        <Button onClickEventHandler={modalContent.dismissModalHandler}>
          Close
        </Button>
      </footer>
    </Card>
  );
};

export default function Modal({ className, modalContent }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop modalContent={modalContent} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay className={className} modalContent={modalContent} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}
