import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ChatsList from './components/ChatsList'

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/chats" component={ChatsList}/>
      </Switch>

    </Router>
  );
}

export default App;
