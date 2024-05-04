/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from '@wordpress/interactivity';

const { state, actions, callbacks } = store( 'albumCover', {
    state: {
        isPlaying: false
    },
    actions: {
        logTime: (event) => {
            console.log(event);
            const context = getContext();
            const {ref} = getElement();
            // Log the value of `isOpen` each time it changes.
            console.log( context );
        }
    },
    callbacks: {
        setupPlayer: () => {
            const context = getContext();
            // Log the value of `isOpen` each time it changes.
        },
    },
} );


console.log(actions);
