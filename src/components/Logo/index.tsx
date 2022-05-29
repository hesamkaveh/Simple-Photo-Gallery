import {styles} from "./Logo.style";
import React from "react";

const Logo = React.memo(() => {
        const classes = styles()
        return (
            <img id='logo' className={`${classes.logo} logo`} src="/logo.png" alt="logo"/>
        )
    }
)

export default Logo