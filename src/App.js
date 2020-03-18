import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom'
import Cadastro from './components/Cadastro'
import ChatList from './components/ChatList'
import { connect } from 'react-redux'
import { makeStyles, Grid } from '@material-ui/core';
import logo from './assets/logo.png'
import {setUserLogged} from './redux/actions'

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
    let index = props.userLogged ? '/chatlist' : '/login'
    return <Redirect to={index} />
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
            <Route path="/login" exact component={() => <Login />} />
            <Route path="/cadastro" component={()=> <Cadastro />} />
            <Route path="/chatlist" component={()=> <ChatList/>} />
            <Route path="/chatroom" component={() => <ChatRoom />} />
          </Switch>
        </Router>

        </Grid>
      </Grid>
    </div>
  );
}


const mapStateToProps = ({userLogged}) => ({userLogged})
export default connect(mapStateToProps, setUserLogged)(App);
