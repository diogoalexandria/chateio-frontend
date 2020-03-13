import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import ChatRoom from './components/ChatRoom'
import Cadastro from './components/Cadastro'
import { connect } from 'react-redux'
import { makeStyles, Grid } from '@material-ui/core';
import logo from './assets/logo.png'

function App(props) {
  const useStyles = makeStyles({
    app: {
      minWidth: '100vw',
      minHeight: '100vh',
      backgroundColor: '#333333',
    },
    logo: {
      width: '25vw',
      margin: '4vh'
    }
  })
  const classes = useStyles()

  if (props.location.pathname === '/') {
    return <Redirect to='/home' />
  }

  return (
    <div className={classes.app}>
      <Grid container
        alignItems="center"
        justify="center"
        direction="column"
        >
        <Grid item>
          <img src={logo} alt="logo" className={classes.logo}/>
        </Grid>
        <Grid item>
        <Router>
          <Switch>
            <Route path="/home" exact component={() => <Home />} />
            <Route path="/cadastro" component={()=> <Cadastro />} />
            <Route path="/chatRoom" component={() => <ChatRoom />} />
          </Switch>
        </Router>

        </Grid>
      </Grid>
    </div>
  );
}


const mapStateToProps = () => ({})
export default connect(mapStateToProps)(App);
