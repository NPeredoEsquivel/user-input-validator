import React from "react";
import classes from "./Modal.module.scss";
import Card from "../Card/Card";

export default function Modal({ className, children }) {
  return (
    <Card className={`modal-conteiner ${className ? className : ""}`}>
      {children}
    </Card>
  );
}
