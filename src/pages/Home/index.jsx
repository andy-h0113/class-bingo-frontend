import React, {useEffect} from 'react'
import axiosInstance from "../../utils/axiosInstance";

const Home = () => {
    useEffect(() => {
        getSection()
    }, []);

    const getSection = async () => {
        try {
            await axiosInstance('/section/')
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <div>
            Homepage
        </div>
    )
}

export default Home