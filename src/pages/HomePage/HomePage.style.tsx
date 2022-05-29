import {createUseStyles} from "react-jss";

export const styles = createUseStyles({
    wrapper: {
        fontSize: 'clamp(16px, 0.8vw + 8px, 20px)',
        whiteSpace: 'break-spaces',
        lineHeight: '2rem',
        fontWeight: 400
    },
    link: {
        color: '#1a0dab'
    }
})