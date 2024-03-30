import React, {useContext, useEffect, useRef, useState} from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import {alpha, Card, CardActionArea, CardContent, styled} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {palette} from "@mui/system";


const BingoBoard = ({winStatusChanger, getBoardTiles, setBoardTiles, boardTiles}) => {


    useEffect(() => {
        getBoardTiles()
    }, []);

    const BINGO_TITLE = ["B", "I", "N", "G", "O"]


    const handleChange = (event, selectedTile) => {
        const index = boardTiles.findIndex(tile => tile.tile_id === selectedTile.tile_id);
        var boardTilesCopy = JSON.parse(JSON.stringify(boardTiles))

        if (index !== -1) {
            boardTilesCopy[index].selected = !boardTilesCopy[index].selected;
            setBoardTiles(boardTilesCopy)
            if (checkWin(boardTilesCopy)) {
                console.log("win")
                winStatusChanger(true)
            }
        } else {
            console.log(`Tile with tile_id ${selectedTile.tile_id} not found.`);
        }
    };

    const checkWin = (tiles)=> {
        const rows = [[], [], [], [], []];
        const cols = [[], [], [], [], []];
        const diagonals = [[], []];

        // Distribute tiles into rows, columns, and diagonals
        tiles.forEach(tile => {
            const { position_row: row, position_col: col } = tile;
            rows[row].push(tile);
            cols[col].push(tile);
            if (row === col) diagonals[0].push(tile);
            if (row + col === 4) diagonals[1].push(tile);
        });

        // Check if any row, column, or diagonal has all tiles selected
        for (let row of rows) {
            if (row.every(tile => tile.selected)) return true;
        }

        for (let col of cols) {
            if (col.every(tile => tile.selected)) return true;
        }

        for (let diagonal of diagonals) {
            if (diagonal.every(tile => tile.selected)) return true;
        }

        return false;
    }


    return (
            <Grid container spacing={1} columns={5} sx={{ maxWidth:800, maxHeight:800 }}>
                {BINGO_TITLE.map((letter) => (
                    <Grid item={"true"} key={letter} xs={1} sm={1} md={1}>
                        <Box
                            sx={{
                                width: {
                                    xs: "100%",
                                    lg: "100%",
                                    xl: "100%",
                                },
                                height: "auto",
                                border: 1,
                                borderColor: "primary.light",
                                borderRadius: "50%",
                                boxShadow: 0,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                                aspectRatio: "1/1",
                                bgcolor: 'background.paper',
                            }}
                        >
                            <CardContent sx={{height:'auto', alignItems: "center", justifyContent: "center", textAlign: "center", flexDirection: 'column'}}>
                                <Typography align="center" justify="middle" variant="h1" component="h2" sx={{fontWeight: 'bold', color:'primary.main'}}>
                                    {letter}
                                </Typography>
                            </CardContent>
                        </Box>
                    </Grid>
                ))}

                {boardTiles.map((tile) => (
                    <Grid item={"true"} key={tile.tile} xs={1} sm={1} md={1} >
                        <Box
                            sx={{
                                width: {
                                    xs: "100%",
                                    lg: "100%",
                                    xl: "100%",
                                },
                                height: "auto",
                                border: "0",
                                borderRadius: "16px",
                                boxShadow: 1,
                                borderColor: 'success.main',
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                                aspectRatio: "1/1",
                                bgcolor: tile.selected ? 'success.light' : 'background.component'
                            }}
                            onClick={(e) => {
                                handleChange(e, tile)
                            }}
                        >
                            <CardContent sx={{height:'auto', alignItems: "center", justifyContent: "center", textAlign: "center", flexDirection: 'column'}}>
                                <Typography align="center" justify="middle" variant="subtitle1" component="h2" >
                                    {(tile.position_row === 2 && tile.position_col === 2) ? "Free" : tile.text}
                                </Typography>
                            </CardContent>
                        </Box>
                    </Grid>
                ))}
            </Grid>
    )
}

export default BingoBoard