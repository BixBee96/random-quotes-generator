// Global Variables
const userInput = document.querySelector(".user-input");
const submitButton = document.querySelector(".input-btn");
const quoteGenre = document.querySelector(".quote-genre");
const quoteContent = document.querySelector(".quote-content");
const quoteAuthor = document.querySelector(".quote-author");
const url = `https://api.quotable.io/random`;

// Function

// fetch request from APIs server
submitButton.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      quoteContent.innerText = data.content;
      quoteAuthor.innerText = `- ${data.author}`;
      let quoteArr = [];
      //   quoteArr.push(console.log(`${data.content}-${data.author}`));
    })
    .catch((err) => console.error(err));
});
