import {createUseStyles} from "react-jss";

export const styles = createUseStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '@media (max-width: 600px)': {
            justifyContent: 'flex-start',
        }
    },
    loadMoreBtnContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '40px 0 20px'
    },
    loadMoreBTN: {}
})