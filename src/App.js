import React from 'react';
import Nav from './components/Nav';
import Search from './components/Search';
import History from './components/History';
import NewStories from './components/NewStories';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export const App = () => {
    return (
        <Router>
            <div>
                <Nav/>
                <Switch>
                    <Route path="/" exact component={NewStories} />
                    <Route path="/search" component={Search} />
                    <Route path="/history" component={History} />
                </Switch>
            </div>
        </Router>
    )
}