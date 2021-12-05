// Select the section with an id of container without using querySelector.
const containerOne = document.getElementById("container");

// Select the section with an id of container using querySelector.
const containerTwo = document.querySelector("#container");

// Select all of the list items with a class of “second”.
const liSecond = document.querySelectorAll("li.second");

// Select a list item with a class of third, but only the list item inside of the ol tag.
const liThirdOl = document.querySelector("ol li.third");

// Give the section with an id of container the text “Hello!”.
containerOne.innerText = "Hello!";

// Add the class main to the div with a class of footer.
const footer = document.querySelector(".footer");
footer.classList.add("main");

// Remove the class main on the div with a class of footer.
footer.classList.remove("main");

// Create a new li element.
const li = document.createElement("li");

// Give the li the text “four”.
li.innerText = "four";

// Append the li to the ul element.
const ul = document.querySelector("ul");
ul.append(li);

// Loop over all of the lis inside the ol tag and give them a background color of “green”.
const olLis = document.querySelectorAll("ol li");
for (let olLi of olLis) {
	olLi.style.backgroundColor = "green";
}

// Remove the div with a class of footer
footer.remove();
