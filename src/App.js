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
import NoMatch from "./pages/NoMatch";
import CssBaseline from "@mui/material/CssBaseline";
import {createTheme, ThemeProvider} from "@mui/material/styles";


function App() {
    const initialSession = {
        "sessionStatus": localStorage.getItem('sessionStatus'),
        "user_id": localStorage.getItem('user_id'),
        "section_id": localStorage.getItem('section_id'),
        "username": localStorage.getItem('username')
    }

    const [session, dispatch] = useReducer(
        sessionReducer,
        initialSession
    )

    helperHooks.navigate = useNavigate()

    const defaultTheme = createTheme({
        palette: {
            background: {
                paper: "#fbfbfb",
                default: "#fbfbfb",
                component: "#ffffff"
            },
            action: {
                hover: "#42a5f5",
                active: "#42a5f5"
            }
        }
    });

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline>
                <SessionContext.Provider value={session}>
                    <SessionDispatchContext.Provider value={dispatch}>
                        {session.sessionStatus && <Navbar/>}

                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/login" element={<Login />} />
                                {/*<Route path="/bingo/:boardId/:boardName" element={<Bingo />} />*/}
                                <Route path="/bingo/1/2" element={<Bingo />} />
                                <Route path="/leaderboard" element={<Leaderboard />} />
                                <Route path="*" element={<NoMatch />} />
                            </Routes>
                    </SessionDispatchContext.Provider>
                </SessionContext.Provider>
            </CssBaseline>
        </ThemeProvider>
    );
}

export default App;
