const green = document.querySelector('.image2');
const red = document.querySelector('.image1');
const counter = document.getElementById("numCount");

red.addEventListener("click", () => {
    counter.innerText = parseInt(counter.innerText) - 1;
});

green.addEventListener("click", () => {
    counter.innerText = parseInt(counter.innerText) + 1;
});


