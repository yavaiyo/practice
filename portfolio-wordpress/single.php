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
</head>
<body>
    <div class="wrapper">
        <header>
            <div class="header-content">
                <h1 class="title-name"><a href="/">KOYAMA<br>
                 RYO</a></h1>
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
        <div class="article">
            <h2 class="picture-title">
                <? the_title(); ?>
            </h2>
            <?php if (have_posts()) : ?>
                <?php while(have_posts()) : the_post(); ?>
            <div class="site-info">
                <div class="site">
                    <?php the_post_thumbnail(); ?>
                </div>
                <p><?php echo post_custom('site-info'); ?></p>
                <h3 class="info-title">URL</h3>
                <p class="blue"><a href="kadai_tutorial_output/index.html"><?php echo post_custom('URL'); ?></a></p>
                <h3 class="info-title">担当</h3>
                <p><?php echo post_custom('manager'); ?></p>
                <h3 class="info-title">サイトの目的</h3>
                <p><?php echo post_custom('purpose'); ?></p>
                <h3 class="info-title">使用技術</h3>
                <p><?php echo post_custom('technology'); ?></p>
                <h3 class="info-title">コーディングについて</h3>
                <p><?php echo post_custom('coding'); ?></p>
            </div>
            <?php endwhile; ?>
                 <?php endif; ?>
            <div class="home-link">
                <a href="<?php echo home_url(); ?>#works">Works一覧へ</a>
            </div>
        </div>
        <div class="back-top">
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m296-345-56-56 240-240 240 240-56 56-184-183-184 183Z"/></svg></a>
        </div>
        <footer>
            <p class="copyright"><span>&copy;</span>KOYAMA RYO</p>
        </footer>
    </div>
</body>
</html>