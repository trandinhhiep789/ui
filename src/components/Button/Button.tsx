import React from "react";
import "./Button.scss"

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="bg-teal-200">{props.label}</button>;
};

export default Button;