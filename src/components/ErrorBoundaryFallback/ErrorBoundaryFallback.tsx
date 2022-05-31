import React from "react";
import {FallbackProps} from "react-error-boundary";
import translate from "../../utils/lang";
import {styles} from "./ErrorBoundaryFallback.style";

const ErrorBoundaryFallback: React.FC<FallbackProps> = ({error, resetErrorBoundary}) => {
    const classes = styles()

    return (
        <div className={classes.container} role="alert">
            <p>{translate('errors.somethingWrong')}</p>
            <pre className={classes.msg}>{error.message}</pre>
            <button onClick={resetErrorBoundary}>{translate('tryAgain')}</button>
        </div>
    )
}

export default ErrorBoundaryFallback