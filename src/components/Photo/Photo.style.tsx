import {createUseStyles} from "react-jss";

export const styles = createUseStyles({
    eachPhoto: {
        cursor: 'pointer',
        height: 112,
        margin: "4px 2px",
        '@media (min-width: 600px)': {
            height: 160,
        },
        '@media (min-width: 1024px)': {
            height: 180,
        },
        '&:hover': {
            boxShadow: '0 2px 12px 0 rgb(0 0 0 / 30%)'
        }
    },
    figure: {
        all: 'unset',
    },
    photoInModal: {
        width: "auto",
        height: "100%",
        maxWidth: "95vw",
        maxHeight: "95vh",
        overflow: 'hidden',
        position: 'relative',
        'box-shadow': '0px 0px 24px 12px #11111187',
        'border-radius': '4px',
    }
})