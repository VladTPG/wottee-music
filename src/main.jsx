import ReactDOM from 'react-dom/client'
import React from "react";
import App from "./App"
import {BrowserRouter} from "react-router-dom";
import './index.css'
import {UserProvider} from "./contexts/UserContext.jsx";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <UserProvider>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <App/>
            </DevSupport>
        </UserProvider>
    </BrowserRouter>
)
