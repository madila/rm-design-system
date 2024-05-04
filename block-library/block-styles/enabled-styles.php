<?php

namespace DesignSystem;

enum BlockStyles: string {
	case Perspective = 'perspective';
	case Magnet = 'magnet';
	case Tilt = 'tilt';
	case ScrollMotionDisappear = 'scroll-motion-disappear';
	case ScrollMotionAppear = 'scroll-motion-appear';
	case Experimental = 'experimental';


	static public function is_enabled($style): string
	{
		return match($style) {
			BlockStyles::Perspective->value,
			BlockStyles::Magnet->value,
			BlockStyles::Tilt->value,
			BlockStyles::ScrollMotionDisappear->value,
			BlockStyles::ScrollMotionAppear->value => true,
			default => false,
		};
	}

	static public function enabled_on($style): array
	{
		return match($style) {
			BlockStyles::ScrollMotionDisappear->value => ['core/heading', 'core/group'],
			BlockStyles::ScrollMotionAppear->value => ['core/heading', 'core/group'],
			default => [],
		};
	}


	static public function get_inline_styles($style): string
	{
		return match($style) {
			BlockStyles::ScrollMotionAppear->value =>
			'.is-style-scroll-motion-appear {
				--scroll-y: calc(var(--motion-scroll-end) - var(--page-y));
					
				--calculation-one: calc(var(--motion-element-ratio) - var(--motion-scroll-end));
				--calculation-two: calc(var(--motion-scroll-start) - var(--motion-scroll-end));
				--calculation-final: calc(var(--calculation-one) / var(--calculation-two));
				
				--opacity-one: calc(1 - var(--calculation-final));
				
				transform: translate3d(0, calc(var(--calculation-final) * 5rem), 0);
				transition: transform 300ms linear;
				opacity: var(--opacity-one);
				backface-visibility: hidden;
				will-change: transform;
				
			}
			',
			BlockStyles::ScrollMotionDisappear->value =>
			'.is-style-scroll-motion-disappear {
				--calculation-one: calc(var(--motion-element-ratio) - var(--motion-scroll-end));
				--calculation-two: calc(var(--motion-scroll-start) - var(--motion-scroll-end));
				--calculation-final: calc(var(--calculation-one) / var(--calculation-two));
				--calculate-delay: calc(var(--motion-delay) * 10rem);
			
				--reverse-one: calc(1 - var(--calculation-final));
			
				transition: transform 203ms linear;
				transform: translate3d(0, calc(var(--reverse-one) * var(--motion-delay)), 0);
				will-change: transform;
			}
			',
			default => '',
		};
	}
}
