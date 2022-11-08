import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'

const App = () => {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<Main />} />
                </Routes>
            </HashRouter>
        </>
    )
}

export default App