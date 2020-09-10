(function ($) {

    var smWidth = 576;
    var mdWidth = 768;
    var lgWidth = 992;
    var xlWidth = 1200;

    function isSet(element) {
        return element.length !== 0;
    }

    function topSliderInit() {
        var slidesCount = $('.top-slider__slide');
        slidesCount = slidesCount.length;
        var sliderPagination = $('.top-slider__pagination');
        var mySwiper = new Swiper('.top-slider__slider', {
            // Optional parameters
            slidesPerView: 1,
            direction: 'horizontal',
            loop: true,
            grabCursor: true,
            on: {
                slideChange: function () {
                    var paginationBullet = sliderPagination.find('span').removeClass('active');
                    $(paginationBullet[mySwiper.realIndex]).addClass('active')
                },
            }
        });
        var mySwiperControl = document.querySelector('.top-slider__slider.swiper-container').swiper;

        var i = 0;

        for (i; i < slidesCount; i++) {
            if (i === mySwiperControl.realIndex) {
                sliderPagination.append('<span class="active" data-index="' + (i + 1) + '"></span>')
            } else {
                sliderPagination.append('<span data-index="' + (i + 1) + '"></span>')
            }
        }

        $('.top-slider__nav .arrow').on('click', function () {
            if ($(this).is('.arrow-prev')) {
                mySwiperControl.slidePrev();
            }
            if ($(this).is('.arrow-next')) {
                mySwiperControl.slideNext();
            }
        })
        sliderPagination.on('click', 'span', function () {
            sliderPagination.find('span').removeClass('active');
            $(this).addClass('active');
            mySwiperControl.slideTo(+$(this).attr('data-index'));
        });

        $(window).on('resize', function () {
            console.log('resize')
        })
    };

    function hamburgerInit() {
        var hamburger = $('.hamburger');
        hamburger.css({
            outline: 'none'
        });
        hamburger.on('click', function () {
            $(this).toggleClass('is-active');
            $('body').toggleClass('hidden');
            var headerMenu = $('.header__menu');
            var header = $('header');
            headerMenu.toggleClass('open');
            // if(headerMenu.hasClass('open') && header.hasClass('scrolled')){
            //     header.removeClass('scrolled');
            // }
            // if(!(headerMenu.hasClass('open')) && !(header.hasClass('scrolled')) && window.pageYOffset > 0){
            //     header.addClass('scrolled');
            // }
        });
    };

    function headerColoring() {
        if (window.pageYOffset > 0) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    }

    //Готовность документа
    $(document).ready(function () {
        hamburgerInit();
        $('.lm-link').append('<span></span>');
        $('.submit-link').append('<span></span>');
        $('.submit-link').on('click', function () {
            $(this).addClass('success')
        })
        if (isSet($('.top-slider'))) {
            topSliderInit();
        }

    })
    //Готовность документа

    //Масштаб окна
    $(window).on('resize', function () {

    })

    $(window).on('scroll', function () {
       headerColoring();
    })
    //Масштаб окна

})(jQuery);