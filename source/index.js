import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './App';
import fireReducer from './fireReducer';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import registerServiceWorker from './registerServiceWorker';

let store = createStore(fireReducer);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('webcraftApp')
);

registerServiceWorker();



