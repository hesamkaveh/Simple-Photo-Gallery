import {store} from "./index";
import {PersistGate} from "redux-persist/lib/integration/react";
import {getPersistor} from "@rematch/persist";
import React from "react";
import {Provider} from 'react-redux'

type ReduxProviderType = {
    children: React.ReactNode
}
const persistor = getPersistor();

const ReduxProvider = ({children}: ReduxProviderType) => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            {children}
        </PersistGate>
    </Provider>
)

export default ReduxProvider