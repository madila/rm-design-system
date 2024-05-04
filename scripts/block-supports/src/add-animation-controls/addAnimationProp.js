import { addFilter } from '@wordpress/hooks';
import { enableOn } from "./enableOn.js";
import { createHigherOrderComponent } from '@wordpress/compose';

const withAnimationProp = createHigherOrderComponent( ( Block ) => {
    return ( props ) => {

        // If current block is not allowed
        if ( ! enableOn.includes( props.name ) ) {
            return (
                <Block { ...props } />
            );
        }

        const { attributes } = props;
        const { dataAnimation } = attributes;

        if ( dataAnimation && dataAnimation.length ) {
            return <Block { ...props } data-editor-animation={ dataAnimation } />
        } else {
            return <Block { ...props } />
        }
    };
}, 'withAnimationProp' );

addFilter(
    'editor.BlockListBlock',
    'rm/with-animation-prop',
    withAnimationProp
);
