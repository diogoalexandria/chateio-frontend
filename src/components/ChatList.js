import React from 'react'
import { connect } from 'react-redux'
import {
    Card,
    CardContent,
    CardActions,
    makeStyles,
    Typography,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TablePagination,
    Button,
    Grid
} from '@material-ui/core'
import CreateRoom from './CreateRoom'

function ChatList(props) {
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)
    const [open,setOpen] = React.useState(false)
    const [selected, setSelected] = React.useState(null)

    const useStyles = makeStyles({
        card: {
            paddingTop: '5vh',
            paddingBottom: '5vh',
            paddingRight: '10vw',
            paddingLeft: '10vw'
        },
    })

    const classes = useStyles()

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleOpen = e => {
        setOpen(true)
    }
    
    const handleClose = e => {
        setOpen(false)
    }

    const handleCreate = e => {
        console.log('criou')
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const columns = [
        { id: 'name', label: 'Nome da Sala', minWidth: 170 },
        { id: 'capacity', label: 'Capacidade', minWidth: 100 }
    ]

    const rows = [

    ]

    return (
        <React.Fragment>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h4">Lista de Salas</Typography>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map(column => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map(column => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </CardContent>
                <CardActions>
                    <Grid container>
                        
                        <Button onClick={handleOpen}>Criar Sala</Button>
                        <CreateRoom open={open} handleClose={handleClose} handleCreate={handleCreate}></CreateRoom>
                    </Grid>
                </CardActions>
            </Card>
        </React.Fragment>
    )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(ChatList)