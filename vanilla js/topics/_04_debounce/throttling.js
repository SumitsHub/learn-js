// Throttling - limits the rate at which a function is invoked.
// Throttling is useful for events like scrolling, resizing, and other high-frequency actions, where executing a function too often can lead to performance issues.

function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}

//* Usage Example
// Let's apply throttling to a scroll event:

// Function to run on scroll
function handleScroll() {
  console.log("Scroll event triggered at", new Date().toLocaleTimeString());
}

// Throttled version of the function
const throttledScroll = throttle(handleScroll, 1000); // Limit to once every second

// Attach throttled function to scroll event
window.addEventListener("scroll", throttledScroll);

// This helps reduce the frequency of handleScroll calls, making it more efficient, especially for high-frequency events like scrolling.
