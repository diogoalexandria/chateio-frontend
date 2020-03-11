import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import redux from './redux'
import {createStore, applyMiddleware, compose} from 'redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Provider} from 'react-redux'

const logActions = () => next => action => {
    
    return next(action)
}


const middlewares = [logActions]

const store = createStore(redux, compose(applyMiddleware(...middlewares)))

const ReduxApp = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" component={App}/>
            </Switch>
        </Router>
    </Provider>
)

ReactDOM.render(<ReduxApp />, document.getElementById('root'));

serviceWorker.unregister();
