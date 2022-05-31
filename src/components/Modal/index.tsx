import {createPortal} from "react-dom";
import React from "react";
import {styles} from "./Modal.style";

type ModalType = {
    children: React.ReactNode,
    onClose: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>,
    open: boolean
}

export const Modal: React.FC<ModalType> = ({
                                               children,
                                               onClose,
                                               open,
                                           }) => {
    const classes = styles()

    return open ?
        createPortal(
            <div className={classes.modal} onClick={onClose}
                // style={{top: ` calc(50% - (${height / 2}px))`, left: `calc(50% - (${width / 2}px))`}}
            >
                <div className={classes.innerModalWrapper}
                     onClick={(e) => {
                         e.stopPropagation()
                     }}>
                    <button onClick={onClose} className={classes.modal__close}>&times;</button>
                    {children}
                </div>
            </div>,
            document.body)
        : null
}