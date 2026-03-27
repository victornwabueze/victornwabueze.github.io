// Assignment 4b - Image gallery
// Author: Victor Nwabueze
// Description: Adding functionality to display images and interact with gallery
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// Looping through images and creating thumbnails
const imageFilenames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
for (let i = 0; i < imageFilenames.length; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/${imageFilenames[i]}`);
  newImage.setAttribute("alt", `Thumbnail ${i + 1}`);
  thumbBar.appendChild(newImage);
}

// Handling image click events
thumbBar.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  }
});

// Darken/Lighten button functionality
