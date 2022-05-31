import {styles} from "./SectionContainer.style"
import React from "react";

type SectionContainerType = {
    children: React.ReactNode
}

const SectionContainer: React.FC<SectionContainerType> = ({children}) => {
    const classes = styles()

    return (<div className={classes.container}>{children}</div>)
}
export default SectionContainer