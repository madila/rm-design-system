import { addFilter } from '@wordpress/hooks';
import { enableOn } from "./enableOn.js";

const saveAnimationAttribute = ( extraProps, blockType, attributes ) => {
    // Do nothing if it's another block than our defined ones.
    if ( enableOn.includes( blockType.name ) ) {
        const { dataAnimation } = attributes;
        if ( dataAnimation && dataAnimation.length ) {
            extraProps['data-animation'] = dataAnimation;
            extraProps['data-invisible'] = 'true';
        }
    }

    return extraProps;

};
addFilter(
    'blocks.getSaveContent.extraProps',
    'rm/save-animation-attribute',
    saveAnimationAttribute
);
