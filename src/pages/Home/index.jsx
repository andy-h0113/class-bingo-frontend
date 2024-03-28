import React, {useContext, useEffect, useState} from 'react'
import axiosInstance from "../../utils/axiosInstance";
import Box from "@mui/material/Box";
import {Card, CardActionArea, CardContent, Container, IconButton, Popover, Snackbar, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import {SessionContext} from "../../context/SessionContext";
import {useNavigate} from "react-router-dom";
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AddTileDialog from "./AddTileDialog";
import CloseIcon from "@mui/icons-material/Close";
import AddBoardDialog from "./AddBoardDialog";


const Home = () => {
    // const [boards, setBoards] = useState([])
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [tileDialog, setTileDialog] = React.useState(false)
    const [boardDialog, setBoardDialog] = React.useState(false)
    const [confirmMsg, setConfirmMsg] = React.useState(false)

    const session = useContext(SessionContext)
    const navigate = useNavigate()

    // useEffect(() => {
    //     getBoards()
    // }, []);
    //
    // const getBoards = async () => {
    //     try {
    //         const {data} = await axiosInstance('board/section/' + session.section_id + '/')
    //         setBoards(data)
    //     } catch (error) {
    //
    //         //TODO REMOVE LATER
    //         console.log(error)
    //         getBoards()
    //     }
    //
    // }

    const boards = [
        {
            "board_id": 1,
            "section": 3,
            "board_name": "Board 1",
            "dimension": 5,
            "active": true,
            "num_wins": 0
        },
        {
            "board_id": 2,
            "section": 3,
            "board_name": "Board 2",
            "dimension": 5,
            "active": true,
            "num_wins": 5
        }
    ]

    const handleSelect = (board) => {
        navigate('/bingo/1/2')
    }


    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl)

    const handleTileDialogOpen = () => {
        handlePopoverClose()
        setTileDialog(true)
    }
    const handleBoardDialogOpen = () => {
        handlePopoverClose()
        setBoardDialog(true)
    }

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setConfirmMsg(false);
    }

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloseSnackbar}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 6,
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="left"
                        color="text.primary"
                        gutterBottom
                    >
                        Welcome, {session.username}
                    </Typography>
                    <Typography variant="h5" align="left" color="text.secondary" paragraph>
                        All active bingo boards:
                    </Typography>
                </Container>
            </Box>
            <Container sx={{ py: 6 }} maxWidth="lg">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {boards.map((board) => (
                        <Grid item key={board.board_id} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 1, borderColor: 'palette.primary.main', border: 0, borderRadius: '16px'}}
                            >
                                <CardActionArea onClick={() => handleSelect(board)}>
                                    <CardContent sx={{ flexGrow: 1, bgcolor: 'background.component', border: 0, borderRadius: '16px'}}>
                                        <Typography align="left" variant="h4" component="h2">
                                            {board.board_name}
                                        </Typography>
                                        <Typography align="left" variant="body1" component="h2">
                                            Your wins: {board.num_wins}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Stack sx={{ py: 10 }}direction="row" justifyContent="flex-start" alignItems="center">
                    <Fab color="primary" aria-label="add" onClick={handlePopoverOpen}>
                        <AddIcon sx={{ color: 'background.default'}}/>
                    </Fab>
                    <Popover
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handlePopoverClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <Stack direction="column" justifyContent="flex-start" alignItems="left">
                            <Button size="large" onClick={handleTileDialogOpen}>Create Tile</Button>
                            <Button size="large" onClick={handleBoardDialogOpen}>Create Board</Button>
                        </Stack>
                    </Popover>
                </Stack>
            </Container>
            <AddTileDialog boards={boards} setTileDialog={setTileDialog} tileDialog={tileDialog} setConfirmMsg={setConfirmMsg}/>
            <AddBoardDialog setBoardDialog={setBoardDialog} boardDialog={boardDialog} setConfirmMsg={setConfirmMsg}/>
            <Snackbar
                open={confirmMsg}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message="Created"
                action={action}
            />
        </React.Fragment>
    )
}

export default Home