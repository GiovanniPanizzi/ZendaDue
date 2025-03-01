        /* Carosello */
        
        /*
                const leftSwipingButton = document.getElementById("left-swiping-button");
                const rightSwipingButton = document.getElementById("right-swiping-button");
                const swipingCollection = document.getElementById("swiping-collection");

                let currentLeft = 0;

                updateButtons();

                function updateButtons() {

                    if (currentLeft >= 0) {
                        leftSwipingButton.style.opacity = 0;
                        leftSwipingButton.style.pointerEvents = "none";
                    } else {
                        leftSwipingButton.style.opacity = 1;
                        leftSwipingButton.style.pointerEvents = "auto";
                    }
                    if (currentLeft <= -1800) {
                        rightSwipingButton.style.opacity = 0;
                        rightSwipingButton.style.pointerEvents = "none";
                    } else{
                        rightSwipingButton.style.opacity = 1;
                        rightSwipingButton.style.pointerEvents = "auto";
                    }
                }

                leftSwipingButton.addEventListener ("click", () => {
                    for(let i=0; i < 50; i++){
                        setTimeout(() => {
                        if (currentLeft < 0)
                        currentLeft += 10;

                        swipingCollection.style.left = currentLeft + "px";
                        updateButtons();
                        }, i*5);
                    }
                });

                rightSwipingButton.addEventListener ("click", () => {
                    for(let i=0; i < 50; i++){
                        setTimeout(() => {
                        if (currentLeft > -1800)
                        currentLeft -= 10;
                        swipingCollection.style.left = currentLeft + "px";
                        updateButtons();
                        }, i*5);
                    }
                });
        */

                const leftSlidingButton = document.getElementById("left-sliding-button");
const rightSlidingButton = document.getElementById("right-sliding-button");
const slidingCollection = document.getElementById("sliding-collection");

leftSlidingButton.addEventListener("click", () => {
    // Prendi il primo elemento e spostalo in fondo
    const firstElement = slidingCollection.querySelector("li");
    slidingCollection.appendChild(firstElement);
});

rightSlidingButton.addEventListener("click", () => {
    // Prendi l'ultimo elemento e spostalo all'inizio
    const lastElement = slidingCollection.querySelector("li:last-child");
    slidingCollection.prepend(lastElement);
});



