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
            localStorage.setItem('user_id', null)
            localStorage.setItem('section_id', null)
            localStorage.setItem('username', null)
            return {
                "sessionStatus": false,
                "user_id": null,
                "section_id": null,
                "username": null
            }
        }
        default: {
            console.log("Hello")
        }
    }
}