import React from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const NoMatch = () => {
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
                        404 Page Not Found
                    </Typography>
                </Container>
            </Box>
        </div>
    )
}

export default NoMatch