import React, {useContext, useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import {SessionContext} from "../../context/SessionContext";
import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axiosInstance from "../../utils/axiosInstance";
import BingoBoard from "./BingoBoard";
import Grid from "@mui/material/Grid";

const Bingo = () => {
    const filler = useParams()


    // const { boardId, boardName} = useParams()
    const session = useContext(SessionContext)

    const boardName = "Board 1"

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
                <BingoBoard/>
            </Box>
        </React.Fragment>
    )
}

export default Bingo