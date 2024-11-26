import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store';//here i import atore.js, coz store.js have variable and actions it will accessible by all files 
import { Provider } from 'react-redux';//import Provider for provide store data

const root = ReactDOM.createRoot(document.getElementById('root'));

// this store attribute is accessible by all files 
root.render(
    <Provider store={store}> 
        <App />
    </Provider>
);