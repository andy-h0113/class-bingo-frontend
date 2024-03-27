import React from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Leaderboard = () => {
    const users = [
        [
            {
                "user_id": 1,
                "email": "user1@example.com",
                "username": "user1",
                "section": {
                    "section_id": 1,
                    "section_name": "Section A"
                },
                "num_wins": 5
            },
            {
                "user_id": 2,
                "email": "user2@example.com",
                "username": "user2",
                "section": {
                    "section_id": 2,
                    "section_name": "Section B"
                },
                "num_wins": 10
            },
            {
                "user_id": 3,
                "email": "user3@example.com",
                "username": "user3",
                "section": {
                    "section_id": 3,
                    "section_name": "Section C"
                },
                "num_wins": 2
            },
            {
                "user_id": 4,
                "email": "user4@example.com",
                "username": "user4",
                "section": {
                    "section_id": 4,
                    "section_name": "Section D"
                },
                "num_wins": 15
            },
            {
                "user_id": 5,
                "email": "user5@example.com",
                "username": "user5",
                "section": {
                    "section_id": 5,
                    "section_name": "Section E"
                },
                "num_wins": 8
            },
            {
                "user_id": 6,
                "email": "user6@example.com",
                "username": "user6",
                "section": {
                    "section_id": 6,
                    "section_name": "Section F"
                },
                "num_wins": 20
            },
            {
                "user_id": 7,
                "email": "user7@example.com",
                "username": "user7",
                "section": {
                    "section_id": 7,
                    "section_name": "Section G"
                },
                "num_wins": 3
            },
            {
                "user_id": 8,
                "email": "user8@example.com",
                "username": "user8",
                "section": {
                    "section_id": 8,
                    "section_name": "Section H"
                },
                "num_wins": 12
            },
            {
                "user_id": 9,
                "email": "user9@example.com",
                "username": "user9",
                "section": {
                    "section_id": 9,
                    "section_name": "Section I"
                },
                "num_wins": 6
            },
            {
                "user_id": 10,
                "email": "user10@example.com",
                "username": "user10",
                "section": {
                    "section_id": 10,
                    "section_name": "Section J"
                },
                "num_wins": 18
            }
        ]

    ]

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
                        Leaderboard
                    </Typography>
                </Container>
            </Box>
        </div>
    )
}

export default Leaderboard