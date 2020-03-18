import React from 'react'
import {
    DialogContent,
    DialogTitle,
    Dialog,
    Input,
    Button,
    InputLabel,
    Grid,
    DialogActions,
    Select,
    MenuItem
} from '@material-ui/core'
import { connect } from 'react-redux'




function CreateRoom(props) {
    const [name,setName] = React.useState('')
    const [capacity,setCapacity] = React.useState(null) 
    const [password,setPassword] = React.useState(null)
    const [privateRoom, setPrivateRoom] = React.useState(false)

    const handleCapacity = e => {
        setCapacity(e.target.value)
    }

    const handleName = e => {
        setName(e.target.value)
    }

    return (
        <React.Fragment>
            <Dialog open={props.open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Criar Sala</DialogTitle>
                <DialogContent>
                    <form>
                        <Grid container
                            alignItems="center"
                            justify="center"
                            direction="column"
                        >
                            <Input type="text" value={name} onChange={handleName} placeholder="Nome"></Input>
                            <InputLabel id="capacity">Age</InputLabel>
                            <Select
                                labelId="capacity"
                                value={capacity}
                                onChange={handleCapacity}
                                autoWidth
                            >
                                <MenuItem value={5}>
                                    <em>5</em>
                                </MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                            </Select>

                        </Grid>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleCreate}>
                        Criar
                    </Button>
                    <Button onClick={props.handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}


const mapStateToProps = () => ({})
export default connect(mapStateToProps)(CreateRoom)