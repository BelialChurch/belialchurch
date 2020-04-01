let serviceBtn = document.getElementsByClassName('service__card_btn'),
    serviceCard = document.getElementsByClassName('service__cards'),
    arrow = document.querySelector('arrow'),
    // переменные для карточек

    // переменные для меню-бургера
    burger = document.getElementById('burger'),
    burgerMenu = document.getElementById('burger-menu'),
    headerBtn = document.getElementById('header__button'),
    // переменные для меню-бургера

    // переменные для модального окна
    popupClose = document.getElementById('popup-exit'),
    // переменные для модального окна

    // переменные для слайдера (opinion)
    opinionSlideIndex = 1,
    opinionSlides = document.getElementsByClassName('opinion__slide'),
    opinionPrev = document.getElementById('opinionPrev'),
    opinionNext = document.getElementById('opinionNext'),
    opinionDotsWrap = document.querySelector('.opinion-slider-dots'),
    opinionDots = document.getElementsByClassName('opinion-slider-dot');

function addClass(id) {
    document.getElementById(id).classList.toggle('service_color');
};

function addClassNew(id,className) {
    document.getElementById(id).classList.toggle(className);
}

opinionShowSlides(opinionSlideIndex);

// СЛАЙДЕР OPINION
function opinionShowSlides(n) {
    if (n > opinionSlides.length) {
        opinionSlideIndex = 1;
    };

    if (n < 1) {
        opinionSlideIndex = opinionSlides.length;
    };

    for ( let i = 0; i < opinionSlides.length; i++) {
        opinionSlides[i].style.display = 'none';
    }

    for ( let i = 0; i < opinionDots.length; i++) {
        opinionDots[i].classList.remove('active-dot')
    }

    opinionSlides[opinionSlideIndex - 1].style.display = 'flex';
    opinionDots[opinionSlideIndex - 1].classList.add('active-dot');
};

function opinionPlusSlides(n) {
    opinionShowSlides(opinionSlideIndex += n)
};

opinionPrev.addEventListener('click', function(){
    opinionPlusSlides(-1);
});
opinionNext.addEventListener('click', function(){
    opinionPlusSlides(1);
});

function opinionCurrentSlide(n) {
    opinionShowSlides(opinionSlideIndex = n)
};

function dotSwap(n) {
    opinionCurrentSlide(n);
};


// СЛАЙДЕР OPINION

// SLIDER ABOUT
let aboutSlide = document.getElementsByClassName('about__slide'),
    aboutDot = document.getElementsByClassName('about__dot'),
    aboutSlideIndex = 1;



aboutShowSlides(aboutSlideIndex);
function aboutShowSlides(a) {

    if (a > aboutSlide.length) {
        aboutSlideIndex = 1;
    }

    if (a < 1) {
        aboutSlideIndex = aboutSlide.length;
    }


    for ( let i = 0; i < opinionSlides.length; i++) {
        aboutSlide[i].style.display = 'none';
    }

    for ( let i = 0; i < aboutDot.length; i++) {
        aboutDot[i].classList.remove('about-active')
    }

    aboutSlide[aboutSlideIndex - 1].style.display = 'block';
    aboutDot[aboutSlideIndex - 1].classList.add('about-active');
}

function aboutPlusSlides(a) {
    aboutShowSlides(aboutSlideIndex += a)
}

function aboutCurrentSlide(a) {
    aboutShowSlides(aboutSlideIndex = a)
}

function aboutSwapDots(a) {
    aboutCurrentSlide(a);
}


// SLIDER ABOUT