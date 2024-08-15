/**
 * Two intersection observers created below:
 *    1. To observe each card and toggle '.show' class to give translate effect
 *    2. To observe last child in the currently loaded list when it comes into view then load new cards
 */

const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(
  entries => {
    console.log(entries);
    entries.forEach(entry => {
      entry.target.classList.toggle('show', entry.isIntersecting);

      // un-observe element as soon as it became visible
      // if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 1, // value between 0-1 (default 0) -> 1: isIntersecting will be true once 100% of the element is visible
    // rootMargin: '-100px', // setting offset margin for isIntersecting property -> negative: shrinks container, positive: starts before element actually visible
  }
);

cards.forEach(card => {
  observer.observe(card);
});

/* implementing LAZY LOADING */

// create Intersection observer to observe the last card
const lastCardObserver = new IntersectionObserver(
  entries => {
    const lastCard = entries[0]; // only one card (last card) will be observed

    // if not visible return
    if (!lastCard.isIntersecting) return;
    // if last card became visible -> add new cards
    loadNewCards();
    // stop observing current last card
    lastCardObserver.unobserve(lastCard.target);
    // start observing new last card
    lastCardObserver.observe(document.querySelector('.card:last-child'));
  },
  {
    rootMargin: '10px', // start loading new cards 10px before the last card becomes visible
  }
);

// start observing current last card
lastCardObserver.observe(document.querySelector('.card:last-child'));

let cardCounter = 1;

// function to create 10 new cards and append to card container
function loadNewCards() {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement('div');
    card.textContent = `New Card #${cardCounter++}`;
    card.classList.add('card');
    observer.observe(card);
    cardContainer.append(card);
  }
}
