const buttonArray = Array.from(document.querySelectorAll("button"));
const box = document.getElementById("new-box");

buttonArray.forEach(function (element) {
   element.addEventListener("click", function() {
    if(element.classList.contains("red")) {
        let newDiv = document.createElement("div");
        newDiv.className = "red-div";
        newDiv.textContent = "RED"
        box.appendChild(newDiv);
    }

    if(element.classList.contains("green")) {
        let newDiv = document.createElement("div");
        newDiv.className = "green-div";
        newDiv.textContent = "GREEN"
        box.appendChild(newDiv);
    }

    if(element.classList.contains("blue")) {
        let newDiv = document.createElement("div");
        newDiv.className = "blue-div";
        newDiv.textContent = "BLUE"
        box.appendChild(newDiv);
    }
   })
})