import React from "react";

import { ButtonComponent } from "./styles.js";

export default function Button(props) {
  return (
    <ButtonComponent height={props.height} width={props.width}>
      {props.children}
    </ButtonComponent>
  );
}
