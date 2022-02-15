// preloader

$(window).on('load', function () {
    // loaded
    const pageBody  = $('body');
    setTimeout (function(){
        pageBody.addClass('preloaded');
    });
    setTimeout (function(){
        pageBody.addClass('loaded');
    }, 1000);

});

var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf('safari') != -1) {
    if (ua.indexOf('chrome') > -1) {
        $('body').addClass("br-chrome"); // Chrome
    } else {
        $('body').addClass("br-safari"); // Safari
    }
}

// sticky header

$(window).scroll(function() {
    var $full = $('.header').height();
    if ($(this).scrollTop() > $full){
        $('.header').addClass("sticky");
    }
    else{
        $('.header').removeClass("sticky");
    }
});

$(document).ready(function() {
    // fancybox

    $('[data-fancybox]').fancybox({
        autoFocus: false,
    });

    $('select').niceSelect();

    // anchor links

    $("body").on("click",".scroll-link", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({scrollTop: top}, 500);
    });

    // header menu

    $('.header-pull').on('click', function() {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('active');
    });

    $('.header-nav__menu>ul>li>a').on('click', function(e) {
        e.preventDefault();
        $(this).parent('.header-nav__menu>ul>li').find('ul').toggleClass('active');
    });
    $('.header-nav__contacts-title').on('click', function() {
        $('.header-nav__contacts-block').toggleClass('active');
    });
});

$(function() {
    'use strict';
    /*Activate default tab contents*/
    var leftPos, newWidth, $magicLine;

    $('.header--nav > ul').append("<li id='magic-line'></li>");
    $magicLine = $('#magic-line');
    $magicLine.width($('.current-menu-item').width())
        .css('left', $('.current-menu-item > a').position().left)
        .data('origLeft', $magicLine.position().left)
        .data('origWidth', $magicLine.width());

    $('.header--nav > ul > li > a').click(function() {
        var $this = $(this);
        $this.parent().addClass('current-menu-item').siblings().removeClass('current-menu-item');
        $magicLine
            .data('origLeft', $this.position().left)
            .data('origWidth', $this.parent().width());
        return false;
    });

    /*Magicline hover animation*/
    $('.header--nav > ul > li').find('a').hover(function() {
        var $thisBar = $(this);
        leftPos = $thisBar.position().left;
        newWidth = $thisBar.parent().width();
        $magicLine.css({
            "left": leftPos,
            "width": newWidth
        });
    }, function() {
        $magicLine.css({
            "left": $magicLine.data('origLeft'),
            "width": $magicLine.data('origWidth')
        });
    });
});

// swiper

const partnersSlider = $('.js-partners-block');
const pressSlider = $('.js-press-slider');
const equipmentSlider = $('.js-equipment-slider');
const servicesSlider = $('.js-services-slider');
const projectsSlider = $('.js-projects-slider');
const innovativeSlider = $('.js-innovative-slider');

partnersSlider .each(function(){
    const partnersSwiper = new Swiper(this, {
        spaceBetween: 0,
        slidesPerView: 'auto',
        loop: true,
        speed: 1000,
        autoplay:{
            delay: 1000,
        },
        breakpoints: {
            768:{
                slidesPerView: '5',
            }
        }
    });
});

pressSlider .each(function(){
    const pressSwiper = new Swiper(this, {
        spaceBetween: 32,
        slidesPerView: 1.2,
        watchOverflow: true,
        pagination: {
            el: $(this).parents('.section').find('.swiper-pagination')[0],
            type: 'fraction'
        },
        navigation: {
            prevEl: $(this).parents('.section').find('.swiper-button-prev')[0],
            nextEl: $(this).parents('.section').find('.swiper-button-next')[0],
        },
        breakpoints: {
            768:{
                slidesPerView: 2,
            },
            1024:{
                slidesPerView: 3,
            }
        }
    });
});

equipmentSlider .each(function(){
    const equipmentSwiper = new Swiper(this, {
        spaceBetween: 32,
        slidesPerView: 1.2,
        watchOverflow: true,
        pagination: {
            el: $(this).parents('.section').find('.swiper-pagination')[0],
            type: 'fraction'
        },
        navigation: {
            prevEl: $(this).parents('.section').find('.swiper-button-prev')[0],
            nextEl: $(this).parents('.section').find('.swiper-button-next')[0],
        },
        breakpoints: {
            768:{
                slidesPerView: 2,
            },
            1024:{
                slidesPerView: 3,
            }
        }
    });
});

