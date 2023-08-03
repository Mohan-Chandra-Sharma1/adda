import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {  BrowserRouter as Router,  Navigate, Route, Routes } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import history from './modules/history';
import Home from './components/Home';
import LogIn from './components/Login';

class App extends Component {
    
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Routes>
                        <Route path="/home" component={Home} />
                        <Route path="/login" component={LogIn} />
                        {/* <Route from="/home" to="login" /> */}
                    </Routes>
                </Router>
            </Provider>
        );
    }
}

export default App;