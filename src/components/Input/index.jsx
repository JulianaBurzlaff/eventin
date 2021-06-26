import React from "react";

import {InputComponent} from "./styles"

export default function Input( props) {
  return (
    <InputComponent height={props.height} width={props.width} placeholder = {props.placeholder}>{props.children}</InputComponent>
  );
}
