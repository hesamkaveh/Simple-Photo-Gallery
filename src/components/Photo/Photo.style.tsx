import {createUseStyles} from "react-jss";

export const styles = createUseStyles({
    eachPhoto: {
        height: 112,
        padding: "4px 2px",
        '@media (min-width: 600px)': {
            height: 160,
        },
        '@media (min-width: 1024px)': {
            height: 180,
        }
    },
    figure: {all: 'unset'}

})