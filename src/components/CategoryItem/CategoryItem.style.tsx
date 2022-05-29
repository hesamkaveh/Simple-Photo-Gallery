import {createUseStyles} from "react-jss";

export const styles = createUseStyles({
    element: {
        margin: 0,
        marginBottom: 12,
        marginLeft: 4,
        cursor: 'pointer',
        fontWeight: 400,
        fontSize: 'clamp(14px, 0.8vw + 8px, 18px)',
        '@media (max-width: 600px)': {
            marginBottom: 16,
        }
    },
    selectedElement: {
        cursor: 'unset',
        fontWeight: 600
    }
})