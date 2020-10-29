import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Header} from './components/Header';
import Watchlist from './components/Watchlist';
import Watched from './components/Watched';
import {Add} from './components/Add';
import {GlobalProvider} from './context/GlobalState';
// https://www.youtube.com/watch?v=1eO_hNYzaSc&feature=emb_rel_pause

// const FEATURED_API = "https://api.themoviedb.org/3/movie/76341?api_key=1fd5a2123f6b600e4180ade1d640d280";
// const IMG_API = "https://image.tmdb.org/t/p/w1280";
// const SEARCH_API = "https://api.themoviedb.org/3/movie/550?api_key=1fd5a2123f6b600e4180ade1d640d280";
function App() {
    return (
        <GlobalProvider>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Watchlist />
                    </Route>

                    <Route path="/watched">
                        <Watched />
                    </Route>

                    <Route exact path="/add">
                        <Add />
                    </Route>
                </Switch>
            </Router>
        </GlobalProvider>
    );
}

export default App;