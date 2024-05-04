
import { addFilter } from '@wordpress/hooks';
import { setAnimationAttribute } from "./enableOn.js";


addFilter(
    'blocks.registerBlockType',
    'rm/animation-attribute',
    setAnimationAttribute
);
