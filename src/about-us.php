<?php
require './modules/header.php';

// 2 СТРАНИЦА
//require './modules/top-block_one-column.php';
require './modules/text-5-7.php';
?>

<section class="text-5-7 quote-and-text">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-5">
                <div class="text-5-7__left">
                    <div class="quote">
                        <p>Our primary <b>focus</b> is on high-growth technology and healthcare companies</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-7">
                <div class="text-5-7__right">
                    <div class="text">
                        <p>We bring a unique set of insights in the preparation and guidance for our clients based on
                            our extensive background from each of the vital stakeholder positions, including investor,
                            board member, executive team, advisor, and acquirer. These insights prove exceptionally
                            valuable in the strategic planning phase of our engagements. Our team is passionate about
                            preparing our clients for success and guiding them through the process.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php
require './modules/title-text-image.php';
require './modules/compas-list.php';
require './modules/title-content-image-text.php';
?>
<section class="logo-slider" style="background-color: white">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="logo-slider__header">
                    <div class="logo-slider-arrow prev"></div>
                    <div class="logo-slider-arrow next"></div>
                    <h2>Highlighted Clients</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid container-sm">
        <div class="row">
            <div class="col-12 p-0 pr-md-3 pl-md-3">
                <div class="logo-slider__slider swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="logo-slider__slide">
                                <div class="image"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png" alt=""></div>
                                <div class="text">
                                    <h3>Mainstay Medical</h3>
                                    <p>Medical Device</p>
                                </div>
                                <div class="location">
                                    <svg class="location-icon">
                                        <use xlink:href="#location-icon" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
                                    </svg>
                                    Europe
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="logo-slider__slide">
                                <div class="image"><img src="./assets/img/logo-slider/2.png" alt=""></div>
                                <div class="text">
                                    <h3>Cerilon GTL</h3>
                                    <p>Energy</p>
                                </div>
                                <div class="location">
                                    <svg class="location-icon">
                                        <use xlink:href="#location-icon" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
                                    </svg>
                                    Canada
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="logo-slider__slide">
                                <div class="image"><img src="./assets/img/logo-slider/3.png" alt=""></div>
                                <div class="text">
                                    <h3>Radian IoT</h3>
                                    <p>Medical Device</p>
                                </div>
                                <div class="location">
                                    <svg class="location-icon">
                                        <use xlink:href="#location-icon" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
                                    </svg>
                                    US
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="logo-slider__slide">
                                <div class="image"><img src="./assets/img/logo-slider/4.png" alt=""></div>
                                <div class="text">
                                    <h3>ZygoFix, Ltd.</h3>
                                    <p>Medical Device</p>
                                </div>
                                <div class="location">
                                    <svg class="location-icon">
                                        <use xlink:href="#location-icon" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
                                    </svg>
                                    Israel
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="logo-slider-arrow prev"></div>
                <div class="logo-slider-arrow next"></div>
            </div>
        </div>
    </div>
</section>
<?php
// --2 СТРАНИЦА
require './modules/footer.php';
?>
