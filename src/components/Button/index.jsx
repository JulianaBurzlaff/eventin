import React from "react";

import { ButtonComponent } from "./styles.js";

export default function Button({
  className,
  width,
  height,
  children,
  onClick,
}) {
  return (
    <ButtonComponent
      className={className}
      onClick={onClick}
      height={height}
      width={width}
    >
      {children}
    </ButtonComponent>
  );
}
