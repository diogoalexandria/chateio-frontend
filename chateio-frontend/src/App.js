import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/" exact component={Home}/>
        {/* <Route path="/" component={ChatRoom}/> */}
      </Switch>

    </Router>
  );
}

export default App;
