<?php get_header() ?>
    <body>
    <div class="container-fluid" id="home" style="background-image:url(<?php echo bloginfo( 'template_url' ) . '/'; ?>assets/images/banner1.png;">
        <div class="container" id="mainText">
            <div class="row">
                <div class="col">
                    <div id="mainText1">FLAT METAL PATTERNS</div>
                    <div id="mainText2">La nueva herramienta digital de insulación industrial</div>
                    <div id="mainText3">y tienda en línea</div>
                </div>
                <div id="bar"></div>
            </div>
        </div>
    </div>
    <div class="container-fluid" id="productos">
        <div id="productos-title-container">
            <div id="productos-title">Productos</div>
            <div id="productos-title2">Recomendados</div>
        </div>
        <!-- productos con wp -->

        <div class="row products-row">
		    <?php
		    $counter = 0;
		    $meta_query = WC()->query->get_meta_query();
		    $tax_query = WC()->query->get_tax_query();
		    $tax_query[] = array(
			    'taxonomy' => 'product_visibility',
			    'field' => 'name',
			    'terms' => 'featured',
			    'operator' => 'IN',
		    );
		    $args = array(
			    'posts_per_page'    => 4,
			    'post_type' => 'product',
			    'post_status' => 'publish',
			    'meta_query' => $meta_query,
			    'tax_query' => $tax_query,
		    );

		    $loop = new WP_Query($args);


		    if($loop->have_posts())
		    {
			    while ($loop->have_posts()) : $loop->the_post();
				    global $product;


				    $_product = wc_get_product($loop->post->ID);
				    $image = wp_get_attachment_image_src(get_post_thumbnail_id($loop->post->ID), 'single-post-thumbnail');
				    ?>


                    <div class="col-md-3">
                        <a href="<?php echo get_permalink();?>">
                            <div class="img-container">
                                <span
                                        style=" display: inline-block; height: 25%;vertical-align: middle;">
                                </span>
                                <img src="<?php echo $image[0];?>" alt="">
                            </div>
                        </a>
                        <div class="row">
                            <div class="product-details-alignment"><?php woocommerce_template_loop_add_to_cart( $loop->post, $product ); ?></div>
<!--                            <div id="product-search"><img src="--><?php //echo bloginfo( 'template_url' ) . '/'; ?><!--assets/images/search.png;"></div>-->
                            <div id="product-price">$<?php echo $_product->get_price();?></div>
                            <div class="small-line"></div>
                            <div class="product-details-alignment" id="product-title"><?php echo get_the_title();?></div>
                        </div>
                    </div>

				    <?php

				    $counter++;
			    endwhile;


			    wp_reset_query();
		    }
		    ?>
        </div>

    </div>
    <div class="container-fluid" id="nosotros">
        <div class="row">
            <div class="col-sm-4" id="nosotros-titles">
                <div id="nosotros-titles1">Nosotros</div>
                <div id="nosotros-titles2">dedicados a facilitar</div>
                <div id="nosotros-titles3">tu trabajo</div>
            </div>
            <div id="nosotros-bar"></div>
            <div class="col" id="nosotros-txt">
                Desde el 2011 FLAT METAL PATTERNS ha observado la comunidad de la industria de la insolación.
                El 19 de enero del 2016 decidimos emprender este proyecto al ver la necesidad de brindar más conocimiento a los que se dedican a esta industria para obtener beneficios.
            </div>
        </div>
    </div>
    <div class="container-fluid" id="banner" style="background-image:url(<?php echo bloginfo( 'template_url' ) . '/'; ?>assets/images/red-pipes.png;">
        <div class="row justify-content-center">
            <div id="banner1">Nuestra herramienta facilita la</div>
            <div id="banner2">Creación de patrones de metal</div>
            <div id="banner3">ahorrando tiempo y ganando<br> prestigio en la industria</div>
        </div>
    </div>
    <div class="container-fluid" id="blog">
        <div id="blog-title">Blog</div>
        <!-- posts del blog-->
        <div id="blog-posts" class="spacing">
            <div class="container">

				    <?php
				    if(have_posts())
				    {
					    $counter = 0;
				    }

				    $args = array(
					    'posts_per_page'    => 4,
					    'offset'            => 0,
					    'category_name'     => 'App',
					    'orderby'           => 'date',
					    'order'             => 'DESC',
					    'post_status'       => 'publish',
					    'suppress_filters'  => true
				    );

				    $the_query = new WP_Query($args);

				    if($the_query->have_posts())
				    {
					    while($the_query->have_posts())
					    {
						    $the_query->the_post();

						    $counter ++;
						    if ($counter == 1){
						        echo '<div class="row justify-content-center"><div class="col-sm-6 col-md-5 col-xs-12 post-column1">';
						    } elseif ($counter == 2){
						        echo '<div class="col-sm-6 col-md-5 col-xs-12"><div class="col post-column2">';
						    } elseif ($counter == 3){
						        echo '<div class="col post-column3">';
						    } elseif ($counter == 4){
						        echo '<div class="row justify-content-center"><div class="col-sm-12 col-md-10 justify-content-center post-column4">';
						    }
						    ?>
                            <a href="<?php echo get_the_permalink();?>" class="blog-post1">
                                <div class="blog-description">
                                    <?php echo get_the_title();?> <BR>
                                    <?php echo get_the_excerpt();?>
                                </div>
                            </a>
                            <?php
							    if($counter == 1 || $counter == 4 || $counter == 2){
								    echo '</div>';
							    } elseif($counter == 4){
								    echo '</div></div></div></div>';
							    } elseif($counter == 3){
								    echo '</div></div></div>';
							    }
                                ?>

                            <?php
					    }
				    }
				    wp_reset_postdata();
				    ?>
            </div>
        </div>
    </div>

    </div>
    <div class="container-fluid" id="contacto" style="background-image:url(<?php echo bloginfo( 'template_url' ) . '/'; ?>assets/images/pipes2.png;">
        <div id="contacto-title">Contáctanos</div>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <form>
                    <div class="form-group" id="form">
                        <input class="form-control inputArea" type="text" placeholder="Nombre">
                        <input class="form-control inputArea" type="text" placeholder="Correo electrónico">
                        <input class="form-control inputArea" type="text" placeholder="Teléfono">
                        <textarea class="form-control inputArea" placeholder="Mensaje" rows="4"></textarea>
                    </div>
                    <button type="submit" value="submit" class="btn btn-primary" id="contacto-submit">Enviar</button>
                </form>
            </div>
        </div>
        <div id="contacto-img">
            <img src="<?php echo bloginfo( 'template_url' ) . '/'; ?>assets/images/mail.png;">
        </div>
        <div id="contacto-mail">
            contacto@flatmetalpatterns.com
        </div>
    </div>
    <div class="container-fluid" id="bottomLogo">
        <img src="<?php echo bloginfo( 'template_url' ) . '/'; ?>assets/images/logos/Principal.png;" id="bottomImg">
    </div>
    </body>


<?php get_footer() ?>