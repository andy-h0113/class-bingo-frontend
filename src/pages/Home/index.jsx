import React, {useContext, useEffect, useState} from 'react'
import axiosInstance from "../../utils/axiosInstance";
import Box from "@mui/material/Box";
import {Card, CardActionArea, CardContent, Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import {SessionContext} from "../../context/SessionContext";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const [boards, setBoards] = useState([])
    const session = useContext(SessionContext)
    const navigate = useNavigate()

    useEffect(() => {
        getBoards()
    }, []);

    const getBoards = async () => {
        try {
            const {data} = await axiosInstance('board/' + session.section_id + '/')
            setBoards(data)
        } catch (error) {

            //TODO REMOVE LATER
            console.log(error)
            getBoards()
        }

    }

    const handleSelect = (board) => {
        navigate('/bingo/' + board.board_id + '/' + board.board_name)
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
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardActionArea onClick={() => handleSelect(board)}>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography align="center" variant="h6" component="h2">
                                            {board.board_name}
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

export default Home