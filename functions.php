<?php
/**
 * Design System functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Design System
 * @since Design System 1.0
 */


if ( ! function_exists( 'get_theme_version' ) ) {
	/**
	 * Returns the theme version.
	 *
	 * @since Frames 1.0
	 *
	 * @return string
	 */
	function get_theme_version() {
		return wp_get_theme()->get( 'Version' );
	}

}

if ( ! function_exists( 'design_system_setup' ) ) {
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 *
	 * @since Frames 1.0
	 *
	 * @return void
	 */
	function design_system_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Twenty Twenty-One, use a find and replace
		 * to change 'design_system' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'design_system', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * This theme does not use a hard-coded <title> tag in the document head,
		 * WordPress will provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/**
		 * Add post-formats support.
		 */
		add_theme_support(
			'post-formats',
			array(
				'link',
				'aside',
				'gallery',
				'image',
				'quote',
				'status',
				'video',
				'audio',
				'chat',
			)
		);

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );
		set_post_thumbnail_size( 1568, 9999 );

		register_nav_menus(
			array(
				'primary' => esc_html__( 'Primary menu', 'design-system' ),
				'footer'  => __( 'Secondary menu', 'design-system' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
				'navigation-widgets',
			)
		);

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		$logo_width  = 300;
		$logo_height = 100;

		add_theme_support(
			'custom-logo',
			array(
				'height'               => $logo_height,
				'width'                => $logo_width,
				'flex-width'           => true,
				'flex-height'          => true,
				'unlink-homepage-logo' => true,
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		// Add support for Block Styles.
		add_theme_support( 'wp-block-styles' );

		// Add support for full and wide align images.
		add_theme_support( 'align-wide' );

		// Add support for responsive embedded content.
		add_theme_support( 'responsive-embeds' );

		// Add support for custom line height controls.
		add_theme_support( 'custom-line-height' );

		// Add support for experimental link color control.
		add_theme_support( 'experimental-link-color' );

		// Add support for custom units.
		add_theme_support( 'custom-units' );

		// Add support for experimental cover block spacing.
		add_theme_support( 'custom-spacing' );

		// Add support for editor styles.
		add_theme_support( 'editor-styles' );

	}
}
add_action( 'after_setup_theme', 'design_system_setup' );


/**
 * Enqueue scripts and styles.
 *
 * @since design_system 1.0
 *
 * @return void
 */
function design_system_scripts() {

	wp_enqueue_style( 'design-system', get_stylesheet_uri(), array(), get_theme_version() );

}

add_action( 'wp_enqueue_scripts', 'design_system_scripts' );


function design_system_builds() {
	return [
		'scripts/block-supports/build/index'
	];
}

/**
 * Enqueue scripts and styles.
 *
 * @since design_system 1.0
 *
 * @return void
 */
function design_system_editor_assets(): void {
	$builds = design_system_builds();

	foreach($builds as $build_name) {
		$assets_path = get_theme_file_path($build_name.'.asset.php');
		if(!file_exists($assets_path)) continue;
		$assets = require_once($assets_path);

		// Enqueue the block index.js file
		wp_enqueue_script(
			'design-system-block-library', // unique handle
			get_theme_file_uri($build_name.'.js'),
			$assets['dependencies'], // required dependencies for blocks
			$assets['version']
		);
	}

}

add_action( 'enqueue_block_editor_assets', 'design_system_editor_assets' );

require_once get_theme_file_path("scripts/view/enqueue.php");
require_once get_theme_file_path("block-library/block-styles/functions.php");

add_action( 'init', 'design_system_block_styles' );

/**
 * Enqueue block stylesheets.
 */

if ( ! function_exists( 'design_system_block_stylesheets' ) ) :
	/**
	 * Enqueue custom block stylesheets
	 *
	 * @since Design System 1.0
	 * @return void
	 */
	function design_system_block_stylesheets() {
		/**
		 * The wp_enqueue_block_style() function allows us to enqueue a stylesheet
		 * for a specific block. These will only get loaded when the block is rendered
		 * (both in the editor and on the front end), improving performance
		 * and reducing the amount of data requested by visitors.
		 *
		 * See https://make.wordpress.org/core/2021/12/15/using-multiple-stylesheets-per-block/ for more info.
		 */
		wp_enqueue_block_style(
			'core/button',
			array(
				'handle' => 'design_system-button-style-outline',
				'src'    => get_parent_theme_file_uri( 'assets/css/button-outline.css' ),
				'ver'    => wp_get_theme( get_template() )->get( 'Version' ),
				'path'   => get_parent_theme_file_path( 'assets/css/button-outline.css' ),
			)
		);
	}
endif;

add_action( 'init', 'design_system_block_stylesheets' );

/**
 * Register pattern categories.
 */

if ( ! function_exists( 'design_system_pattern_categories' ) ) :
	/**
	 * Register pattern categories
	 *
	 * @since Design System 1.0
	 * @return void
	 */
	function design_system_pattern_categories() {

		register_block_pattern_category(
			'page',
			array(
				'label'       => _x( 'Pages', 'Block pattern category', 'design-system' ),
				'description' => __( 'A collection of full page layouts.', 'design-system' ),
			)
		);
	}
endif;

add_action( 'init', 'design_system_pattern_categories' );


function design_system_category_title( $title ) {
	if (is_category()) {
		$title = single_cat_title('', false);
	} elseif (is_tag()) {
		$title = single_tag_title('', false);
	} elseif (is_author()) {
		$title = '<span>' . get_the_author() . '</span>';
	} elseif (is_tax()) { //for custom post types
		$title = sprintf(__('%1$s'), single_term_title('', false));
	} elseif (is_post_type_archive()) {
		$title = post_type_archive_title('', false);
	}
	return $title;
}
add_filter( 'get_the_archive_title', 'design_system_category_title' );


add_action('wp_head', function() {
	?>
    <svg class="screen-reader-text">
        <clipPath id="blob" clipPathUnits="objectBoundingBox"><path d="M0.223,0 C0.318,0.072,0.406,0.17,0.445,0.293 C0.485,0.417,0.478,0.567,0.415,0.679 C0.351,0.79,0.23,0.864,0.116,0.874 C0,0.885,-0.109,0.834,-0.215,0.787 C-0.322,0.741,-0.426,0.697,-0.481,0.614 C-0.535,0.532,-0.54,0.409,-0.519,0.293 C-0.499,0.175,-0.453,0.065,-0.376,-0.01 C-0.298,-0.086,-0.189,-0.129,-0.083,-0.124 C0.024,-0.122,0.127,-0.074,0.223,0"></path></clipPath>
    </svg>

	<style>
        @keyframes appear {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        .wp-block-design-system-frame {
            view-timeline-name: --subjectReveal;
            animation-timeline: --subjectReveal;

            animation-name: appear;
            animation-fill-mode: both;
	        animation-direction: normal;
	        animation-range: entry 30% cover 40%;
            animation-duration: 1ms; /* Firefox requires this to apply the animation */
        }

	</style>
	<?php
});

if(isset($_SERVER['HTTP_X_EXPOSED_BY']) && str_contains($_SERVER['HTTP_X_ORIGINAL_HOST'], 'sharedwithexpose.com')) {
	//we use 'init' action to use ob_start()
	add_action( 'init', 'process_post' );

	function process_post() {
		ob_start();
	}


	add_action('shutdown', function() {
		$final = '';

		// We'll need to get the number of ob levels we're in, so that we can iterate over each, collecting
		// that buffer's output into the final output.
		$levels = ob_get_level();

		for ($i = 0; $i < $levels; $i++) {
			$final .= ob_get_clean();
		}

		// Apply any filters to the final output
		echo apply_filters('final_output', $final);
	}, 0);

	add_filter('final_output', function($output) {
		//this is where changes should be made
		return str_replace( 'https://design-system.local',WP_HOME, str_replace('width=device-width, initial-scale=1', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover', $output) );
	});

}
