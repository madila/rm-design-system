import { addFilter } from '@wordpress/hooks';
import { enableOn } from "./enableOn.js";
import { createHigherOrderComponent } from '@wordpress/compose';

const withMotionProp = createHigherOrderComponent( ( Block ) => {
    return ( props ) => {

        // If current block is not allowed
        if ( ! enableOn.includes( props.name ) ) {
            return (
                <Block { ...props } />
            );
        }

        const { attributes } = props;
        const { dataMotionDelay } = attributes;

        if ( dataMotionDelay ) {
            return <Block { ...props } data-editor-motion-delay={ dataMotionDelay } />
        }

        return <Block { ...props } />
    };
}, 'withMotionProp' );

addFilter(
    'editor.BlockListBlock',
    'rm/with-motion-prop',
    withMotionProp
);
