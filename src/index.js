import nav from "./nav";
import {top, bottom} from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-style";
//const Button = 

console.log("I'm from nav", nav())
console.log("I'm from footer", top, bottom)
console.log("I'm making a buttom", makeButton("Camilo"))
console.log("I'm using one function", makeColorStyle("orange"))