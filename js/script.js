
// select

let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle);
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerHTML,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerHTML = text;
        select.classList.remove('is-active');

    }

  };

  select();

// accordion

$('.faq-sect__item-title').on('click', acc);

    function acc() {
        // $('.faq-sect__item-text').not($(this).next()).stop().slideUp(300);
        // $('.faq-sect__item-title').not($(this)).removeClass('active');
        $(this).toggleClass('activ');
        $(this).next().slideToggle(300);
    }

// advantage active inf

let iconAdv = document.querySelectorAll('.img-inf');

iconAdv.forEach(e => {
    e.addEventListener('mouseover', () => {
      e.src="img/circle-information-adv-active.png";
    });
});

iconAdv.forEach(e => {
    e.addEventListener('mouseout', () => {
      e.src="img/circle-information-adv.svg";
    });
});

// swiper

var swiper = new Swiper(".mySwiper1", {
    navigation: {
      nextEl: ".slider-review-next",
      prevEl: ".slider-reviev-prev",
    },
});

var swiper = new Swiper(".mySwiper2", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".case__btn-next",
      prevEl: ".case__btn-prev",
    },
});

// sub-menu

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
    
    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length>0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener('click', function(e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
} else {
    document.body.classList.add('_pc');
}

// burger

const menuBody = document.querySelector('.menu__body');

const iconMenu = document.querySelector('.menu__icon');
if(iconMenu) {
    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

// прокрутка по клику в меню

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLinks => {
        menuLinks.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}


/////////при прокрутке хедер закрепляется сверху страницы


  if (window.matchMedia("(min-width: 1000px)").matches) {
    let headerScroll = document.querySelector('.header');
    let headerBodyScroll = document.querySelector('.header__body');
    let headerLogo = document.querySelector('.logo p');

window.addEventListener('scroll', function () {
   if (window.scrollY > 100) {
        headerScroll.classList.add("_scroll");
        headerBodyScroll.classList.add("_scroll");
    } else {
        headerScroll.classList.remove("_scroll");
        headerBodyScroll.classList.remove("_scroll");
    }
});

}


