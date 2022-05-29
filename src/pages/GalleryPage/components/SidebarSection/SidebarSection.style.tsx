import {createUseStyles} from "react-jss";

export const styles = createUseStyles({
    title: {
        fontSize: 'clamp(16px, 0.8vw + 8px, 24px)',
    },
    mobileTitle: {
        fontSize: '16px',
    },
    mobileCategory:{
        fontSize: '16px',
        fontWeight:400

    },
    displayNoneOnMobile: {
        '@media (max-width: 599px)': {
            display: 'none'
        },
    },
    mobileCategoryButtonWrapper: {
        marginBottom: 20,
        display: 'flex',
        alignItems: 'center',
        '@media (min-width: 600px)': {
            display: 'none'
        },
        '& button': {
            marginRight: 20
        },
    },
    modalWrapper: {
        backgroundColor: "#fff",
        maxWidth: "500px",
        width: "280px",
        padding: "20px",
        borderRadius: "4px"
    }
})