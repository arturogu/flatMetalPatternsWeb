<?php
function arphabet_widgets_init() {

	register_sidebar( array(
		'name'          => 'Store Menu',
		'id'            => 'store_menu',
		'before_widget' => '<div class="categories-widget">',
		'after_widget'  => '</div>',

	) );

}
add_action( 'widgets_init', 'arphabet_widgets_init' );