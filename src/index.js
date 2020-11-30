import React from 'react';
import {render} from 'react-dom';
import {compose, createStore} from "redux";
import {Provider} from "react-redux"
import {booksReducer} from "./redux/booksReducer";
import App from './components/app/App'

const store = createStore(booksReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

render(app, document.getElementById('root'));
