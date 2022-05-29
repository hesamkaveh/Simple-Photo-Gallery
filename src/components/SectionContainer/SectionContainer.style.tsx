import {createUseStyles} from "react-jss";

export const styles = createUseStyles({
    container: {
        maxWidth: 1200,
        margin: '0 auto',
        '@media (max-width: 600px)': {
            padding: '0 32px',
        },
        '@media (min-width: 600px)': {
            padding: '0 60px',
        },
        '@media (min-width: 1024px)': {
            padding: '0 100px',
        }
    },
})