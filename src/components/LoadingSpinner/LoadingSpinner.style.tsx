import {createUseStyles} from "react-jss";

export const styles = createUseStyles({
    loadingWrapper: {
        display: "inline-block",
        width: "20px",
        height: "20px",
        maxWidth: '100%',
        maxHeight: '100%',
        border: "3px solid #137b853b",
        borderRadius: "50%",
        borderTopColor: "#137b85",
        animation: "spin 1s ease-in-out infinite",
        webkitAnimation: "spin 1s ease-in-out infinite"
    },
})