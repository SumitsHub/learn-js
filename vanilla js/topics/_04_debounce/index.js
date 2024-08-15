//* function to return debounced function

function debounce(fun, numOfMiSec = 3000) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fun(...args), numOfMiSec);
  };
}

function handleClick(a, b) {
  alert(`Sum is ${a + b}`);
}

const handleClickDebounced = debounce(handleClick, 2000);

document
  .getElementById("btn")
  .addEventListener("click", () => handleClickDebounced(12, 23));

//* debouncing input

const handleInput = e => {
  console.log(e.target.value);
};

const handleInputDebounced = debounce(handleInput, 10000);

// document.getElementById("myInput").onchange = handleInput;
// IMP NOTE:
// In HTML, unlike React the onchange event is triggered when the input element loses focus (i.e., when you click outside the input field or press the Enter key), and the value has changed.

// If you want to capture the event immediately when the user types, you should use the oninput event instead of onchange. The oninput event is fired every time the value of the input changes, which means it gets triggered immediately as the user types.
