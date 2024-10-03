<!DOCTYPE html>
<html class="profile-html">
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css"/>
    <meta charset="utf-8">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/main-style.css">
    <link rel="preconnect" href="<?php echo get_template_directory_uri(); ?>/https://fonts.googleapis.com">
    <link rel="preconnect" href="<?php echo get_template_directory_uri(); ?>/https://fonts.gstatic.com" crossorigin>
    <link href="<?php echo get_template_directory_uri(); ?>/https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body class="profile">
    <header class="profile-header">
        <h1>MyProfile</h1>
        <div class="profile-nav">
            <p><a href="#about">About</a></p>
            <p><a href="#works">Works</a></p>
        </div>
    </header>
    <div class="profile-top">
        <img src="<?php echo get_template_directory_uri(); ?>/image/sauna.jpg">
    </div>
    <section class="profile-about" id="about">
        <h2 class="title">About</h2>
        <div class="about-content">
            <div class="selfie">
                <img src="<?php echo get_template_directory_uri(); ?>/image/works/S__69746693.jpg">
            </div>
            <div>
                <p class="profile-name">Ryo Koyama</p>
                <ul class="my-info">
                    <li><?php echo post_custom('li1'); ?></li>
                    <li><?php echo post_custom('li2'); ?></li>
                    <li><?php echo post_custom('li3'); ?></li>
                </ul>
            </div>
        </div>
    </section>
    <section class="profile-works" id="works">
        <h2 class="title">Works</h2>
        <div class="works-content">
            <div class="works-img-width">
                <img src="<?php echo get_template_directory_uri(); ?>/image/sauna-works.jpg">
                <p><?php echo post_custom('works-p1'); ?></p>
            </div>
            <div class="works-img-width">
                <img src="<?php echo get_template_directory_uri(); ?>/image/sauna-bild.jpg">
                <p><?php echo post_custom('works-p2'); ?></p>
            </div>
            <div class="works-img-width">
                <img src="<?php echo get_template_directory_uri(); ?>/image/food.jpg">
                <p><?php echo post_custom('works-p3'); ?></p>
            </div>
        </div>
    </section>
    <footer class="profile-footer">
        <p class="profile-copyright"><span>&copy;</span>Myprofile, All rights reserved.</p>
    </footer>
</body>
</html>