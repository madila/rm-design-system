<?php

add_filter("script_loader_tag", "add_module_to_design_system_block_library", 10, 3);
function add_module_to_design_system_block_library($tag, $handle, $src)
{
	if ("design-system-block-library-view" === $handle) {
		$tag = '<script type="module" src="' . esc_url($src) . '"></script>';
	}
	return $tag;
}


/**
 * Wrap all core/paragraph blocks in a <div>.
 *
 * @param  string    $block_content HTML markup of the block
 * @param  WP_Block  $block         Block Class instance
 * @return string                   Modified block content
 */
function design_audio_block_wrapper( $block_content, $block ) {
	if(!str_contains($block['attrs']['className'], 'is-style-album-cover')) return $block_content;

	wp_interactivity_state( 'albumCover', array( 'isPlaying' => false ) );

	$context = array( 'testing' => false );

	$content = '<div class="wp-block-album-cover" 
		data-wp-interactive="albumCover"
            '.wp_interactivity_data_wp_context($context, 'albumCover') . '>
            <div class="wp-block-album-cover__controls">
                <button data-wp-on--click="actions.logTime">Play</button>
                <button>Stop</button>
                <button>Mute</button>
            </div>
        ' . $block_content . '
        </div>';
	return wp_interactivity_process_directives($content);
}
add_filter( 'render_block_core/audio', 'design_audio_block_wrapper', 1, 2 );


/**
 * Enqueue scripts and styles.
 *
 * @since design_system 1.0
 *
 * @return void
 */
function design_system_block_library_scripts() {

	$assets_path = get_theme_file_path('scripts/view/build/index.asset.php');

	if(!file_exists($assets_path)) return;
	$assets = require_once($assets_path);

	// Enqueue the block index.js file
	wp_enqueue_script(
		'design-system-block-library-view', // unique handle
		get_theme_file_uri('scripts/view/build/index.js' ),
		$assets['dependencies'], // required dependencies for blocks
		$assets['version'],
		true
	);

}

add_action( 'wp_enqueue_scripts', 'design_system_block_library_scripts' );

