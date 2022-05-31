import React, {Suspense} from "react";
import {styles} from "./LoadingSpinner.style";

type LoadingSpinnerType = {
    size?: string
}

const LoadingSpinner: React.FC<LoadingSpinnerType> = React.memo(({size}) => {
    const classes = styles()

    return (
        <Suspense fallback={<span> Loading...</span>}>
            <span className={classes.loadingWrapper} style={size ? {width: size, height: size} : {}}></span>
        </Suspense>
    )
})
export default LoadingSpinner