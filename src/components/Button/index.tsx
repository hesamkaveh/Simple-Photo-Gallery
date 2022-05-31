import React from "react";
import {styles} from "./Button.style";
import clsx from 'clsx'
import LoadingSpinner from "../LoadingSpinner";

type ButtonType = {
    isLoading?: boolean
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button: React.FC<ButtonType> = React.memo(({children, isLoading = false, ...props}) => {
    const classes = styles()

    return (
        <button disabled={isLoading} className={clsx(classes.button, props.className)} {...props}>
            <span className={classes.childrenWrapper}>
                {isLoading ?
                    <span className={classes.loadingWrapper}><LoadingSpinner size={"12px"}/></span> : null}
                {children}
            </span>
        </button>
    )
})
export default Button