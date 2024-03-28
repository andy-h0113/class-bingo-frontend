import React, {useState} from 'react'
import {
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    InputLabel, MenuItem, OutlinedInput,
    Select
} from "@mui/material";
import winAnimation from "../../assets/win_animation.gif";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const AddTileDialog = ({boards, tileDialog, setTileDialog, setConfirmMsg}) => {
    const [selectBoard, setSelectBoard] = React.useState('');
    const [tileText, setTileText] = React.useState('')
    const [errorStatus, setErrorStatus] = useState(false)
    const handleClose = () => {
        setSelectBoard('')
        setTileText('')
        setTileDialog(false)
    }

    const handleChange = (event) => {
        setSelectBoard(event.target.value);
    };

    const handleSubmit = () => {
        setConfirmMsg(true)
        handleClose()
    }

    return (
        <React.Fragment>
            <Dialog
                open={tileDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>
                    {"Add Bingo Tile"}
                </DialogTitle>
                <DialogContent>
                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel>Board</InputLabel>
                        <Select
                            required
                            value={selectBoard}
                            label="Board"
                            onChange={handleChange}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selectBoard.board_name}
                                </Box>
                            )}
                        >
                            {boards.map((board) => (
                                <MenuItem
                                    key={board.board_id}
                                    value={board}
                                >
                                    {board.board_name}
                                </MenuItem>
                            ))}
                        </Select>
                        <TextField
                            error={errorStatus}
                            margin="normal"
                            required
                            fullWidth
                            label="Bingo Tile Text"
                            value={tileText}
                            onChange={e => setTileText(e.target.value)}
                            onFocus={() => setErrorStatus(false)}
                            autoFocus
                        />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button disabled={!tileText || !selectBoard} onClick={handleSubmit}>Create Tile</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default AddTileDialog