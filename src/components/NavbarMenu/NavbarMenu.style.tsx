import {createUseStyles} from "react-jss";

export const styles = createUseStyles({
    menuContainer: {
        listStyleType: 'none',
        display: 'flex',
        padding: 0,
    },
    eachMenuItem: {
        marginRight: 20,
        fontSize: 'clamp(14px, 0.8vw + 8px, 18px)',
        opacity: 0.8,
        '@media (max-width: 600px)': {
            marginRight: 16,
        },
        '@media (max-width: 400px)': {
            marginRight: 10,
        }
    },
    selected: {
        opacity: 1,
        position: 'relative',

        // textDecoration: 'underline',
        '&:after': {
            content: '""',
            width: '100%;',
            position: 'absolute',
            left: 0,
            borderColor: '#444',
            bottom: '0px',
            borderWidth: '0 0 1px',
            borderStyle: 'solid',
        }
    }
})