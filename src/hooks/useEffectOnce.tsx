import React, {useEffect, useRef, useState} from "react";

// reference: https://dev.to/ag-grid/react-18-avoiding-use-effect-getting-called-twice-4i9e
export const useEffectOnce = (effect: React.EffectCallback) => {
    const destroyFunc = useRef();
    const effectCalled = useRef(false);
    const renderAfterCalled = useRef(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [val, setVal] = useState(0);

    if (effectCalled.current) {
        renderAfterCalled.current = true;
    }

    useEffect(() => {

        // only execute the effect first time around
        if (!effectCalled.current) {
            // @ts-ignore
            destroyFunc.current = effect();
            effectCalled.current = true;
        }

        // this forces one render after the effect is run
        setVal(val => val + 1);

        return () => {
            // if the comp didn't render since the useEffect was called,
            // we know it's the dummy React cycle
            if (!renderAfterCalled.current) {
                return;
            }
            if (destroyFunc.current) {
                // @ts-ignore
                destroyFunc.current();
            }
        };
    }, []);
};