servicesSlider .each(function(){
    const servicesSwiper = new Swiper(this, {
        spaceBetween: 32,
        slidesPerView: 1.2,
        watchOverflow: true,
        pagination: {
            el: $(this).parents('.section').find('.swiper-pagination')[0],
            type: 'fraction'
        },
        navigation: {
            prevEl: $(this).parents('.section').find('.swiper-button-prev')[0],
            nextEl: $(this).parents('.section').find('.swiper-button-next')[0],
        },
        mousewheel: {
            releaseOnEdges: true,
            eventsTarget: '.section--services'
        },
        breakpoints: {
            768:{
                slidesPerView: 2,
            },
        }
    });

    servicesSwiper.on('slideChange', function () {
        if(this.activeIndex === 1) {
            locoScroll.stop();
        }
    });
    servicesSwiper.on('reachBeginning reachEnd', function () {
        locoScroll.start();
    });
});

innovativeSlider .each(function(){
    const innovativeSwiper = new Swiper(this, {
        spaceBetween: 0,
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect:{
          crossFade: true
        },
        loop: true,
        pagination: {
            el: $(this).parents('.section').find('.swiper-pagination')[0],
            type: 'fraction'
        },
        navigation: {
            prevEl: $(this).parents('.section').find('.swiper-button-prev')[0],
            nextEl: $(this).parents('.section').find('.swiper-button-next')[0],
        },
    });
});

projectsSlider .each(function(){
    const projectsSwiper = new Swiper(this, {
        spaceBetween: 32,
        slidesPerView: 1.2,
        watchOverflow: true,
        pagination: {
            el: $(this).parents('.section').find('.swiper-pagination')[0],
            type: 'fraction'
        },
        navigation: {
            prevEl: $(this).parents('.section').find('.swiper-button-prev')[0],
            nextEl: $(this).parents('.section').find('.swiper-button-next')[0],
        },
        breakpoints: {
            768:{
                slidesPerView: 2,
            },
        }
    });
});



// locomotive scroll effect

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true
});


// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("[data-scroll-container]", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

ScrollTrigger.batch(".js-section-y-axis .container", {
    onEnter: batch => {
        gsap.from(batch, {opacity: 0, duration: 1.5, y: '50px'})
    },
    scroller: "[data-scroll-container]",
    once: true,
})

ScrollTrigger.batch(".js-section-opacity .container", {
    onEnter: batch => {
        gsap.from(batch, {opacity: 0, duration: 1.5})
    },
    scroller: "[data-scroll-container]",
    once: true,
})

const sections = gsap.utils.toArray('.js-section-y-axis');
sections.forEach((section) => {
    gsap.from(section, {
        scrollTrigger: {
            start: 'top bottom',
            end: 'bottom top',
            trigger: section,
            scroller: "[data-scroll-container]",
            toggleClass: 'js-section-in-view'
        }
    });
});

ScrollTrigger.batch(".js-section-y-axis-txt .section--about__text", {
    onEnter: batch => {
        gsap.from(batch, {opacity: 0, duration: 1.5, y: '50px'})
    },
    scroller: "[data-scroll-container]",
    once: true,
})

ScrollTrigger.batch(".js-section-y-axis-txt .section--ceo__txt", {
    onEnter: batch => {
        gsap.from(batch, {opacity: 0, duration: 1.5, y: '50px'})
    },
    scroller: "[data-scroll-container]",
    once: true,
})

ScrollTrigger.batch(".section--services", {
    onEnter: batch => {
        locoScroll.stop();
    },
    onLeave: batch => {
        locoScroll.start();
    },
    start: 'top top',
    end: 'bottom bottom',
    scroller: "[data-scroll-container]",
})


if (document.querySelector('.section--contacts-with-aside__sidebar')) {
    ScrollTrigger.create({
        trigger: ".section--contacts-with-aside__content",
        start: "top top",
        // pin for the difference in heights between the content and the sidebar
        end: self => "+=" + (document.querySelector(".section--contacts-with-aside__content").offsetHeight - self.pin.offsetHeight),
        pin: ".section--contacts-with-aside__sidebar",
        // before version 3.4.1, the "float" property wasn't copied to the pin-spacer, so we manually do it here. Could do it in a style sheet instead if you prefer.
        onRefresh: self => self.pin.parentNode.style.float = "left",
        pinSpacing: false,
        scroller: "[data-scroll-container]",
    });
}


const sectionAboutGroups = gsap.utils.toArray('.section--about__group');
sectionAboutGroups.forEach(sectionAboutGroup => {
    gsap.to(sectionAboutGroup, {
        y: '-280px',
        scrollTrigger: {
            trigger: sectionAboutGroup,
            scrub: .7,
            scroller: "[data-scroll-container]",
            start: "top 200%",
        }
    })
});

const sectionCeoPhotos = gsap.utils.toArray('.section--ceo__photo');
sectionCeoPhotos.forEach(sectionCeoPhoto => {
    gsap.to(sectionCeoPhoto, {
        y: '-280px',
        scrollTrigger: {
            trigger: sectionCeoPhoto,
            scrub: .7,
            scroller: "[data-scroll-container]",
            start: "top 200%",
        }
    })
});

