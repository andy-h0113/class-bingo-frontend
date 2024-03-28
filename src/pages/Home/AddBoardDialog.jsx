import React, {useState} from 'react'
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";

const AddBoardDialog = ({boardDialog, setBoardDialog, setConfirmMsg}) => {
    const [boardName, setBoardName] = React.useState('')
    const [errorStatus, setErrorStatus] = useState(false)
    const [tiles, setTiles] = useState(Array.from(" ".repeat(25)))
    const handleClose = () => {
        setBoardName('')
        setTiles(Array.from(" ".repeat(25)))
        setBoardDialog(false)
    }

    const handleSubmit = () => {
        setConfirmMsg(true)
        handleClose()
    }

    const handleTextChange = (e) => {
        e.preventDefault();

        const index = e.target.id;
        setTiles(s => {
            const newArr = s.slice();
            newArr[index] = e.target.value;

            return newArr;
        });
    }

    const addInput = () => {
        setTiles(s => {
            return [
                ...s,
                " "
            ];
        });
    };


    return (
        <React.Fragment>
            <Dialog
                open={boardDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>
                    {"Add New Bingo Board"}
                </DialogTitle>
                <DialogContent>
                    <FormControl sx={{ m: 1, width: 500 }}>
                        <TextField
                            error={errorStatus}
                            margin="normal"
                            required
                            fullWidth
                            label="Bingo Board Name"
                            value={boardName}
                            onChange={e => setBoardName(e.target.value)}
                            onFocus={() => setErrorStatus(false)}
                            autoFocus
                        />
                    </FormControl>
                        {tiles.map((tile, i) => (
                            <TextField
                                error={errorStatus}
                                margin="normal"
                                required
                                fullWidth
                                id={i}
                                label={`Tile ${i} Text`}
                                value={tile}
                                onChange={handleTextChange}
                                onFocus={() => setErrorStatus(false)}
                                autoFocus
                            />
                        ))}
                    <Button fullWidth onClick={e => addInput()} startIcon={<AddIcon />}>
                        Add Tile
                    </Button>
                </DialogContent>
                <DialogActions>
                    <Button disabled={!boardName || tiles.includes(" ")} onClick={handleSubmit}>Create Board</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default AddBoardDialog