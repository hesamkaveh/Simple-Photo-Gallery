import {createUseStyles} from "react-jss";

export const styles = createUseStyles({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
        marginTop: 20,
    },
    logosWrapper: {
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
            '& .logo': {
                transform: 'rotate(45deg)',
                transition: 'all linear 0.3s'
            }
        }
    },
    logoContainer: {
        height: 56,
        '@media (max-width: 600px)': {
            height: 40
        }
    },
    textLogoContainer: {
        '@media (max-width: 765px)': {
            display: 'none'
        }
    }
})