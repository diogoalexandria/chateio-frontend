import React from 'react'
import { TextField, Typography, Grid, IconButton, Card, CardContent, CardActions } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ArrowForward } from '@material-ui/icons/';

export default function Home() {

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
        app: {
            minWidth: '100vw',
            minHeight: '100vh',
            backgroundColor: '#333333'
        },
        button:{
            marginTop: '2vh'
        }
    })
    const [nickname, setNickname] = React.useState('')

    const handleNickame = e => {
        e.preventDefault()
        setNickname(e.target.value.replace(' ', ''))
    }

    const handleSubmit = e => {
        e.preventDefault()


    }

    const classes = useStyles()
    return (
        <React.Fragment className={classes.app}>
            <div className={classes.app}>


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
            </div>
        </React.Fragment>
    )
}