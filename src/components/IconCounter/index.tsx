import React from "react";
import { Counter } from "./styles";

type TIconProps = {
  number: number;
};

export function IconCounter({ number }: TIconProps) {
  return <Counter>{number}</Counter>;
}
