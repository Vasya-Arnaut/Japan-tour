(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    }
}());


(function () {
    const burgerItem = document.querySelector('.burger')
    const menu = document.querySelector('.heder_nav')
    const menuCloseItem = document.querySelector('.heder_nav-close')
    burgerItem.addEventListener('click', () => {
        menu.classList.add('heder_nav_active')
    })
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('heder_nav_active')
    })
}());
