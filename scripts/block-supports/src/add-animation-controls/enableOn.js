export const enableOn = [
    'core/group',
    'core/button',
    'core/cover',
    'core/column',
    'core/heading',
    'core/paragraph',
    'frames/frame'
];

export const setAnimationAttribute = ( settings, name ) => {
    // Do nothing if it's another block than our defined ones.
    if ( ! enableOn.includes( name ) ) {
        return settings;
    }

    return Object.assign( {}, settings, {
        attributes: Object.assign( {}, settings.attributes, {
            dataAnimation: {
                type: 'string',
                source: 'attribute',
                selector: '[data-animation]',
                attribute: 'data-animation',
            },
            dataInvisible: {
                type: 'string',
                source: 'attribute',
                selector: '[data-animation]',
                attribute: 'data-invisible',
            }
        } ),
    } );
};
