import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";

const Bingo = () => {
    const { boardId} = useParams()

    return (
        <div>
            Bingo, {boardId}
        </div>
    )
}

export default Bingo