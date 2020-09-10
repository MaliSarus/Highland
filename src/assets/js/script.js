(function ($) {

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
            on:{
                slideChange: function () {
                    var paginationBullet = sliderPagination.find('span').removeClass('active');
                    $(paginationBullet[mySwiper.realIndex]).addClass('active')
                }
            }
        });
        var mySwiperControl = document.querySelector('.top-slider__slider.swiper-container').swiper;

        var i = 0;

        for (i; i < slidesCount; i++) {
            if (i === mySwiperControl.realIndex) {
                sliderPagination.append('<span class="active" data-index="' + (i + 1) + '"></span>')
            } else {
                sliderPagination.append('<span data-index="' + (i + 1)  + '"></span>')
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
        })

    };

    //Готовность документа
    $(document).ready(function () {
        topSliderInit()

    })
    //Готовность документа

    //Масштаб окна
    $(window).on('resize', function () {

    })
    //Масштаб окна

})(jQuery);