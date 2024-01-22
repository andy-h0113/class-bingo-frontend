
const useLogout = () => {
    // Clear tokens from localStorage
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
}

export default useLogout