import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import PostDetail from './Components/PostDetails/PostDetail';
import Profile from './Components/Profile/Profile';



function App() {

  return (
    <div>
      <Router>
        <Header></Header>
        <Container maxWidth="md">
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/profile">
            <Profile></Profile>
            </Route>
            <Route path="/PostDetail/:id">
              <PostDetail></PostDetail>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <h1>pore dekha jabe</h1>
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
