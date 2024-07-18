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

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me!";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);

// let p = document.querySelector("p");
// p.after(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, I am new.</i>";

// document.querySelector("body").prepend(newHeading);

// let para = document.querySelector("p");
// para.remove();
// newHeading.remove();

// Qs : Create a button element. Give it a text "click me!", background color of red & text color of white.
//      Insert the button as the first element inside the body tag.

// let btn = document.createElement("button");
// btn.innerText = "Click me!";
// btn.style.color = "white";
// btn.style.backgroundColor = "red";
// document.querySelector("body").prepend(btn);

// Qs : create a <p> tag in html, give it a class & some styling.
//      Now create a new class in CSS and try to append this class to the <p> element.
//      Did you noice, how you overwrite the class name when you add a new one?
//      Solve this problem using classList

// let para = document.querySelector("p");
// para.getAttribute("class");
// para.setAttribute("class", "newClass");     // drawback of using this is that earlier css won't be available.

// para.classList.add("newClass");
// para.classList.remove("newClass");

// para.classList();        // will show how many classes are defined for the given tag

