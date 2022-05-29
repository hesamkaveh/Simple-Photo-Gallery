import {createUseStyles} from "react-jss";

export const styles = createUseStyles({
    "modal": {
        position: "absolute",
        top: "50%",
        left: "50%",
        zIndex: "2",
        background: "#fafafa",
        padding: "1rem",
        minHeight: "200px",
        minWidth: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    },
    modal__close: {
        position: "absolute",
        top: "4px",
        right: "4px",
        fontSize: "1.25rem",
        fontWeight: "bold"
    },

})

