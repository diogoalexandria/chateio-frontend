import React from 'react';
import {
    TextField,
    List,
    Card,
    CardContent,
    CardActions,
    Grid,
    makeStyles,
    ListItem,
    ListItemIcon,
    Typography,

} from '@material-ui/core'
import io from 'socket.io-client'
import { connect } from 'react-redux';
import { setUserNickname } from '../redux/actions'



function ChatRoom(props) {
    const socketUrl = "localhost"
    const socketPort = 8000
    const socket = io(socketUrl + ':' + socketPort)
    socket.on('connect', () => {
        console.log('connected with port ' + socketPort + ' on ' + socketUrl)
        socket.emit('connected', { nickname })
        socket.on('Invalid Nickname')
    })
    const [text, setText] = React.useState('')
    const { nickname } = props

    const handleTexting = e => {
        setText(e.target.value)
    }

    const useStyles = makeStyles(theme => ({

        chatBox: {
            width: '70vw',
            padding: '5vw',
            height: '40vh',
            border: `1px solid ${theme.palette.divider}`,
            margin: '1px'
        },
        list: {
            padding: `1vw`,
            width: '10vw',
            height: '40vh',
            border: `1px solid ${theme.palette.divider}`
        }
    }))
    const classes = useStyles()

    return (
        <React.Fragment>
            <Grid container
                alignItems="center"
                justify="center"
                direction="column"
            >
                <Grid item>
                    <Card>
                        <CardContent>
                            <Grid container
                                alignItems="center"
                                justify="center"
                                direction="row"
                            >
                                <Grid item>
                                    <List component="ul" aria-label="Users" className={classes.list}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Typography>Alan</Typography>
                                            </ListItemIcon>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Typography>Alan</Typography>
                                            </ListItemIcon>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Typography>Alan</Typography>
                                            </ListItemIcon>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <Typography>Alan</Typography>
                                            </ListItemIcon>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.chatBox}>
                                        Alan: Olá Mundo
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <TextField onChange={handleTexting}></TextField>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
        </React.Fragment>
    )
};


const mapStateToProps = ({ nickname }) => ({ nickname })
export default connect(mapStateToProps, { setUserNickname })(ChatRoom)