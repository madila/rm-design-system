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

import { __experimentalNumberControl as NumberControl } from '@wordpress/components';

const withMotionControls = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {

        // If current block is not allowed
        if ( ! enableOn.includes( props.name ) ) {
            return (
                <BlockEdit { ...props } />
            );
        }

        const { attributes, setAttributes } = props;
        const { dataMotionDelay } = attributes;

        return (
            <Fragment>
                <BlockEdit { ...props } />
                <InspectorControls group="position">
                    <NumberControl
                        isShiftStepEnabled={ true }
                        isDragEnabled={ true }
                        step={ 0.1 }
                        shiftStep={ 10 }
                        label={ 'Motion delay' }
                        value={ dataMotionDelay }
                        onChange={ ( value ) =>
                            setAttributes( { dataMotionDelay: parseFloat(value) } ) }
                    />
                </InspectorControls>
            </Fragment>
        );
    };
}, 'withMotionControls' );

addFilter(
    'editor.BlockEdit',
    'rm/with-motion-controls',
    withMotionControls
);
