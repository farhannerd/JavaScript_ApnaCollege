console.log("Farhan");

// getAttribute(attr) : to get the attribute value
// setAttribute(attr, value) : to set the attribute value

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let parag = document.querySelector("p");
// console.log(parag.getAttribute("class"));

// console.log(parag.setAttribute("class", "newClass"));

// --------------------------------------------------------------

// Style
// node.style

// let div = document.querySelector("div");
// console.log(div)

// div.style.backgroundColor = "red";

// ------------------------------------------------------------
// Insert

// let el = document.createElement("div");

// node.append(el) : add at the end of the node(inside)
// node.prepend(el) : add at the start of the node(inside)
// node.before(el) : add before the node(outside)
// node.after(el) : add after the node(outside)

// Delete element

// node.remove() : removes the node

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
console.log(newBtn);