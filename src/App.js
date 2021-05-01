import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from 'globalStyles';

import LoginPage from 'pages/Login';
import HomePage from 'pages/Home';
import Home from 'Example/pages/Home'
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <GlobalStyle />
                <Switch>
                    <Route exact path="/">
                        <LoginPage />
                    </Route>
                    <Route path="/home">
                        <HomePage />
                    </Route>
                    <Route path="/example">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
export default App;
