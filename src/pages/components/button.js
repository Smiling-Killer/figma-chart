import React from "react";

export default function Button(props) {
  const { style, title } = props;
  return <button style={style}>{title}</button>;
}
