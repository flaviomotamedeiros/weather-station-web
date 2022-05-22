import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from './application/store';
import services from './services';
import App from './views';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={configureStore(services)}>
        <App />
    </Provider>
);