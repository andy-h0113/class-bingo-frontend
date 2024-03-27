import React, {useContext, useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import {SessionContext} from "../../context/SessionContext";
import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axiosInstance from "../../utils/axiosInstance";
import BingoBoard from "./BingoBoard";

const Bingo = () => {
    const filler = useParams()


    const { boardId, boardName} = useParams()
    const session = useContext(SessionContext)


    return (
        <div>
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
                        {boardName}
                    </Typography>
                </Container>
            </Box>
            <Container sx={{ py: 3, pb: 6 }} maxWidth="md">
                <BingoBoard/>
            </Container>
        </div>
    )
}

export default Bingo