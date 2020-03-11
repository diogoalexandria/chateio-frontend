import React from 'react';
import { useHistory } from 'react-router-dom'
import { TextField, Typography, Grid, IconButton, Card, CardContent, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowForward } from '@material-ui/icons/';
import {connect} from 'react-redux'
import {setUserNickname} from '../redux/actions'





function Home(props) {
    const {setUserNickname} = props
    let history = useHistory();
    const useStyles = makeStyles({
        text: {

        },
        title:{
            color: 'white',
            fontFamily: 'sans',
            margin: '5vh'
        },
        subTitle: {
            margin: '2vh'
        },
        card: {
            marginTop: '10vh',
            padding: '10vh'
        },
        button:{
            marginTop: '2vh'
        }
    });
    const classes = useStyles();

    const [nickname, setNickname] = React.useState('');

    const handleNickame = e => {
        e.preventDefault();
        setNickname(e.target.value.replace(' ', ''));
    };

    const handleSubmit = e => {
        e.preventDefault();
        setUserNickname(nickname)
        history.push('/chatRoom');
    };

    return (
        <React.Fragment >
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >

                    <Grid item>
                        <Typography className={classes.title} variant="h2">
                            CHATEIO
                        </Typography>
                    </Grid>
                    <Grid item>

                        <Card className={classes.card}>
                            <CardContent>

                                <Grid container
                                    direction="column"
                                    justify="center"
                                    alignItems="center"
                                >
                                    <Grid item>
                                        <Typography variant="h4" className={classes.subTitle}> Seja bem-vindo ao ChateIO!</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.text}> O maior e melhor chat do mundo feito pelos melhores programadores do mundo!</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.text}> Para começar a conversar, digite abaixo o apelido que deseja usar</Typography>
                                    </Grid>

                                </Grid>
                            </CardContent>
                            <CardActions>
                                <Grid container
                                    direction="row"
                                    justify="center"
                                    alignItems="center">

                                    <Grid item>
                                        <TextField onChange={handleNickame} value={nickname} label="Nickname" />
                                    </Grid>

                                    <Grid item>
                                        <IconButton onClick={handleSubmit} className={classes.button}>
                                            <ArrowForward />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </CardActions>

                        </Card>
                    </Grid>
                </Grid>
        </React.Fragment>
    )
};

const mapStateToProps = ({nickname}) => ({nickname})

export default connect(mapStateToProps, {setUserNickname})(Home)