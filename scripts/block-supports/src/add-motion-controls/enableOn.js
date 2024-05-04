export const enableOn = [
    'core/heading',
    'core/button',
    'core/group'
];

export const setMotionAttributes = ( settings, name ) => {
    // Do nothing if it's another block than our defined ones.
    if ( ! enableOn.includes( name ) ) {
        return settings;
    }

    return Object.assign( {}, settings, {
        attributes: Object.assign( {}, settings.attributes, {
            dataMotionDelay: {
                type: 'number'
            }
        } ),
    } );
};
