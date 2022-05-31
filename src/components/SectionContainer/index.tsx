import {styles} from "./SectionContainer.style"
import React from "react";
import ErrorBoundaryFallback from "../ErrorBoundaryFallback/ErrorBoundaryFallback";
import {ErrorBoundary} from "react-error-boundary";

type SectionContainerType = {
    children: React.ReactNode
}

const SectionContainer: React.FC<SectionContainerType> = ({children}) => {
    const classes = styles()

    return (
        <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
            <div className={classes.container}>{children}</div>
        </ErrorBoundary>
    )
}
export default SectionContainer