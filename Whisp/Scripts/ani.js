function isInViewport(element) {
    if (!element) {
        // If element is null or undefined, consider it not in view
        return false;
    }
    
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= windowHeight &&
        rect.right <= windowWidth
    );
}

function handleScroll() {
    const elements = document.querySelectorAll('.anim');
    
    elements.forEach(element => {
       
        if (isInViewport(element)) {
            element.classList.add('in-viewport');
            console.log(element.id, 'class added');
            
        }
    });
}

function checkInitialVisibility() {
    const startVisibleElement = document.getElementById('anim');

    if (isInViewport(startVisibleElement)) {
        startVisibleElement.classList.add('in-viewport');
    }
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', () => {
    handleScroll(); // Check visibility on initial load
    checkInitialVisibility(); // Check initial visibility for elements shown on start
});


