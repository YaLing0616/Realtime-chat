import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';

import Login from './components/login/login';
import SignUp from './components/signup/signup';
import Dashboard from './components/dashboard/dashboard';

firebase.initializeApp({
    apiKey: "AIzaSyCcyufPWaWOcLvbBPgBArNMH5Q_gi9oBAY",
    authDomain: "realtime-chat-2598f.firebaseapp.com",
    databaseURL: "https://realtime-chat-2598f.firebaseio.com",
    projectId: "realtime-chat-2598f",
    storageBucket: "realtime-chat-2598f.appspot.com",
    messagingSenderId: "644826752739",
    appId: "1:644826752739:web:9912f44a709048c9e947d6",
    measurementId: "G-MB5NYNLCK2"
});

const routing = (
    <Router>
        <div id='routing-container'>
            <Route path='/Realtime-chat/login' component={Login} />
            <Route path='/Realtime-chat/signup' component={SignUp} />
            <Route path='/Realtime-chat/dashboard' component={Dashboard} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
