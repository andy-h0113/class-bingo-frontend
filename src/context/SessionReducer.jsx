export default function sessionReducer(initialState, action) {
    switch (action.type) {
        case 'start': {
            // console.log(sessionData)
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