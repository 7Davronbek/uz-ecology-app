import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Reports from './pages/Reports'

const App = () => {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/reports' element={<Reports />} />
                </Routes>
            </HashRouter>
        </>
    )
}

export default App