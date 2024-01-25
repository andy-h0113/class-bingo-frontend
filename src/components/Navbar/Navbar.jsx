import React, {useContext} from 'react'
import {Button} from "@mui/material";
import {helperHooks} from "../../hooks/__helpers";
import {SessionDispatchContext} from "../../context/SessionContext";

const Navbar = () => {
    const dispatch = useContext(SessionDispatchContext)
    const handleClick = () => {

        const navigate = helperHooks.navigate

        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")

        navigate('/login')
        console.log(helperHooks)

        dispatch({
            type: 'end'
        })
    }

    return (
        <div>
            This is navbar
            <Button onClick={handleClick}>logout</Button>
        </div>
    )
}

export default Navbar