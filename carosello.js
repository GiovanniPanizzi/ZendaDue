const leftSlidingButton = document.getElementById("left-sliding-button");
const rightSlidingButton = document.getElementById("right-sliding-button");
const slidingCollection = document.getElementById("sliding-collection");

leftSlidingButton.addEventListener("click", () => {
    const firstElement = slidingCollection.querySelector("li");
    slidingCollection.appendChild(firstElement);
});

rightSlidingButton.addEventListener("click", () => {
    const lastElement = slidingCollection.querySelector("li:last-child");
    slidingCollection.prepend(lastElement);
});



