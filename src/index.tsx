import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteList from "./routes";
import StyleProvider from "./theme/StyleProvider";
import ReduxProvider from "./store/ReduxProvider";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <ReduxProvider>
            <StyleProvider>
                <RouteList/>
            </StyleProvider>
        </ReduxProvider>
    </React.StrictMode>
);
