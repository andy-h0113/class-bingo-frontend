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
    const [boardTiles, setBoardTiles] = useState([])

    useEffect(() => {
        getBoardTiles()
    }, []);

    const getBoardTiles = async () => {
        try {
            const { data } = await axiosInstance.get('boardtileuser/' + boardId + '/' + session.user_id + '/')
            data.sort((a, b) => {
                if (a.position_row === b.position_row) {
                    return a.position_col - b.position_col;
                }
                return a.position_row - b.position_row;
            });

            setBoardTiles(data)
            console.log(data)
        } catch (error) {
            console.log(error)
            getBoardTiles()
        }
    }

    return (
        <CssBaseline>
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
                <BingoBoard data={boardTiles}/>
            </Container>
        </CssBaseline>
    )
}

export default Bingo