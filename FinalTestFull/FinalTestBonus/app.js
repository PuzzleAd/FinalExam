
const fetchButton = document.getElementById("joker");
const thumbUp = document.getElementById("thumb-up");
const thumbDown = document.getElementById("thumb-down");

const paragraph = document.getElementById("like-dislike");


paragraph.textContent = `Like/Dislike : 0`;

const url = "https://api.chucknorris.io/jokes/random";

fetch(url, {method: "GET"})
    .then((response) => response.json())
    .then((data) => {
        fetchButton.addEventListener("click", function() {
            const joke = document.getElementById("joke");
            joke.textContent = data.value;
        })
    })

let num = 0;

thumbUp.addEventListener("click", function () {
    num++;
    paragraph.textContent = `Like/Dislike : ${num}`;
})

thumbDown.addEventListener("click", function () {
    num--;
    paragraph.textContent = `Like/Dislike : ${num}`;
})
