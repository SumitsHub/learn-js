const box = document.querySelector(".box");
const container = document.querySelector(".container");

const observer = new ResizeObserver(entries => {
  console.log(entries);
});

observer.observe(box);
observer.observe(container);

let slider = document.getElementById("slider");

slider.addEventListener("input", function (event) {
  let w = event.target.value + "px";

  box.style.width = w;
});

function disconnect() {
  observer.disconnect(); // Un-observes all observed Element targets of a particular observer.
}

function unobserve() {
  observer.unobserve(box); // Ends the observing of a specified Element.
}
