import React, {useContext, useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import {SessionContext} from "../../context/SessionContext";
import {Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axiosInstance from "../../utils/axiosInstance";
import BingoBoard from "./BingoBoard";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import winAnimation from '../../assets/win_animation.gif'

const Bingo = () => {
    const filler = useParams()
    const [winStatus, setWinStatus] = useState(false)
    const [boardTiles, setBoardTiles] = useState([])


    // const { boardId, boardName} = useParams()
    const session = useContext(SessionContext)

    const boardName = "Board 1"

    const handleClose = () => {
        setWinStatus(false)
        getBoardTiles()
        console.log("Close")
    }

    const getBoardTiles = async () => {
        // try {
        //     const { data } = await axiosInstance.get('boardtileuser/' + boardId + '/' + session.user_id + '/')
        //     data.sort((a, b) => {
        //         if (a.position_row === b.position_row) {
        //             return a.position_col - b.position_col;
        //         }
        //         return a.position_row - b.position_row;
        //     });
        //
        //     setBoardTiles(data)
        //     console.log(data)
        // } catch (error) {
        //     console.log(error)
        //     getBoardTiles()
        // }
        const data = [
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 0,
                "position_col": 0,
                "selected": false,
                "tile_id": 1,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 0,
                "position_col": 1,
                "selected": false,
                "tile_id": 2,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 0,
                "position_col": 2,
                "selected": false,
                "tile_id": 3,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 0,
                "position_col": 3,
                "selected": false,
                "tile_id": 4,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 0,
                "position_col": 4,
                "selected": false,
                "tile_id": 5,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 1,
                "position_col": 0,
                "selected": false,
                "tile_id": 6,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 1,
                "position_col": 1,
                "selected": false,
                "tile_id": 7,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 1,
                "position_col": 2,
                "selected": false,
                "tile_id": 8,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 1,
                "position_col": 3,
                "selected": false,
                "tile_id": 9,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 1,
                "position_col": 4,
                "selected": false,
                "tile_id": 10,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 2,
                "position_col": 0,
                "selected": false,
                "tile_id": 11,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 2,
                "position_col": 1,
                "selected": false,
                "tile_id": 12,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 2,
                "position_col": 2,
                "selected": true,
                "tile_id": 13,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 2,
                "position_col": 3,
                "selected": false,
                "tile_id": 14,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 2,
                "position_col": 4,
                "selected": false,
                "tile_id": 15,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 3,
                "position_col": 0,
                "selected": false,
                "tile_id": 16,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 3,
                "position_col": 1,
                "selected": false,
                "tile_id": 17,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 3,
                "position_col": 2,
                "selected": false,
                "tile_id": 18,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 3,
                "position_col": 3,
                "selected": false,
                "tile_id": 19,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 3,
                "position_col": 4,
                "selected": false,
                "tile_id": 20,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 4,
                "position_col": 0,
                "selected": false,
                "tile_id": 21,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 4,
                "position_col": 1,
                "selected": false,
                "tile_id": 22,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 4,
                "position_col": 2,
                "selected": false,
                "tile_id": 23,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 4,
                "position_col": 3,
                "selected": false,
                "tile_id": 24,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 4,
                "position_col": 4,
                "selected": false,
                "tile_id": 25,
                "text": "sample text"
            }
        ]
        setBoardTiles(data)
    }

    return (
        <React.Fragment>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 6,
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}
            >
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    {boardName}
                </Typography>
            </Box>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pb: 28,
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row'
                }}
            >
                <BingoBoard winStatusChanger={setWinStatus} getBoardTiles={getBoardTiles} setBoardTiles={setBoardTiles} boardTiles={boardTiles}/>
            </Box>
            <Dialog
                open={winStatus}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>
                    {"YOU WIN!"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        BINGO, you've won this board!
                    </DialogContentText>
                    <img src={winAnimation} height="175" width="225"/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Reset Board</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default Bingo