<?php

require_once "enabled-styles.php";

use DesignSystem\BlockStyles;

/**
 * Register block styles.
 */

if ( ! function_exists( 'design_system_block_styles' ) ) :
	/**
	 * Register custom block styles
	 *
	 * @since Design System 1.0
	 * @return void
	 */
	function design_system_block_styles() {

		register_block_style(
			'core/details',
			array(
				'name'         => 'arrow-icon-details',
				'label'        => __( 'Arrow icon', 'design-system' ),
				/*
				 * Styles for the custom Arrow icon style of the Details block
				 */
				'inline_style' => '
				.is-style-arrow-icon-details {
					padding-top: var(--wp--preset--spacing--10);
					padding-bottom: var(--wp--preset--spacing--10);
				}

				.is-style-arrow-icon-details summary {
					list-style-type: "\2193\00a0\00a0\00a0";
				}

				.is-style-arrow-icon-details[open]>summary {
					list-style-type: "\2192\00a0\00a0\00a0";
				}',
			)
		);
		register_block_style(
			'core/post-terms',
			array(
				'name'         => 'pill',
				'label'        => __( 'Pill', 'design-system' ),
				/*
				 * Styles variation for post terms
				 * https://github.com/WordPress/gutenberg/issues/24956
				 */
				'inline_style' => '
				.is-style-pill a,
				.is-style-pill span:not([class], [data-rich-text-placeholder]) {
					display: inline-block;
					background-color: var(--wp--preset--color--base-2);
					padding: 0.375rem 0.875rem;
					border-radius: var(--wp--preset--spacing--20);
				}

				.is-style-pill a:hover {
					background-color: var(--wp--preset--color--contrast-3);
				}',
			)
		);
		register_block_style(
			'core/list',
			array(
				'name'         => 'checkmark-list',
				'label'        => __( 'Checkmark', 'design-system' ),
				/*
				 * Styles for the custom checkmark list block style
				 * https://github.com/WordPress/gutenberg/issues/51480
				 */
				'inline_style' => '
				ul.is-style-checkmark-list {
					list-style-type: "\2713";
				}

				ul.is-style-checkmark-list li {
					padding-inline-start: 1ch;
				}',
			)
		);


		if(BlockStyles::is_enabled('perspective')) {
			register_block_style(
				'core/group',
				array(
					'name'         => 'perspective',
					'label'        => __( 'Perspective', 'design-system' ),
					/*
					 * Styles for the custom perspective group style
					 */
					'inline_style' => '
				.is-style-perspective {
					transform: perspective(1000px) rotateX(var(--tilt-y)) rotateY(var(--tilt-x, 0)) !important			
				}',
				)
			);
		}

		if(BlockStyles::is_enabled('scroll-motion-disappear')) {
			foreach(BlockStyles::enabled_on('scroll-motion-disappear') as $block_name) {
				register_block_style(
					$block_name,
					array(
						'name'         => 'scroll-motion-disappear',
						'label'        => __( 'Scroll Motion Disappear', 'design-system' ),
						/*
						 * Styles for the custom scroll motion heading style
						 */
						'inline_style' => BlockStyles::get_inline_styles('scroll-motion-disappear'),
					)
				);
			}
		}

		if(BlockStyles::is_enabled('scroll-motion-appear')) {
			foreach(BlockStyles::enabled_on('scroll-motion-appear') as $block_name) {
				register_block_style(
					$block_name,
					array(
						'name'         => 'scroll-motion-appear',
						'label'        => __( 'Scroll Motion Appear', 'design-system' ),
						/*
						 * Styles for the custom scroll motion heading style
						 */
						'inline_style' => BlockStyles::get_inline_styles('scroll-motion-appear'),
					)
				);
			}
		}

		if(BlockStyles::is_enabled('magnet')) {
			register_block_style(
				'core/group',
				array(
					'name'         => 'magnet',
					'label'        => __( 'Magnet', 'design-system' ),
					/*
					 * Styles for the custom perspective group style
					 */
					'inline_style' => '
						.is-style-magnet {
							transition-delay: var(--motion-delay, 0);
							transform: translateY(var(--magnet-y)) translateX(var(--magnet-x, 0)) !important			
						}
					',
				)
			);

			register_block_style(
				'core/heading',
				array(
					'name'         => 'magnet',
					'label'        => __( 'Magnet', 'design-system' ),
					/*
					 * Styles for the custom magnet heading style
					 */
					'inline_style' => '
						.is-style-magnet {
							transform: translateY(calc(var(--motion-delay) * var(--magnet-y))) translateX(calc(var(--motion-delay) * var(--magnet-x))) !important					
						}',
					)
			);
		}

		register_block_style(
			'core/group',
			array(
				'name'         => 'tilt',
				'label'        => __( 'Tilt', 'design-system' )
			)
		);

		register_block_style(
			'core/image',
			array(
				'name'         => 'perspective',
				'label'        => __( 'Perspective', 'design-system' ),
				/*
				 * Styles for the custom perspective group style
				 */
				'inline_style' => '
				.is-style-perspective {
					/*transform: perspective(1000px) rotateX(var(--tilt-y)) rotateY(var(--tilt-x, 0))	*/			
				}',
			)
		);

		register_block_style(
			'core/navigation-link',
			array(
				'name'         => 'arrow-link',
				'label'        => __( 'With arrow', 'design-system' ),
				/*
				 * Styles for the custom arrow nav link block style
				 */
				'inline_style' => '
				.is-style-arrow-link .wp-block-navigation-item__label:after {
					content: "\2197";
					padding-inline-start: 0.25rem;
					vertical-align: middle;
					text-decoration: none;
					display: inline-block;
				}',
			)
		);

		register_block_style(
			'core/audio',
			array(
				'name'         => 'album-cover',
				'label'        => __( 'Album Cover', 'design-system' ),
				/*
				 * Styles for the custom arrow nav link block style
				 */
				'inline_style' => '
				.is-style-album-cover {
					visibility: hidden;
					pointer-events: none;
				}',
			)
		);

		register_block_style(
			'core/heading',
			array(
				'name'         => 'underlined',
				'label'        => __( 'With underline', 'design-system' ),
				'inline_style' => "
				.is-style-underlined:after {
                    content: '';
                    width: clamp(1rem, 2vw, 3rem);
                    height: clamp(2px, 0.5vw, 3px);
                    background: currentColor;
                    display: block;
                    border-radius: 2px;
    
				}
				
				.is-style-underlined {
				     transform: perspective(2000px) rotateX(var(--tilt-y)) rotateY(var(--tilt-x, 0))		
				}

				/* Hide the underlined if the heading has no content, to avoid using empty headings to display the underlined only, which is an A11Y issue */
				.is-style-underlined:empty:after {
					content: none;
				}

				.is-style-underlined:-moz-only-whitespace:after {
					content: none;
				}

				.is-style-underlined.has-text-align-center:after {
					margin: 0 auto;
				}

				.is-style-underlined.has-text-align-right:after {
					margin-left: auto;
				}

				.rtl .is-style-underlined.has-text-align-left:after {
					margin-right: auto;
				}",
			)
		);
	}
endif;
