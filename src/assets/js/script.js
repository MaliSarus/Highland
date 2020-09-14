(function ($) {

    var smWidth = 576;
    var mdWidth = 768;
    var lgWidth = 992;
    var xlWidth = 1200;
    var mailPattern = /^[\.a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
    var numPattern = /^[+][0-9]+$/i;


    function isSet(element) {
        return element.length !== 0;
    }

    function uiDefaultSet() {
        var mailInput = $('[type="email"]');
        var numInput = $('.num-input');
        var nameInput = $('.name-input');

        $('.lm-link').append('<span></span>');
        $('.submit-link').append('<span></span>');
        $('.submit-link').on('click', function () {
            $(this).addClass('success')
        })

        mailInput.on('input', function () {
            if ($(this).val().search(mailPattern) == 0) {
                $(this).parent().removeClass('invalid').addClass('valid');
            } else {
                $(this).parent().removeClass('valid').addClass('invalid');
            }
        });
        numInput.on('input', function () {
            if ($(this).val().search(numPattern) == 0) {
                $(this).parent().removeClass('invalid').addClass('valid');
            } else {
                $(this).parent().removeClass('valid').addClass('invalid');
            }
        });
        nameInput.on('input', function () {
            $(this).val($(this).val().replace(/[^A-z]/, ''));
            var valLength = $(this).val().length;
            if (valLength > 3) {
                $(this).parent().removeClass('invalid').addClass('valid');
            } else {
                $(this).parent().removeClass('valid').addClass('invalid');
            }
        });
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
    };

    function logoSliderInit() {
        var mySwiper = new Swiper('.logo-slider__slider', {
            // Optional parameters
            slidesPerView: 1,
            spaceBetween: 50,
            direction: 'horizontal',
            loop: true,
            grabCursor: true,
            breakpoints: {
                576: {
                    spaceBetween: 0,
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                },
            }
        });
        var mySwiperControl = document.querySelector('.logo-slider__slider.swiper-container').swiper;

        var logoSliderArrow = $('.logo-slider-arrow');
        logoSliderArrow.on('click', function () {
            if ($(this).is('.prev')) {
                mySwiperControl.slidePrev();
            }
            if ($(this).is('.next')) {
                mySwiperControl.slideNext();
            }
        });
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
        uiDefaultSet();
        if (isSet($('.top-slider'))) {
            topSliderInit();
        }
        if (isSet($('.logo-slider'))) {
            logoSliderInit();
        }
        if (isSet($('.tabs'))) {
            var tabsPage = $('.tabs__page');
            var tabs = $('.tabs ul');
            var pageList = tabsPage.find('ul');
            tabsPage.each(function () {
                if (isSet($(this).find('.lm-link'))) {
                    var link = $(this).find('.lm-link');
                    var href = link.attr('href');
                    $(this).find('.text').append(' <a href="' + href + '" class="lm-link mobile">Learn More<span></span></a>')
                }
            })
            tabs.on('click', 'li', function () {
                var tabsEl = tabs.find('li');
                var index = tabsEl.index($(this));
                tabsEl.removeClass('active');
                $(this).addClass('active');
                tabsPage.removeClass('active');
                $(tabsPage[index]).addClass('active');
                pageList = $('.tabs__page.active').find('ul');
            });
            var animationFlag = 0;
            pageList.on('mouseenter', 'li', function () {
                var pageListEl = $('.tabs__page.active ul > li')
                var index = pageListEl.index($(this));
                var imageEl = $('.tabs__page.active .image > img');
                var activeImageEl = $('.tabs__page.active .image > img.active');
                var activeImageIndex = imageEl.index(activeImageEl);

                if (index != activeImageIndex) {
                    if (animationFlag == 0) {
                        animationFlag = 1;
                        activeImageEl.fadeOut(function () {
                            $(this).attr('data-src', $(this).attr('src')).removeAttr('src').removeClass('active');
                            $(imageEl[index]).attr("src", $(imageEl[index]).attr('data-src')).removeAttr('data-src').stop(true, true).hide().fadeIn().addClass('active');
                            animationFlag = 0;
                        })
                    }
                }
                // $(imageEl[index]).removeClass('hidden').addClass('active')
            })
        }
        if (isSet($('.contact-form'))) {
            var contactForm = $('.contact-form__form');
            var labels = contactForm.find('label');
            var contactFormSubmit = contactForm.find('.submit-link');
            contactFormSubmit.on('click submit', function (event) {
                event.preventDefault();
                var failFlag = 0;
                labels.each(function () {
                    if ($(this).hasClass('invalid') || !($(this).hasClass('valid'))) {
                        failFlag = 1;
                        $(this).addClass('invalid').children('label').addClass('invalid');
                    }
                });
                if (failFlag == 1) {
                    console.log('fail');
                } else {
                    console.log('success');
                }
            });
        }

        if (isSet($('.job-form'))) {
            var jobForm = $('.job-form__form');
            var labels = jobForm.find('label');
            var jobFormSubmit = jobForm.find('.submit-link');
            var background = $('.job-form__background img').attr('src');
            if ($(window).width() < lgWidth) {
                $('.job-form__container').css({
                    backgroundImage: 'url("' + background + '")'
                })
            }
            jobFormSubmit.on('click submit', function (event) {
                event.preventDefault();
                var failFlag = 0;
                labels.each(function () {
                    if ($(this).hasClass('invalid') || !($(this).hasClass('valid'))) {
                        failFlag = 1;
                        $(this).addClass('invalid').children('label').addClass('invalid');
                    }
                });
                if (failFlag == 1) {
                    console.log('fail');
                } else {
                    console.log('success');
                }
            });
        }


    })
    //Готовность документа

    //Масштаб окна
    $(window).on('resize', function () {
        if (isSet($('.job-form'))) {
            if ($(window).width() < lgWidth) {
                var background = $('.job-form__background img').attr('src');
                $('.job-form__container').css({
                    backgroundImage: 'url("' + background + '")'
                })
            } else {
                $('.job-form__container').removeAttr('style')
            }
        }
    })

    $(window).on('scroll', function () {
        headerColoring();
    })
    //Масштаб окна

})(jQuery);