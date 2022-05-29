import {createUseStyles} from "react-jss";

export const styles = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column'

    },
    sidebar: {
        width: 200,
    },
    gallery: {
        width: '100%'
    },
    '@media (min-width: 600px)': {
        container: {
            display: 'flex',
            flexDirection: 'row'
        },
        sidebar: {
            position: 'sticky',
            height: '100%',
            top: 0,
        },
    },
    photosLoadingWrapper: {
        margin: '0 auto'
    }
})