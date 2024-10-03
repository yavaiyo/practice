<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css"/>
    <meta charset="utf-8">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/main-style.css">
    <link rel="preconnect" href="<?php echo get_template_directory_uri(); ?>/https://fonts.googleapis.com">
    <link rel="preconnect" href="<?php echo get_template_directory_uri(); ?>/https://fonts.gstatic.com" crossorigin>
    <link href="<?php echo get_template_directory_uri(); ?>/https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <?php wp_head(); ?>
</head>
<body>
    <div class="wrapper">
        <header>
            <div class="header-content">
                <h1 class="title-name"><a href="#">KOYAMA RYO</a></h1>
                <nav class="nav">
                    <ul class="navlink">
                        <li><a href="<?php echo home_url(); ?>#works">WORKS</a></li>
                        <li><a href ="<?php echo home_url(); ?>#skill">SKILL</a></li>
                        <li><a href="<?php echo home_url(); ?>#about">ABOUT</a></li>
                        <li><a href="<?php echo home_url(); ?>#contact">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
        </header>