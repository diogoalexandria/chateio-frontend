import React from 'react'
import { connect } from 'react-redux'
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Input,
    Grid,
    InputLabel,
    makeStyles,
    Button
} from '@material-ui/core'
import bcrypt from 'bcrypt'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


function Cadastro(props) {
    const history = useHistory()
    const useStyles = makeStyles({
        title: {
            marginBottom: '3vh'
        },
        card: {
            paddingTop: '5vh',
            paddingBottom: '5vh',
            paddingRight: '10vw',
            paddingLeft: '10vw'
        },
        emailInputLabel: {
            marginTop: '1vh'
        },
        button: {
            margin: '1vw'
        }
    })

    const [disabled, setDisabled] = React.useState('')
    const [nickname, setNickname] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [email, setEmail] = React.useState('')

    const classes = useStyles()

    const handleNickname = e => {
        setNickname(e.target.value)
    }

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleSubmit = e => {
        // let hashPassword = ""
        // bcrypt.hash(password, 10, (err,hash) => {
        //     hashPassword = hash
        // })
        // console.log(hashPassword)
        const data = {
            "nickname": nickname,
            // "password": hashPassword,
            "email": email
        }
        const axios_url = process.env.REACT_APP_AXIOS_BASE_URL
        const axios_port = process.env.REACT_APP_AXIOS_PORT
        // console.log(axios_url + axios_port)
        axios.post('http://192.168.1.67:3333/register', data)
            .then((res) => {
                //sucedido
                console.log('sucessful',res)
                history.push('/login')
            })
            .catch(e => {
                //erro
                console.log('error',e)
            })
            .then(res => {
                //sempre executa
                console.log('always',res)
            })
    }

    return (
        <React.Fragment>
            <Card className={classes.card}>
                <CardContent>
                    <Grid container
                        direction="center"
                        alignItems="center"
                        direction="column"
                    >

                        <Typography variant="h4" className={classes.title}> Cadastre-se! </Typography>
                    </Grid>
                </CardContent>
                <CardActions>
                    <form onSubmit={handleSubmit}>
                        <Grid container
                            direction="center"
                            alignItems="center"
                            direction="column"
                            spacing={3}
                        >


                            <Grid item>
                                <InputLabel>Nickname</InputLabel>
                                <Input type="text" value={nickname} onChange={handleNickname}></Input>
                            </Grid>
                            <Grid item>
                                <InputLabel>Password</InputLabel>
                                <Input type="password" value={password} onChange={handlePassword}></Input>
                            </Grid>
                            <Grid item>
                                <InputLabel className={classes.emailInputLabel}>Email</InputLabel>
                                <Input type="email"
                                    className={classes.emailInput}
                                    value={email}
                                    onChange={handleEmail}
                                />
                            </Grid>
                            <Grid item>
                                <Button disabled={!nickname || !email || !password} variant="contained" onClick={handleSubmit} className={classes.button} color='primary'>Avançar</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardActions>
            </Card>
        </React.Fragment >
    )
}





const mapStateToProps = () => ({})

export default connect(mapStateToProps)(Cadastro)