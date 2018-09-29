import "./index.css";

import nav from "./nav";
import makeButton from "./button";
import {top, bottom} from "./footer";
import { makeColorStyle } from "./button-style";
import makeImage from "./image.js";
import img300 from "./300.jpg";

let para = document.createElement("H1");
let t = document.createTextNode("I'm a title");
para.appendChild(t);
document.body.appendChild(para); 

console.log("I'm from nav", nav())
console.log("I'm from footer", top, bottom)
console.log("I'm making a buttom", makeButton("Camilo server"))
console.log("I'm using one function", makeColorStyle("orange server"))


document.body.appendChild(makeImage(img300));