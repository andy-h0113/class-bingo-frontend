import React, {useReducer} from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Navbar from './components/Navbar/Navbar'
import {
    Routes,
    Route,
} from "react-router-dom";

import Login from './pages/Login/index'
import Home from './pages/Home/index'
import Bingo from './pages/Bingo/index'
import Leaderboard from './pages/Leaderboard/index'
import sessionReducer from "./context/SessionReducer";
import {SessionContext, SessionDispatchContext} from "./context/SessionContext";


function App() {
    const [session, dispatch] = useReducer(
        sessionReducer,
        false
    )

    return (
        <div className="App">
            <SessionContext.Provider value={session}>
                <SessionDispatchContext.Provider value={dispatch}>
                    {session && <Navbar/>}
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
