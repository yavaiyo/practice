<?php get_header(); ?>
        <div class="top-img">
            <img src="<?php echo get_template_directory_uri(); ?>/image/main.png">
        </div>
        <section class="works" id="works">
            <h2 class="title">WORKS</h2>
                <?php
                $args = array(
                    //投稿タイプ
                    'post_type'   => 'profile',
                    //1ページに表示する投稿数
                    'posts_per_page' => 1,
                );
                //データの取得
                $posts = get_posts($args);
                ?>
                <!-- ループ処理 -->
                <?php foreach ($posts as $post) : ?>
                    <?php setup_postdata($post); ?>
            <div class="works-img">
                <div class="img-width">
                    <a href="<?php echo get_permalink(); ?>" target="_blank">
                        <?php echo the_content(); ?>
                        <h3 class="img-name"><?php the_title(); ?></h3>
                        <p><?php echo post_custom('content'); ?></p>
                    </a>
                </div>
                <?php endforeach; ?>
                <?php wp_reset_postdata(); ?>
            
            <?php
            $args = array(
                //投稿タイプ
                'post_type'   => 'works',
                //1ページに表示する投稿数
                'posts_per_page' => 8,
            );
            //データの取得
            $posts = get_posts($args);
            ?>

                <!-- ループ処理 -->
                 <?php foreach ($posts as $post) : ?>
                    <?php setup_postdata($post); ?>
                <div class="img-width">
                    <a href="<?php echo get_permalink(); ?>">
                        <?php the_content(); ?>
                        <h3 class="img-name"><?php the_title(); ?></h3>
                        <p><?php echo post_custom('content'); ?></p>
                    </a>
                </div>
                <?php endforeach; ?>
                <?php wp_reset_postdata(); ?>
                
            </div>
        </section>
        <section class="skill" id="skill">
            <h2 class="title">SKILL</h2>
            <div class="skill-img">
                <div class="skill-content">
                    <img src="<?php echo get_template_directory_uri(); ?>/image/skills/html.png">
                    <div>
                        <h3 class="skill-name">HTML/CSS</h3>
                        <p>スマホで見ても表示崩れのないレスポンシブ対応も可能です。</p>
                    </div>
                </div>
                <div class="skill-content">
                    <img src="<?php echo get_template_directory_uri(); ?>/image/skills/js.png">
                    <div>
                        <h3 class="skill-name">JavaScript</h3>
                        <p>お問い合わせフォームや自動スクロールなど動きのあるWebさいとを作ることが可能です。</p>
                    </div>
                </div>
                <div class="skill-content">
                    <img src="<?php echo get_template_directory_uri(); ?>/image/skills/wordpress.png">
                    <div>
                        <h3 class="skill-name">WordPress</h3>
                        <p>WordPress製の店舗HP・企業HP・メディアサイトなど、Webサイトを0から構築することが可能です。</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="about" id="about">
            <h2 class="title">ABOUT</h2>
            <div class="about-img">
                <div class="selfie">
                    <img src="<?php echo get_template_directory_uri(); ?>/image/about.png">
                </div>
                <div>
                    <p class="name">小山諒</p>
                    <p>テキストテキストテキストテキストテキスト
                        テキストテキストテキストテキストテキスト
                        テキストテキストテキストテキストテキスト
                    </p>
                </div>
            </div>
        </section>
        <section class="contact" id="contact">
            <h2 class="title">CONTACT</h2>
            <p>お問い合わせは、
                <br>
                メールまたはＳＮＳにてお願いいたします。
            </p>
            <div class="sns">
                <a href="#"><img src="<?php echo get_template_directory_uri(); ?>/image/icon_instagram.gif"></a>
                <a href="#"><img src="<?php echo get_template_directory_uri(); ?>/image/icon_facebook.gif"></a>
            </div>
        </section>
        <div class="back-top">
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m296-345-56-56 240-240 240 240-56 56-184-183-184 183Z"/></svg></a>
        </div>
        <footer>
            <p class="copyright"><span>&copy;</span>KOYAMA RYO</p>
        </footer>
    </div>
</body>
</html>