import React from "react";
import { render } from "react-dom";
import { App } from "./App";

const headStyle = { color: "blue", marginBottom: 10 };
function Heading(props: any) {
  return (
    <h1 className="head" style={headStyle}>
      {props.children}
    </h1>
  );
}
//Our first react component
// HMTL vs JSX
// inline styles are strings
// in JSX comments are like this: {*/ comments like this */}

//This is "JSX"
render(<App />, document.getElementById("root"));
