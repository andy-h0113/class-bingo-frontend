export default function sessionReducer(initialState, action) {
    switch (action.type) {
        case 'start': {
            localStorage.setItem('sessionStatus', action.sessionStatus)
            localStorage.setItem('user_id', action.user_id)
            localStorage.setItem('section_id', action.section_id)
            localStorage.setItem('username', action.username)
            const newState = {
                "sessionStatus": action.sessionStatus,
                "user_id": action.user_id,
                "section_id": action.section_id,
                "username": action.username
            }
            console.log(newState)
            return newState
        }
        case 'end': {
            localStorage.setItem('sessionStatus', false)
            localStorage.setItem('user_id', 2)
            localStorage.setItem('section_id', 2)
            localStorage.setItem('username', "username")
            return {
                "sessionStatus": false,
                "user_id": 2,
                "section_id": 2,
                "username": "username"
            }
        }
        default: {
            console.log("Hello")
        }
    }
}