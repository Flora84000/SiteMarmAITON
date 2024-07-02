document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.sectionRecipe__carousel__carousel');
    const carouselItems = document.querySelectorAll('.carouselItem');
    const totalItems = carouselItems.length;
    const arrowNext = document.querySelector('.arrowNext');
    const arrowPrev = document.querySelector('.arrowPrev');
    const pagination = document.querySelector('.sectionRecipe__paginationContainer');
    const paginationDots = [] 
    let currentIndex = 0;

/*___movedirection_____*/

function moveCarousel(direction) {
    currentIndex = (currentIndex + direction) % totalItems;
    if (currentIndex < 0) {
        currentIndex = totalItems -1
    }
    carousel.style.transform = `translateX(${-960 * currentIndex}px)`
    console.log(currentIndex)
    updatePagination();

}

/*___autoplay_____*/

function startAutoplay() {
    autoplayInterval = setInterval(() => {
        moveCarousel(1);
    }, 1500); 
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

carousel.addEventListener('mouseover', stopAutoplay);
carousel.addEventListener('mouseleave', startAutoplay);

/*___autoplay_____*/

arrowNext.addEventListener('click', () => {
    moveCarousel(1);
});

arrowPrev.addEventListener('click', () => {
    moveCarousel(-1);
});

window.addEventListener('load', startAutoplay);

/*____pagination_____*/ 

function createPagination() {
    for (let i = 1; i <= totalItems; i++) {
       const button = document.createElement('div');
       button.classList.add('pagination')
        pagination.appendChild(button)
        button.addEventListener('click', function(){
            button.classList.toggle('active')
        })
        paginationDots.push(button)
    }
}

function updatePagination() {
    paginationDots.forEach((item, index) => {
        if (index === currentIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}
    createPagination();
    updatePagination();
});