(function ($) {

    var smWidth = 576;
    var mdWidth = 768;
    var lgWidth = 992;
    var xlWidth = 1200;
    var mailPattern = /^[\.a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
    var numPattern = /^[+][0-9]+$/i;
    var scrolledOrigin = null;



    function isSet(element) {
        return element.length !== 0;
    }

    function uiDefaultSet() {
        if(!(isSet($('.top-slider'))) && !(isSet($('.top-block')))){
            $('body').addClass('no-top')
        }
        if (!(isSet($('.top-slider')))) {
            $('header').addClass('dark')
        }
        var mailInput = $('[type="email"]');
        var numInput = $('.num-input');
        var nameInput = $('.name-input');
        var inputs = $('form input');

        inputs.on('input change', function () {
            var submitButton = $(this).parents('form').find('.submit-link');
            if (submitButton.hasClass('error') || submitButton.hasClass('success')) {
                submitButton.removeClass(['error', 'success']);
            }
        })

        $('.lm-link').append('<span></span>');
        $('.submit-link').append('<span></span>');
        $('.submit-link').on('click', function () {
            $(this).addClass('load')
        })

        mailInput.on('input', function () {
            if ($(this).val().search(mailPattern) == 0) {
                $(this).parent().removeClass('invalid').addClass('valid');
            } else {
                $(this).parent().removeClass('valid').addClass('invalid');
            }
        });
        numInput.on('focus', function () {
            if ($(this).val() === '') {
                $(this).val('+')
            }
        })
        numInput.on('input', function () {
            if ($(this).val().search(numPattern) == 0) {
                $(this).parent().removeClass('invalid').addClass('valid');
            } else {
                $(this).parent().removeClass('valid').addClass('invalid');
            }
        });
        nameInput.on('input', function () {
            $(this).val($(this).val().replace(/[^A-z\s]/, ''));
            var valLength = $(this).val().length;
            if (valLength > 2) {
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

    function jobFormBackgroundWidth() {
        if ($(window).width() >= lgWidth) {
            var bgImage = $('.job-form__background .image');
            var jobForm = $('.job-form__form').parent();
            var jobFormMargin = jobForm.outerWidth(true) - jobForm.outerWidth();
            var jobFormPos = jobForm.position().left;
            console.log(jobFormPos);
            bgImage.width(jobFormPos + jobFormMargin / 2)
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
            var tabs = $('.tabs__tabs ul');
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
                $('.tabs__page.active').fadeOut(function () {
                    $(this).removeClass('active');
                    $(tabsPage[index]).addClass('active').fadeIn();
                })
            });
            var animationFlag = 0;
            // pageList.on('mouseenter', 'li', function () {
            //     var pageListEl = $('.tabs__page.active ul > li');
            //     var index = pageListEl.index($(this));
            //     var imageEl = $('.tabs__page.active .image > img');
            //     var activeImageEl = $('.tabs__page.active .image > img.active');
            //     var activeImageIndex = imageEl.index(activeImageEl);
            //
            //     if (index != activeImageIndex) {
            //         animationFlag = 1;
            //         activeImageEl.fadeOut(function () {
            //             $(this).attr('data-src', $(this).attr('src')).removeAttr('src').removeClass('active');
            //             $(imageEl[index]).attr("src", $(imageEl[index]).attr('data-src')).removeAttr('data-src').stop(true, true).hide().fadeIn().addClass('active');
            //             animationFlag = 0;
            //         })
            //     }
            // })
        }

        if (isSet($('.contact-form'))) {
            var contactForm = $('.contact-form__form form');
            var contactFormSubmit = contactForm.find('.submit-link');
            contactForm.on('submit', function (event) {
                event.preventDefault();
                var labels = $('.contact-form__form form label');
                var failFlag = 0;
                var that = $(this);
                labels.each(function () {
                    if ($(this).hasClass('invalid') || !($(this).hasClass('valid'))) {
                        failFlag = 1;
                        $(this).addClass('invalid').children('label').addClass('invalid');
                    }
                });
                if (failFlag == 1) {
                    console.log('fail');
                    setTimeout(function () {
                        that.find('.submit-link').removeClass('load').addClass('error');
                    }, 500)
                } else {
                    console.log('success');
                    setTimeout(function () {
                        that.find('.submit-link').removeClass('load').addClass('success');
                    }, 500)
                }
            });
        }

        if (isSet($('.job-form'))) {
            var jobForm = $('.job-form__form form');
            var jobFileInput = $('.job-form__form form input[type="file"]');
            var jobFormSubmit = jobForm.find('.submit-link');
            var background = $('.job-form__background img').attr('src');
            if ($(window).width() < lgWidth) {
                $('.job-form__container').css({
                    backgroundImage: 'url("' + background + '")'
                })
            }
            jobForm.on('click', '.can-delete', function (e) {
                e.preventDefault();
                $(this).val('');
                $(this).siblings('.file__rezult').text('Add resume');
                $(this).removeClass('can-delete');
            })
            jobFileInput.on('change', function () {
                var file = $(this)[0].files[0];
                $(this).siblings('.file__rezult').text(file.name);
                $(this).addClass('can-delete');
            })
            jobForm.on('submit', function (event) {
                event.preventDefault();
                var labels = $('.job-form__form form label');
                var failFlag = 0;
                var that = $(this);
                labels.each(function () {
                    if ($(this).hasClass('invalid') || !($(this).hasClass('valid'))) {
                        failFlag = 1;
                        $(this).addClass('invalid').children('label').addClass('invalid');
                    }
                });
                if (failFlag == 1) {
                    console.log('fail');

                    setTimeout(function () {
                        that.find('.submit-link').removeClass('load').addClass('error');
                    }, 500)
                } else {
                    console.log('success');
                    setTimeout(function () {
                        that.find('.submit-link').removeClass('load').addClass('success');
                    }, 500)
                }
            });

            jobFormBackgroundWidth();
        }
        if (isSet($('.compas-list'))) {
            var img = $('.compas__arrow');
            var compasList = $('.compas-list__text ul');
            var compasInterval = null;
            var compasStartInterval = null;

            // gsap.to(".compas__arrow", {ease: 'elastic(1,0.3)', duration: 2, rotation: -90});

            if (!compasStartInterval) {
                gsap.killTweensOf('.compas__arrow');
                gsap.to(".compas__arrow", {ease: 'elastic(1,0.3)', duration: 5, rotation: -90});
                gsap.to(".compas__arrow", {delay: 2, ease: 'elastic(5,1)', duration: 5, rotation: -100});
                gsap.to(".compas__arrow", {delay: 4, ease: 'elastic(3,3)', duration: 5, rotation: -80});
            }

            compasStartInterval = setInterval(function () {
                gsap.killTweensOf('.compas__arrow');
                gsap.to(".compas__arrow", {ease: 'elastic(1,0.3)', duration: 5, rotation: -90});
                gsap.to(".compas__arrow", {delay: 2, ease: 'elastic(5,1)', duration: 5, rotation: -100});
                gsap.to(".compas__arrow", {delay: 4, ease: 'elastic(3,3)', duration: 5, rotation: -80});
            }, 9000);

            compasList.on('mouseleave', function () {
                clearInterval(compasStartInterval);
                compasStartInterval = null;
                if (!compasInterval) {
                    gsap.killTweensOf('.compas__arrow');
                    gsap.to(".compas__arrow", {ease: 'elastic(1,0.3)', duration: 5, rotation: -90});
                    gsap.to(".compas__arrow", {delay: 2, ease: 'elastic(5,1)', duration: 5, rotation: -100});
                    gsap.to(".compas__arrow", {delay: 4, ease: 'elastic(3,3)', duration: 5, rotation: -80});
                }

                compasStartInterval = setInterval(function () {
                    gsap.killTweensOf('.compas__arrow');
                    gsap.to(".compas__arrow", {ease: 'elastic(1,0.3)', duration: 5, rotation: -90});
                    gsap.to(".compas__arrow", {delay: 2, ease: 'elastic(5,1)', duration: 5, rotation: -100});
                    gsap.to(".compas__arrow", {delay: 4, ease: 'elastic(3,3)', duration: 5, rotation: -80});
                }, 9000);

            })

            compasList.on('mouseenter', 'li', function () {
                clearInterval(compasStartInterval);
                clearInterval(compasInterval);
                compasStartInterval = null;
                compasInterval = null;
                img.removeAttr('style');
                var offset = img.offset();
                var center_x = (offset.left) + (img.width() / 2);
                var center_y = (offset.top) + (img.height() / 2);
                var mouse_x = $(this).offset().left + $(this).width() / 2;
                if ($(window).width() >= mdWidth) {
                    mouse_x = $(this).offset().left;
                }
                var mouse_y = $(this).offset().top + $(this).height() / 2;
                // var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
                var degree = Math.atan2(mouse_y - center_y, mouse_x - center_x) * 180 / Math.PI;
                var getter = gsap.getProperty(".compas__arrow");
                var currentDegree = getter('rotate');
                var diff = Math.abs(degree - currentDegree) / 10;
                var duration = (diff < 1) ? 2 * 2 : 2;
                var amplitude = (diff < 1) ? 2 * diff : 2;
                gsap.killTweensOf('.compas__arrow');
                gsap.to(".compas__arrow", {
                    ease: 'elastic(' + amplitude + ',0.3)',
                    duration: duration,
                    rotation: degree
                });
            })


        }
        

        if(isSet($('.accent-text'))){
            $(window).scroll(parallaxScrolling);

            function parallaxScrolling() {
                var scrolled = $(window).scrollTop();
                console.log(scrolled + $(window).height() >= $('.accent-text').position().top);
                if (scrolled + $(window).height() >= $('.accent-text').position().top)
                {
                    if (!scrolledOrigin)
                    {
                        scrolledOrigin = scrolled + $(window).height()
                    }
                    $('.accent-text').css('background-position','0 ' + (0 - ((scrolled - scrolledOrigin) * .1)) + 'px');
                }
                else{
                    scrolledOrigin = null;
                }

            }
        }


    })
    //Готовность документа

    //Масштаб окна
    $(window).on('resize', function () {
        if (isSet($('.job-form'))) {
            jobFormBackgroundWidth();
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