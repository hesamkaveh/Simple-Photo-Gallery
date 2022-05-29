import {createUseStyles} from "react-jss";

export const styles = createUseStyles({
    button: {
        backgroundColor: '#fff',
        borderColor: '#dfe1e5',
        border: '1px solid',
        borderRadius: '4px',
        cursor: 'pointer',
        height: 50,
        minWidth: 100,
        padding: '0 20px',
        fontWeight: 600,
        transition: 'all linear 0.08s',
        opacity: '0.8',
        '&:hover': {
            backgroundColor: 'rgba(223,225,229,0.3)',
            borderColor: '#dfe1e5',
            border: '1px solid',
            borderRadius: '4px',
            opacity: '1',
        },
        '&:active': {
            opacity: '0.6',

        }
    },
    childrenWrapper: {
        display: "flex",
        justifyContent: 'center'
    },
    loadingWrapper: {
        paddingRight: 8
    }
})