import {createPortal} from "react-dom";
import React from "react";
import {styles} from "./Modal.style";

export const Modal = ({children, onClose, open}: any) => {
    const classes = styles()

    return open ?
        createPortal(
            <div className={classes.modal}>
                <button onClick={onClose} className={classes.modal__close}>&times;</button>
                {children}
            </div>,
            document.body)
        : null
}