import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import InputsContextProvider from './context/InputsContextProvider';
import GetDataContextProvider from './context/GetDataContextProvider'
import ThemContextProvider from './context/ThemContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>

        <GetDataContextProvider>
            <InputsContextProvider>
                <ThemContextProvider>

                    <App />

                </ThemContextProvider>
            </InputsContextProvider>
        </GetDataContextProvider>

    </BrowserRouter>
);

