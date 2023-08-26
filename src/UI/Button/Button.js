import React from "react";

export default function Button({
  className = "",
  children,
  onClickEventHandler = null,
  type = "button",
}) {
  return (
    <button className={className} onClick={onClickEventHandler} type={type}>
      {children}
    </button>
  );
}
