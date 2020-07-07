const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    controls: false,
    speed: 1200,
    autoplay: 2500,
    autoplayHoverPause: true,
    autoplayButtonOutput: false,
    navPosition: "bottom"
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});