import React, {useContext, useEffect, useRef, useState} from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import {alpha, Card, CardActionArea, CardContent, styled} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


const BingoBoard = () => {
    const [boardTiles, setBoardTiles] = useState([])

    useEffect(() => {
        getBoardTiles()
    }, []);

    const getBoardTiles = async () => {
        // try {
        //     const { data } = await axiosInstance.get('boardtileuser/' + boardId + '/' + session.user_id + '/')
        //     data.sort((a, b) => {
        //         if (a.position_row === b.position_row) {
        //             return a.position_col - b.position_col;
        //         }
        //         return a.position_row - b.position_row;
        //     });
        //
        //     setBoardTiles(data)
        //     console.log(data)
        // } catch (error) {
        //     console.log(error)
        //     getBoardTiles()
        // }
        const data = [
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 0,
                "position_col": 0,
                "selected": false,
                "tile_id": 1,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 0,
                "position_col": 1,
                "selected": false,
                "tile_id": 2,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 0,
                "position_col": 2,
                "selected": false,
                "tile_id": 3,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 0,
                "position_col": 3,
                "selected": false,
                "tile_id": 4,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 0,
                "position_col": 4,
                "selected": false,
                "tile_id": 5,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 1,
                "position_col": 0,
                "selected": false,
                "tile_id": 6,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 1,
                "position_col": 1,
                "selected": false,
                "tile_id": 7,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 1,
                "position_col": 2,
                "selected": false,
                "tile_id": 8,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 1,
                "position_col": 3,
                "selected": false,
                "tile_id": 9,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 1,
                "position_col": 4,
                "selected": false,
                "tile_id": 10,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 2,
                "position_col": 0,
                "selected": false,
                "tile_id": 11,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 2,
                "position_col": 1,
                "selected": false,
                "tile_id": 12,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 2,
                "position_col": 2,
                "selected": true,
                "tile_id": 13,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 2,
                "position_col": 3,
                "selected": false,
                "tile_id": 14,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 2,
                "position_col": 4,
                "selected": false,
                "tile_id": 15,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 3,
                "position_col": 0,
                "selected": false,
                "tile_id": 16,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 3,
                "position_col": 1,
                "selected": false,
                "tile_id": 17,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 3,
                "position_col": 2,
                "selected": false,
                "tile_id": 18,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 3,
                "position_col": 3,
                "selected": false,
                "tile_id": 19,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 3,
                "position_col": 4,
                "selected": false,
                "tile_id": 20,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 4,
                "position_col": 0,
                "selected": false,
                "tile_id": 21,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 4,
                "position_col": 1,
                "selected": false,
                "tile_id": 22,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 4,
                "position_col": 2,
                "selected": false,
                "tile_id": 23,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 4,
                "position_col": 3,
                "selected": false,
                "tile_id": 24,
                "text": "sample text"
            },
            {
                "user_id": 2,
                "board_id": 2,
                "position_row": 4,
                "position_col": 4,
                "selected": false,
                "tile_id": 25,
                "text": "sample text"
            }
        ]
        setBoardTiles(data)
    }

    const StyledCard = styled(Card, {
        shouldForwardProp: (prop) => prop !== 'success',
    })(({ success, theme }) => ({
        width: 300,
        ...(success && {
            color: theme.palette.success.main,
            '& .MuiPaper-root': {
                [`&:hover, &.Mui-focusVisible`]: {
                    boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
                },
                [`&.Mui-active`]: {
                    boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
                },
            },
        }),
    }));

    const handleChange = (tile) => {
        tile.selected = !tile.selected
        console.log("hello")
        // setBoardTiles(boardTiles);
    };

    const colorHandle = (tile) => {
        return tile.selected ? "green" : "white"
    }

    return (
        <Grid container spacing={0} columns={5}>
            {boardTiles.map((tile) => (
                <Grid item={"true"} key={tile.tile} xs={1} sm={1} md={1}>
                    <StyledCard
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
                            color: 'success.main',
                            borderColor: 'success.main',
                        }}
                        onClick={handleChange}
                    >
                        <CardActionArea>
                            <CardContent sx={{height: "auto", alignItems: "center", justifyContent: "center", textAlign: "center", flexDirection: 'column'}}>
                                <Typography align="center" justify="middle" variant="subtitle1" component="h2">
                                    {(tile.position_row === 2 && tile.position_col === 2) ? "Free" : tile.text}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </StyledCard>
                </Grid>
            ))}
        </Grid>
    )
}

export default BingoBoard