import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {
    BrowserRouter,
} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
