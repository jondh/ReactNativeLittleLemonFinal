/**
 * Contains the colors used for the app. 
 * 
 * I'm just playing around, seeing what could work.
 * No actual dark mode implemented
 */

export const COLORS = (colorScheme) => {
    return {
        SURFACE: COLORS_LIGHT.SURFACE,
        SURFACE_CONTAINER: COLORS_LIGHT.SURFACE_CONTAINER,
        ON_SURFACE: COLORS_LIGHT.ON_SURFACE,
        PRIMARY: COLORS_LIGHT.PRIMARY,
        PRIMARY_CONTAINER: COLORS_LIGHT.PRIMARY_CONTAINER,
    }
}

const COLORS_LIGHT = {
    SURFACE: '#ffffff',
    SURFACE_CONTAINER: '#B6B6B6',
    ON_SURFACE: '#000000',
    PRIMARY: '#505E58',
    PRIMARY_CONTAINER: '#a7aeab',
}
