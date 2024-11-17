// getting all the elements with the 'bg-snow' classes
const bgSnows = document.querySelectorAll('.bg-snow');

// getting all the elements with the 'trees' classes
const bgTrees = document.querySelectorAll('.trees');

// getting the element with the 'reindeer-left' class
const reindeerLeft = document.querySelector('.reindeer-left');

// getting the element with the 'reindeer-right' class
const reindeerRight = document.querySelector('.reindeer-right');



window.addEventListener('scroll', function() {
    // getting the position based on the scroll activity
    const scrollPosition = window.scrollY;

    // making all the backgrounds photos move right with separate speed
    // with first bg photo moving slower than the second bg photo
    bgSnows.forEach((bgSnow) => {
        bgSnow.style.backgroundPosition = `${scrollPosition * 0.2}px 0, ${scrollPosition * 0.4}px 0`;
    });

    // making all the tree backgrounds move left
    bgTrees.forEach((bgTree) => {
        bgTree.style.backgroundPosition = `-${scrollPosition * 0.6}px 0`;
    });

    // constants for how the reindeers move depending on the scroll behavior
    const moveX = scrollPosition * 0.4; // how fast it moves left or right
    const moveY = scrollPosition * 0.3; // how fast it moves up or down


    if (reindeerLeft) {
        // moving left and up if scrolling down while right and down scrolling up
        reindeerLeft.style.transform = `translate(-${moveX}px, -${moveY}px)`;
    }

    if (reindeerRight) {
        // moving right and up if scrolling down while left and down scrolling up
        reindeerRight.style.transform = `translate(${moveX}px, -${moveY}px)`;
    }
    
});
