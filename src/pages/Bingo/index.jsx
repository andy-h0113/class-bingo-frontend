import React, {useContext, useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import {SessionContext} from "../../context/SessionContext";
import {Card, CardActionArea, CardContent, Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axiosInstance from "../../utils/axiosInstance";

const Bingo = () => {
    const filler = useParams()
    const board = [filler]


    const { boardId, boardName} = useParams()
    const session = useContext(SessionContext)
    const [boardTiles, setBoardTiles] = useState([])

    useEffect(() => {
        getBoardTiles()
    }, []);

    const getBoardTiles = async () => {
        try {
            const { data } = await axiosInstance.get('boardtileuser/' + boardId + '/' + session.user_id + '/')
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
                        {boardName}, {boardId}, {session.user_id}, {session.section_id}
                    </Typography>
                </Container>
            </Box>
            <Container sx={{ py: 6 }} maxWidth="lg">
                <Grid container spacing={4}>
                    {boardTiles.map((tile) => (
                        <Grid item key={tile.tile} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardActionArea onClick={() => {
                                    console.log("click")
                                }}>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography align="center" variant="h6" component="h2">
                                            {tile.tile}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </CssBaseline>
    )
}

export default Bingo