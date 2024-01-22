import axiosInstance from "./axiosInstance";

const authService = {
    refreshToken: async() => {
        try {
            const refreshToken = localStorage.getItem('refreshToken')
            const response = await axiosInstance.post('/refresh',
                {
                    "refresh": refreshToken
                })
            const { accessToken, newRefreshToken } = response.data

            localStorage.setItem('accessToken', accessToken)
            localStorage.setItem('refreshToken', newRefreshToken)

            // Retry original API Request with new access token
            return true
        } catch (error) {
            console.error("Error refreshing token:", error)

            // Handle token refresh error (logout user)
            return false
        }
    }
}

export default authService