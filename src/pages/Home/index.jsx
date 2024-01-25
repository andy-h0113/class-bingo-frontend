import React, {useContext, useEffect, useState} from 'react'
import axiosInstance from "../../utils/axiosInstance";
import Box from "@mui/material/Box";
import {Card, CardActionArea, CardContent, Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import {SessionContext} from "../../context/SessionContext";

const Home = () => {
    const [boards, setBoards] = useState([])
    const session = useContext(SessionContext)

    useEffect(() => {
        getBoards()
    }, []);

    const getBoards = async () => {
        try {
            const {data} = await axiosInstance('board/' + session.section_id + '/')
            setBoards(data)
        } catch (error) {
            console.error(error)
        }

    }

    const handleSelect = (board) => {
        console.log(board)
    }

    return (
        <CssBaseline>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
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
                        Business Bozo Bingo
                    </Typography>
                    <Typography variant="h5" align="left" color="text.secondary" paragraph>
                        Welcome, {session.username}
                    </Typography>
                </Container>
            </Box>
            <Container sx={{ py: 8 }} maxWidth="lg">
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