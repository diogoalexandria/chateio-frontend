import React from 'react';
import { useHistory } from 'react-router-dom'
import { TextField, Typography, Grid, IconButton, Card, CardContent, CardActions, Link, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowForward } from '@material-ui/icons/';
import { connect } from 'react-redux'
import { setUserNickname } from '../redux/actions'
import passwordHash from 'password-hash'




function Home(props) {
    const { setUserNickname } = props
    let history = useHistory();
    const useStyles = makeStyles({
        text: {

        },
        title: {
            color: 'white',
            fontFamily: 'sans',
            margin: '5vh'
        },
        subTitle: {
            margin: '2vh'
        },
        card: {
            padding: '10vh'
        },
        button: {
            marginTop: '2vh'
        },
        form: {
            margin: '2vh'
        }
    });
    const classes = useStyles();

    const [nickname, setNickname] = React.useState('');
    const [password, setPassword] = React.useState('')

    const handleNickame = e => {
        e.preventDefault();
        setNickname(e.target.value.replace(' ', ''));
    };

    const handlePassword = e => {
        e.preventDefault()
        setPassword(e.target.value)

    }

    const handleSubmit = e => {
        e.preventDefault();


    };
    const handleCadastro = e => {
        history.push('/cadastro')
    }

    return (
        <React.Fragment >
            <Grid container
                direction="column"
                justify="center"
                alignItems="center"
            >


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
                                justify="center"
                                alignItems="center"
                                direction="column"
                            >

                                <form autoComplete="off" className={classes.form} onSubmit={handleSubmit}>
                                    <Grid container
                                        direction="row"
                                        justify="center"
                                        alignItems="center"
                                        spacing={5}
                                    >
                                        <Grid item>

                                            <Grid container
                                                direction="column"
                                                justify="center"
                                                alignItems="center"
                                                spacing={2}
                                            >

                                                <Grid item>
                                                    <Input onChange={handleNickame} value={nickname} placeholder="Nickname" />
                                                </Grid>
                                                <Grid item>
                                                    <Input onChange={handlePassword} value={password} placeholder="Password" type='password' />
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <IconButton className={classes.button} onClick={handleSubmit}>
                                                <ArrowForward />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </form>
                                <Grid container
                                    alignItems="center"
                                    justify="center"
                                    direction="row"
                                    spacing={1}
                                >
                                    <Grid item>
                                        <Typography>Ainda não é cadastrado?</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Link onClick={handleCadastro}>Cadastre-se!</Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardActions>

                    </Card>
                </Grid>
            </Grid>
        </React.Fragment >
    )
};

const mapStateToProps = ({ nickname }) => ({ nickname })

export default connect(mapStateToProps, { setUserNickname })(Home)