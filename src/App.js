import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import ChatRoom from './components/ChatRoom'
import {connect} from 'react-redux'
import { makeStyles, Grid } from '@material-ui/core';

function App(props) {
  const useStyles = makeStyles({
    app: {
      minWidth: '100vw',
      minHeight: '100vh',
      backgroundColor: '#333333',
    }
  })
  const classes = useStyles()

  if (props.location.pathname === '/'){
    return <Redirect to='/home' />
  }

  return (
    <div className={classes.app}>
      <Grid container
        alignItems="center"
        justify="center">

        <Router>
          <Switch>
            <Route path="/home" exact component={() => <Home/>} />
            <Route path="/chatRoom" component={()=><ChatRoom/>} />
          </Switch>
        </Router>
      </Grid>
    </div>
  );
}


const mapStateToProps = () => ({})
export default connect(mapStateToProps)(App);
