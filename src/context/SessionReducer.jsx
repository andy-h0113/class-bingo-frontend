export default function sessionReducer(sessionStatus, action) {
    switch (action.type) {
        case 'start': {
            return true
        }
        case 'end': {
            return false
        }
        default: {
            console.log("Hello")
        }
    }
}