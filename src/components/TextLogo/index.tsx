import React from "react";
import translate from "../../utils/lang";
import {styles} from "./TextLogo.style";

const TextLogo = React.memo(() => {
    const classes = styles()
    return (
        <h2 className={classes.siteName}>{translate('siteName')}</h2>
    )
})
export default TextLogo