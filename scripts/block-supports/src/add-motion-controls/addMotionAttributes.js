import { addFilter } from '@wordpress/hooks';
import { setMotionAttributes } from "./enableOn.js";


addFilter(
    'blocks.registerBlockType',
    'rm/motion-attributes',
    setMotionAttributes
);
