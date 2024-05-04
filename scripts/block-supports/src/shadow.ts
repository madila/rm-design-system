/**
 * WordPress dependencies
 */
import { addFilter } from "@wordpress/hooks";

/**
 * Adds border support to Column, Heading, and Paragraph blocks.
 *
 * @param {Object} settings - The original block settings.
 * @param {string} name - The name of the block.
 *
 * @returns {Object} The modified block settings with added border support.
 */
function addShadowSupport( settings: { supports: any; }, name:string ): object {

    // Bail early if the block does not have supports.
    if ( ! settings?.supports ) {
        return settings;
    }

    // Only apply to Column, Heading, and Paragraph blocks.
    if (
        name === 'core/group'
    ) {
        return Object.assign( {}, settings, {
            supports: Object.assign( settings.supports, {
                shadow: true
            } ),
        } );
    }

    return settings;
}

addFilter(
    'blocks.registerBlockType',
    'design-system/add-shadow-support',
    addShadowSupport,
);
