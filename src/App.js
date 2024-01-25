import React, {useContext, useReducer} from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Navbar from './components/Navbar/Navbar'
import {
    Routes,
    Route, useNavigate,
} from "react-router-dom";

import Login from './pages/Login/index'
import Home from './pages/Home/index'
import Bingo from './pages/Bingo/index'
import Leaderboard from './pages/Leaderboard/index'
import sessionReducer from "./context/SessionReducer";
import {SessionContext, SessionDispatchContext} from "./context/SessionContext";
import {helperHooks} from "./hooks/__helpers";


function App() {
    const initialSession = {
        "sessionStatus": false,
        "user_id": null,
        "section_id": null,
        "username": null
    }

    const [session, dispatch] = useReducer(
        sessionReducer,
        initialSession
    )

    helperHooks.navigate = useNavigate()

    return (
        <div className="App">
            <SessionContext.Provider value={session}>
                <SessionDispatchContext.Provider value={dispatch}>
                    {session.sessionStatus && <Navbar/>}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/bingo" element={<Bingo />} />
                        <Route path="/leaderboard" element={<Leaderboard />} />
                    </Routes>
                </SessionDispatchContext.Provider>
            </SessionContext.Provider>

        </div>
    );
}

export default App;
