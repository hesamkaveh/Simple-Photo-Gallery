import {styles} from "./NotFoundPage.style";
import React from "react";

const NotFoundPage:React.FC = () => {
    const classes = styles()

    return (
        <div className={classes.wrapper}>404 - not found</div>
    )
}
export default NotFoundPage