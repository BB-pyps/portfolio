/*-----------------Меню-гамбургер-------------------------------------*/

const hamburger = document.querySelector('.hamburger-container');
const menu = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');
const themeSwitcher = document.querySelector('.theme-switcher');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active-hamburger');
    menu.classList.toggle('open');
    if (themeSwitcher.classList.contains('theme-switcher-active') && menu.classList.contains('open')) {
        menu.classList.add('light-theme');
        hamburger.classList.add('active-hamburger-light');
        navLinks.forEach((el) => el.classList.add('light-theme'));
    } else {
        menu.classList.remove('light-theme');
        hamburger.classList.remove('active-hamburger-light');
        navLinks.forEach((el) => el.classList.remove('light-theme'));
    }
});

function closeMenu(event) {
    if (event.target.classList.contains('nav-link')) {
        hamburger.classList.remove('active-hamburger');
        menu.classList.remove('open');
    }
}

navLinks.forEach((el) => el.addEventListener('click', closeMenu));

/*-----------------Смена картинок-----------------------------------------*/

const portfolioImages = document.querySelectorAll('.portfolio-picture');
const portfolioBtns = document.querySelector('.portfolio-button-container');
const allButtons = document.querySelectorAll('.button-portfolio');

function changeImage(event) {
    if (event.target.classList.contains('button-portfolio')) {
        let season = event.target.dataset.season;
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${season}/${index + 1}.jpg`);
    }
}

portfolioBtns.addEventListener('click', changeImage);

/*----------------Кеширование картинок----------------------------------*/

const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadImages(season) {
    for (let i = 1; i <= 6; i++) {
        const img = new Image();
        img.src = `./assets/img/${season}/${i}.jpg`;
    }
}

seasons.forEach((el) => preloadImages(el));

/*----------------Подсветка активной кнопки----------------------------*/

function changeClassActive(event) {
    if (event.target.classList.contains('button-portfolio')) {
        allButtons.forEach((el) => el.classList.remove('active'));
        event.target.classList.add('active');
    }
}

portfolioBtns.addEventListener('click', changeClassActive);

/*-------------------Перевод страницы на 2 языка----------------------*/

const i18Obj = {
    'en': {
        'skills': 'Skills',
        'portfolio': 'Portfolio',
        'video': 'Video',
        'price': 'Price',
        'contacts': 'Contacts',
        'hero-title': 'Alexa Rise',
        'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
        'hire': 'Hire me',
        'skill-title-1': 'Digital photography',
        'skill-text-1': 'High-quality photos in the studio and on the nature',
        'skill-title-2': 'Video shooting',
        'skill-text-2': 'Capture your moments so that they always stay with you',
        'skill-title-3': 'Rotouch',
        'skill-text-3': 'I strive to make photography surpass reality',
        'skill-title-4': 'Audio',
        'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
        'winter': 'Winter',
        'spring': 'Spring',
        'summer': 'Summer',
        'autumn': 'Autumn',
        'price-description-1-span-1': 'One location',
        'price-description-1-span-2': '120 photos in color',
        'price-description-1-span-3': '12 photos in retouch',
        'price-description-1-span-4': 'Readiness 2-3 weeks',
        'price-description-1-span-5': 'Make up, visage',
        'price-description-2-span-1': 'One or two locations',
        'price-description-2-span-2': '200 photos in color',
        'price-description-2-span-3': '20 photos in retouch',
        'price-description-2-span-4': 'Readiness 1-2 weeks',
        'price-description-2-span-5': 'Make up, visage',
        'price-description-3-span-1': 'Three locations or more',
        'price-description-3-span-2': '300 photos in color',
        'price-description-3-span-3': '50 photos in retouch',
        'price-description-3-span-4': 'Readiness 1 week',
        'price-description-3-span-5': 'Make up, visage, hairstyle',
        'order': 'Order shooting',
        'contact-me': 'Contact me',
        'send-message': 'Send message',
        'email': 'E-mail',
        'phone': 'Phone',
        'message': 'Message'
    },
    'ru': {
        'skills': 'Навыки',
        'portfolio': 'Портфолио',
        'video': 'Видео',
        'price': 'Цены',
        'contacts': 'Контакты',
        'hero-title': 'Алекса Райс',
        'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
        'hire': 'Пригласить',
        'skill-title-1': 'Фотография',
        'skill-text-1': 'Высококачественные фото в студии и на природе',
        'skill-title-2': 'Видеосъемка',
        'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
        'skill-title-3': 'Ретушь',
        'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
        'skill-title-4': 'Звук',
        'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
        'winter': 'Зима',
        'spring': 'Весна',
        'summer': 'Лето',
        'autumn': 'Осень',
        'price-description-1-span-1': 'Одна локация',
        'price-description-1-span-2': '120 цветных фото',
        'price-description-1-span-3': '12 отретушированных фото',
        'price-description-1-span-4': 'Готовность через 2-3 недели',
        'price-description-1-span-5': 'Макияж, визаж',
        'price-description-2-span-1': 'Одна-две локации',
        'price-description-2-span-2': '200 цветных фото',
        'price-description-2-span-3': '20 отретушированных фото',
        'price-description-2-span-4': 'Готовность через 1-2 недели',
        'price-description-2-span-5': 'Макияж, визаж',
        'price-description-3-span-1': 'Три локации и больше',
        'price-description-3-span-2': '300 цветных фото',
        'price-description-3-span-3': '50 отретушированных фото',
        'price-description-3-span-4': 'Готовность через 1 неделю',
        'price-description-3-span-5': 'Макияж, визаж, прическа',
        'order': 'Заказать съемку',
        'contact-me': 'Свяжитесь со мной',
        'send-message': 'Отправить',
        'email': 'Электронная почта',
        'phone': 'Номер телефона',
        'message': 'Сообщение'
    }
}


const engButton = document.querySelector('.language-switcher__en');
const rusButton = document.querySelector('.language-switcher__ru');
const buttonsContainer = document.querySelector('.language-switcher-container');

function getTranslate(lang) {
    const vocabulary = document.querySelectorAll('[data-i18n]');
    vocabulary.forEach((el) => {
        if (el.placeholder) {
            el.placeholder = i18Obj[lang][el.dataset.i18n];
        } else {
            el.textContent = i18Obj[lang][el.dataset.i18n];
        }
    });
}

engButton.addEventListener('click', () => getTranslate(engButton.textContent));
rusButton.addEventListener('click', () => getTranslate(rusButton.textContent));


/*----------------Подсветка активной кнопки переключения языка--------------*/

function changeClassActiveLang(event) {
    if (event.target.classList.contains('language-switcher')) {
        const allButtons = document.querySelectorAll('.language-switcher');
        allButtons.forEach((el) => el.classList.remove('active-lang'));
        event.target.classList.add('active-lang');
    }
}

buttonsContainer.addEventListener('click', changeClassActiveLang);


/*---------------Переключение светлой и темной темы----------------------- */

const lightThemeElements = [
    '.section-skills',
    '.section-title__skills',
    '.section-portfolio',
    '.section-title__portfolio',
    '.section-video',
    '.section-title__video',
    '.section-price',
    '.section-title__price'
];

const allButtonsPrice = document.querySelectorAll('.button-price');

themeSwitcher.addEventListener('click', function () {
    lightThemeElements.forEach((el) => {
        let newElem = document.querySelector(el);
        if (newElem.classList.contains('section-title')) {
            newElem.classList.toggle('light-theme-border');
        }
        newElem.classList.toggle('light-theme');
    });
    allButtons.forEach((el) => {
        el.classList.toggle('light-theme');
        el.classList.toggle('button-light-theme');
    });
    allButtonsPrice.forEach((el) => {
        el.classList.toggle('button-light-theme');
    });
    themeSwitcher.classList.toggle('theme-switcher-active');
});


/*-------------------------Custom-video-----------------------*/

const player = document.querySelector('.player');
const video = player.querySelector('.player__video');
const bigPlayButton = player.querySelector('.player-button__big');
const miniPlayButton = player.querySelector('.player-button__mini');
const progressBar = player.querySelector('.player-progress-bar');
const volumeButton = player.querySelector('.player-volume-button');
const volumeControl = player.querySelector('.player-volume-control');
const fullScreenButton = player.querySelector('.player-fullscreen-button');

/*----------Измененение цвета прогресс бара до и после ползунка-----------*/

function changeRangeView(target) {
    target.style.background = `linear-gradient(to right, #BDAE82 0%, #BDAE82 ${target.value}%, #D8D7D4 ${target.value}%, #D8D7D4 100%)`;
};

function changeRangeViewVolume() {
    const volumeValue = volumeControl.value * 100;
    this.style.background = `linear-gradient(to right, #BDAE82 0%, #BDAE82 ${volumeValue}%, #D8D7D4 ${volumeValue}%, #D8D7D4 100%)`;
};

/*-----------------------Воспроизведение видео-----------------------------*/

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
};

function updateButtons() {
        bigPlayButton.classList.toggle('big-button-pause');
        miniPlayButton.classList.toggle('mini-button-pause');
};

function handleProgress() {
    progressBar.value = (video.currentTime / video.duration) * 100;
    changeRangeView(progressBar);
};

const progressUpdate = function () {
    video.currentTime = progressBar.value / 100 * video.duration;
    changeRangeView(progressBar);
};

function scrub(e) {
    const scrubTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
};

function changeVolumeIcon() {
    if(video.volume == 0){ 
        video.volume = volumeControl.value;
        volumeButton.classList.remove('mute'); 
    } else {
        video.volume = 0;
        volumeButton.classList.add('mute');
    }
};

function handleRangeUpdate() {
    video.volume = volumeControl.value;
    if(volumeControl.value == 0){
        volumeButton.classList.add('mute');
    } else {
        volumeButton.classList.remove('mute');
    }
};

function fullScreenToggle() {
    if(!document.fullscreenElement){
        player.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButtons);
video.addEventListener('pause', updateButtons);
video.addEventListener('timeupdate', handleProgress);
bigPlayButton.addEventListener('click', togglePlay);
miniPlayButton.addEventListener('click', togglePlay);
volumeControl.addEventListener('input', changeRangeViewVolume);
volumeControl.addEventListener('change', handleRangeUpdate);
volumeControl.addEventListener('mousemove', handleRangeUpdate);
progressBar.addEventListener('click', scrub);
progressBar.addEventListener('input', progressUpdate);
volumeButton.addEventListener('click', changeVolumeIcon);
volumeButton.addEventListener('click', changeVolumeIcon);

fullScreenButton.addEventListener('click', fullScreenToggle);
