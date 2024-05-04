import { addFilter } from '@wordpress/hooks';
import { enableOn } from "./enableOn.js";

const saveMotionAttributes = ( extraProps, blockType, attributes ) => {
    // Do nothing if it's another block than our defined ones.
    if ( enableOn.includes( blockType.name ) ) {
        const { dataMotionDelay } = attributes;
        if ( dataMotionDelay ) {
            extraProps.style = {
                ...extraProps.style,
                '--motion-delay': dataMotionDelay,
            };
        }
    }

    return extraProps;

};
addFilter(
    'blocks.getSaveContent.extraProps',
    'rm/save-motion-attributes',
    saveMotionAttributes
);
