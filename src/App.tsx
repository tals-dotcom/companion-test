import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import LobbyMain from './components/LobbyMain.tsx'

import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

function AppContent() {
    const location = useLocation();

    return (
        <>
        <div id={"app"}>
        <div className={"min-h-screen"} id={"app"}>

                <LobbyMain />

        <div className={"toast-container fixed top-4 right-4 z-50"}>
        <div className={"space-y-3"}></div>
        </div>
        </div>
        </div>
        <iframe height={"0"} width={"0"} style={{display:"none", visibility:"hidden"}}></iframe>
        <iframe height={"0"} width={"0"} style={{display:"none", visibility:"hidden"}}></iframe>
        <iframe title={"archetype"} style={{display:"none", visibility:"hidden"}}></iframe>
        </>
    );
}

function App() {
    const defaultRoute = "/lobby";

    return (
        <Router>
            <Routes>
                {defaultRoute !== '/' && <Route path="/" element={<Navigate to={defaultRoute} replace />} />}
                <Route path="*" element={<AppContent />} />
            </Routes>
        </Router>
    );
}

export default App
