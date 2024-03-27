import React, {useContext, useEffect, useRef, useState} from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import {Card, CardActionArea, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


const BingoBoard = (props) => {
    const boardTiles = props.data

    return (
        <Grid container spacing={0} columns={5}>
            {boardTiles.map((tile) => (
                <Grid item={"true"} key={tile.tile} xs={1} sm={1} md={1}>
                    <Box
                        sx={{
                            width: {
                                xs: "100%",
                                lg: "100%",
                                xl: "100%",
                            },
                            height: "auto",
                            border: "1px solid black",
                            borderRadius: 0,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                            aspectRatio: "1/1",
                        }}
                    >
                        <Card>
                        {/*    <CardActionArea onClick={() => {*/}
                        {/*        console.log("click")*/}
                        {/*    }}>*/}
                                <CardContent sx={{ flexGrow: 1, p }}>
                                    <Typography align="center" variant="subtitle1" component="h2">
                                        {(tile.position_row === 2 && tile.position_col === 2) ? "Free" : tile.text}
                                    </Typography>
                                </CardContent>
                        {/*    </CardActionArea>*/}
                        </Card>
                    </Box>
                </Grid>
            ))}
        </Grid>
    )
}

export default BingoBoard