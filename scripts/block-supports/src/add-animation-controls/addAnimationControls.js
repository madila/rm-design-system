/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import { addFilter } from '@wordpress/hooks';
import { enableOn } from "./enableOn.js";
import { createHigherOrderComponent } from '@wordpress/compose';
import {
    InspectorControls,
} from '@wordpress/block-editor';
import {
    Fragment
} from '@wordpress/element';

import { SelectControl } from '@wordpress/components';

import { animations } from "./animations.js";

const withAnimationControls = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {

        // If current block is not allowed
        if ( ! enableOn.includes( props.name ) ) {
            return (
                <BlockEdit { ...props } />
            );
        }

        const { attributes, setAttributes } = props;
        const { dataAnimation } = attributes;

        return (
            <Fragment>
                <BlockEdit { ...props } />
                <InspectorControls group="position">
                    <SelectControl
                        __nextHasNoMarginBottom
                        label={ __( 'Animation' ) }
                        style={{ minHeight: '40px', padding: '0px 34px 0px 16px'}}
                        options={ animations }
                        value={ dataAnimation }
                        onChange={ ( value ) =>
                            setAttributes( { dataAnimation: value } ) }
                    />
                </InspectorControls>
            </Fragment>
        );
    };
}, 'withAnimationControls' );

addFilter(
    'editor.BlockEdit',
    'rm/with-animation-controls',
    withAnimationControls
);
