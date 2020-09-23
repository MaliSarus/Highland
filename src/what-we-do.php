<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Заголовок</title>
    <link rel="stylesheet" href="./assets/css/swiper.css">
    <link rel="stylesheet" href="./assets/css/style.css">
    <script defer src="./assets/js/jquery-3.4.1.min.js"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
    <!--    <script defer src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/CustomEase.min.js"></script>-->
    <script defer src="./assets/js/swiper.min.js"></script>
    <script defer src="./assets/js/script.js"></script>
</head>
<body>
<header id="header" class="header">
    <div class="container">
        <div class="row">
            <div class="col-md-3 d-flex align-items-center justify-content-between">
                <div class="header__logo">
                    <a href="index.php">
                        <img src="./assets/img/interface/logo.svg" alt="">
                    </a>
                </div>
                <button class="hamburger hamburger--collapse" type="button">
                  <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                  </span>
                </button>
            </div>
            <div class="col-md-9 d-flex justify-content-end">
                <nav class="header__menu">
                    <ul>
                        <li><a href="about-us.php">Our Firm</a></li>
                        <li class="active"><a href="what-we-do.php">What we Do</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>
<main>
<?php
//require './modules/header.php';

// 3 СТРАНИЦА
?>

<section class="top-block top-block_one-column">
    <div class="top-block__desktop" style="background-image: url('./assets/img/top-block/1.png')">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="text">
                        <h1>Our Services</h1>
                        <p>At the core of our services is the drive to assist our clients in thriving from concept to
                            exit through strategic guidance, resources, opportunities, and relationships, while
                            navigating the many pitfalls the executive team & board faces in the process. We focus our
                            clients on who they want to become and work backward to achieve their Vision, identifying
                            the key strategic initiatives, objectives, milestones, actions, risks, and resources.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="top-block__mobile">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="text">
                        <p>At the core of our services is the drive to assist our clients in thriving from concept to
                            exit through strategic guidance, resources, opportunities, and relationships, while
                            navigating the many pitfalls the executive team & board faces in the process. We focus our
                            clients on who they want to become and work backward to achieve their Vision, identifying
                            the key strategic initiatives, objectives, milestones, actions, risks, and resources.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


</section>
<?php
require './modules/two-unordered-lists.php';
require './modules/features-list.php';
require './modules/accent-text.php';
require './modules/two-lists-with-icons.php';
require './modules/pic-and-text-with-title.php';
require './modules/text-on-pic.php';
// --3 СТРАНИЦА

require './modules/footer.php';
?>


