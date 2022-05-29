import {createUseStyles} from "react-jss";

export const styles = createUseStyles({
    langSelector: {
        width: '140px',
        outline: 0,
        background: '#fff',
        color: '#333',
        border: '1px solid rgba(0, 0, 0, 0.23)',
        padding: 4,
        borderRadius: 4,
        transition: 'all linear 0.05s',
        '@media (max-width: 500px)': {
            width: '120px',
        },
        '&:hover': {
            border: '1px solid rgba(0, 0, 0, 0.9)',
            transition: 'all linear 0.05s'
        }
    }

})