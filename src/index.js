import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { SearchProvider } from "./context/inputSearchContext";
import { ContextProvider } from "./context/authcontext";


//bootstrap
import 'bootstrap/dist/js/bootstrap'


ReactDom.render(
    <ContextProvider>
        <SearchProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </SearchProvider>
    </ContextProvider>,
    document.getElementById('root')
)