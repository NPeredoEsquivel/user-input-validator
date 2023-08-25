import React from "react";
import classes from "./Card.module.scss";

export default function Card({ children, className }) {
  return <div className={className}>{children}</div>;
}
