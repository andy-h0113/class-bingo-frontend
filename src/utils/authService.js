import axiosInstance from "./axiosInstance";
import {helperHooks} from "../hooks/__helpers";

const authService = {
    refreshToken: () => {
        const refreshToken = localStorage.getItem('refreshToken')
        axiosInstance.post('/refresh/',
            {
                "refresh": refreshToken
            }).then((response) => {
            const { access, refresh } = response.data

            localStorage.setItem('accessToken', access)
            localStorage.setItem('refreshToken', refresh)

            // Retry original API Request with new access token
            return true
        }).catch((error) => {
            console.error("Error refreshing token:", error)

            // Handle token refresh error (logout user)
            localStorage.removeItem("accessToken")
            localStorage.removeItem("refreshToken")

            localStorage.setItem('sessionStatus', false)
            localStorage.setItem('user_id', null)
            localStorage.setItem('section_id', null)
            localStorage.setItem('username', null)

            helperHooks.navigate('/login')

            return false

        })
    }


}

export default authService