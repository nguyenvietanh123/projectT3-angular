(function() {
    "use strict";

    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }


    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return
            let section = select(navbarlink.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
            } else {
                navbarlink.classList.remove('active')
            }
        })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

    const scrollto = (el) => {
        let header = select('#header')
        let offset = header.offsetHeight

        let elementPos = select(el).offsetTop
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        })
    }

    // scroll to top
    let backtotop = select('.back-to-top')
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
    }

    on('click', '.mobile-nav-toggle', function(e) {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
    })


    on('click', '.navbar .dropdown > a', function(e) {
        if (select('#navbar').classList.contains('navbar-mobile')) {
            e.preventDefault()
            this.nextElementSibling.classList.toggle('dropdown-active')
        }
    }, true)

    on('click', '.scrollto', function(e) {
        if (select(this.hash)) {
            e.preventDefault()

            let navbar = select('#navbar')
            if (navbar.classList.contains('navbar-mobile')) {
                navbar.classList.remove('navbar-mobile')
                let navbarToggle = select('.mobile-nav-toggle')
                navbarToggle.classList.toggle('bi-list')
                navbarToggle.classList.toggle('bi-x')
            }
            scrollto(this.hash)
        }
    }, true)

    window.addEventListener('load', () => {
        if (window.location.hash) {
            if (select(window.location.hash)) {
                scrollto(window.location.hash)
            }
        }
    });


    // team slide
    new Swiper('.person-slider', {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });

    // product filter (product category)
    window.addEventListener('load', () => {
        let productContainer = select('.product-container');
        if (productContainer) {
            let productIsotope = new Isotope(productContainer, {
                itemSelector: '.product-item',
                layoutMode: 'fitRows'
            });

            let productFilters = select('#product-filters li', true);

            on('click', '#product-filters li', function(e) {
                e.preventDefault();
                productFilters.forEach(function(el) {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');

                productIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
                productIsotope.on('arrangeComplete', function() {
                    AOS.refresh()
                });
            }, true);
        }
    });

    const productLightbox = GLightbox({
        selector: '.product-lightbox'
    });


    new Swiper('.product-details-slider', {
        speed: 400,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }
    });


    //  scroll effect
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    });
})()

//collection slide
var slideIndex = [1, 1, 1, 1];
var slideId = ["slideCollection1", "slideCollection2", "slideCollection3", "slideCollection4"]
showDivs(1, 0);
showDivs(1, 1);
showDivs(1, 2);
showDivs(1, 3);

function plusDivs(n, no) {
    showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}

// popup chat
$(document).ready(function() {
    $("#myForm").hide();
});

function openForm() {
    $("#myForm").show(300);
}

function closeForm() {
    $("#myForm").hide(100);
}

// login and register
$(document).ready(function() {
    $("#login").hide();
    $("#register").hide();
    $("#forgotPass").hide();
});

function openFormLogin() {
    $("#login").toggle(300);
    $("#register").hide();
    $("#forgotPass").hide();
}

function openFormRegister() {
    $("#register").show(300);
    $("#login").hide();
    $("#forgotPass").hide();
}

function forgotPassword() {
    $("#register").hide();
    $("#login").hide();
    $("#forgotPass").show(300);
}

function closeFormm() {
    $("#login").hide();
    $("#register").hide();
    $("#forgotPass").hide();
}