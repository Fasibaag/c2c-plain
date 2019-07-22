$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    lazyLoad: true,
    items: 1,
    autoplay: true,
    smartSpeed: 1000,
    // animateOut: "fadeOut"
})


$('.menu').click(function () {
    var menuList = document.querySelector('.sideBar-menu');
    var body = document.querySelector('body');
    if (menuList.style.display !== 'block') {
        menuList.style.display = 'block';
    }

    $(".menu-list-mob").animate({
        width: "250px"
    });

    body.classList.add('overflow');
})

$('.closeIcon').click(function () {
    closeSideBar();
});


$(document).click(function (event) {
    //if you click on anything except the modal itself or the "open modal" link, close the modal
    if (!$(event.target).closest(".menu-list-mob, .menu").length) {
        closeSideBar();
    }
});


function closeSideBar() {
    var menuList = document.querySelector('.sideBar-menu');
    var body = document.querySelector('body');
    $(".menu-list-mob").animate({
        width: "0px"
    }, function () {
        if (menuList.style.display !== 'none') {
            menuList.style.display = 'none';
        }
    });
    body.classList.remove('overflow');
}