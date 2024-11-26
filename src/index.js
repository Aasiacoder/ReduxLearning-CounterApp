import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store';//here store ah import pandra coz store la eruka variable la all files um access pana
import { Provider } from 'react-redux';//import Provider for provide store variable

const root = ReactDOM.createRoot(document.getElementById('root'));

// this store attribute is accessible by all files 
root.render(
    <Provider store={store}> 
        <App />
    </Provider>
);