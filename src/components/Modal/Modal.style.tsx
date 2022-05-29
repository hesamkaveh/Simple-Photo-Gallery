import {createUseStyles} from "react-jss";

export const styles = createUseStyles({
    "modal": {
        width: "100%",
        height: "100%",
        display: "flex",
        zIndex: "2",
        position: "fixed",
        // minWidth: "200px",
        // minHeight: "200px",
        alignItems: "center",
        justifyContent: "center",
        top: "0",
        left: "0",
        backgroundColor: "#000000ab"
    },
    modal__close: {
        position: "absolute",
        top: "4px",
        right: "4px",
        fontSize: "1.25rem",
        fontWeight: "bold",
        borderRadius: '50px',
        cursor: 'pointer',
        transition: 'all linear 0.08s',
        boxShadow: '0px 0px 10px 0px #333',
        border: 'unset',
        '&:hover': {
            backgroundColor: '#dfe1e5'
        }
    },
    innerModalWrapper: {
        position: 'relative',
        // boxShadow: '0px 0px 24px 12px #11111187',
        // borderRadius: '4px',
        // overflow: 'hidden'
    }

})

