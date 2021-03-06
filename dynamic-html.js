"use strict";
const HEADER_TITLE = "JavaScript & Node.js full course";
const PAGE_TITLE =
  "Demo : dynamic HTML generation & different ways to loop through an array";
const FOOTER_TEXT = "Happy learning : )";

const LIBRARIES = [
  "Anime.js",
  "Three.js",
  "Phaser.io",
  "GSAP",
  "Mo.js",
  "Velocity",
  "...",
];

const onClickHandler = (e) => {
  alert("Clicking here has indeed some effects!");
};
// Get reference to the parent element
let page = document.getElementById("page");

// use of Template literal
let htmlText = `<h6 class="mt-3">1. List through a for loop and use of innerHTML</h6>
<ul class='list-group list-group-horizontal-lg'>`;

// dynamically writing HTML code through a classical loop
for (let i = 0; i < LIBRARIES.length; i++) {
  // to demonstrate the use of bootstrap and the List group
  htmlText += "<li class='list-group-item'>" + LIBRARIES[i] + "</li>";
}

htmlText += "</ul>";

// dynamically writing HTML code through forEach method
htmlText +=
  "<h6 class='mt-3'>2. List through forEach method and use of innerHTML</h6>";
htmlText += "<ul class='list-group list-group-horizontal-lg'>";
LIBRARIES.forEach(function (value, index, array) {
  htmlText += "<li class='list-group-item'>" + value + "</li>";
});
htmlText += "</ul>";

// dynamically writing HTML code through for of loop
htmlText +=
  "<h6 class='mt-3'>3. List through forEach method and use of innerHTML</h6>";
htmlText += "<ul class='list-group list-group-horizontal-lg'>";
for (const ELEMENT of LIBRARIES) {
  htmlText += "<li class='list-group-item'>" + ELEMENT + "</li>";
}
htmlText += "</ul>";

// setting the html content of the p#page element to add the two list groups prepared
page.innerHTML = htmlText;

// Same thing by working directly with DOM elements
let listTitle = document.createElement("h6");
listTitle.classList = "mt-3";
listTitle.innerText = "4. List through classical for loop and createElement()";
page.appendChild(listTitle);
let list = document.createElement("ul");
list.className = "list-group list-group-horizontal-lg";
for (let i = 0; i < LIBRARIES.length; i++) {
  //htmlText += "<li>" + LIBRARIES[i] + "</li>";
  // to demonstrate the use of bootstrap and the List group
  let item = document.createElement("li");
  item.className = "list-group-item";
  item.innerText = LIBRARIES[i];
  item.addEventListener("click", onClickHandler);
  list.appendChild(item);
}
page.appendChild(list);

setLayout(HEADER_TITLE, PAGE_TITLE, FOOTER_TEXT);

/**
 * setLayout allows to display specific information in an HTML template
 * containing those paramters as id to text elements (h4, h5, title)
 * @param {headerTitle} headerTitle
 * @param {pageTitle} pageTitle
 * @param {footerText} footerText
 */
function setLayout(headerTitle, pageTitle, footerText) {
  document.querySelector("#headerTitle").innerText = headerTitle;
  document.querySelector("title").innerText = pageTitle;
  document.querySelector("#pageTitle").innerText = pageTitle;
  document.querySelector("#footerText").innerText = footerText;
}
