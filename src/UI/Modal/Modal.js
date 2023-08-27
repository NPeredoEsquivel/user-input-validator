import React from "react";
import classes from "./Modal.module.scss";
import Card from "../Card/Card";
import Button from "../Button/Button";

export default function Modal({ className, modalContent }) {
  return (
    <>
      <div
        className={classes["backdrop"]}
        onClick={modalContent.dismissModalHandler}
      >
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
      </div>
    </>
  );
}
