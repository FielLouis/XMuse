const bgSnows = document.querySelectorAll('.bg-snow');
const bgTrees = document.querySelectorAll('.trees');
const reindeerLeft = document.querySelector('.reindeer-left');
const reindeerRight = document.querySelector('.reindeer-right');

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    bgSnows.forEach((bgSnow) => {
        bgSnow.style.backgroundPosition = `${scrollPosition * 0.2}px 0, ${scrollPosition * 0.4}px 0`;
    });

    bgTrees.forEach((bgTree) => {
        bgTree.style.backgroundPosition = `-${scrollPosition * 0.6}px 0`;
    });

    const moveX = scrollPosition * 0.4;
    const moveY = scrollPosition * 0.3;

    if (reindeerLeft) {
        reindeerLeft.style.transform = `translate(-${moveX}px, -${moveY}px)`;
    }

    if (reindeerRight) {
        reindeerRight.style.transform = `translate(${moveX}px, -${moveY}px)`;
    }
    
});
