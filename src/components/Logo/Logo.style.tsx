import {createUseStyles} from "react-jss";

export const styles = createUseStyles({
    logo: {
        width: 'auto',
        height: '100%',
        marginRight: 20,
        userSelect: 'none',
        userDrag: 'none',
        transition: 'all linear 0.1s',
        '&:hover': {
            transform: 'rotate(45deg)',
            transition: 'all linear 0.3s'
        }
    }

})