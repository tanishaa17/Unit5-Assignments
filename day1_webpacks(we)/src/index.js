import { add, div } from "./calc";
import React from "react";
import ReactDom from "react-dom";
import "./index.css"
console.log(add(4, 9));
console.log(div(24, 5));
console.log(div(24, 4));

// const h1 = document.createElement("h1");
// h1.innerText = "Welcome to Webpack";
// h1.classList.add("textColor");
// document.getElementById("root").append(h1);


// const elem = React.createElement(
//     "h1", //TAG NAME
//     { className: "textColor" }, //ATTRIBUTES AS AN OBJECT
//     "Welcome to Webpack", //CHILDREN
//     React.createElement("span", {}, " with React now")
// );

ReactDom.render(
    <div className="textColor">
        Welcome
    </div>, // what you want to append
    document.getElementById("root") // where you want to append
)
  