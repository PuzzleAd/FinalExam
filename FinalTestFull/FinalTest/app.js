
const first = document.getElementById("first");
const second = document.getElementById("second");
const container = document.querySelector("#uchinmachini");

first.addEventListener("click", function () {
     container.className = "here";
})

second.addEventListener("click", function () {
    container.className = "none";
})
