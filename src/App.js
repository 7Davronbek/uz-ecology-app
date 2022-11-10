import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import ControlPanel from './pages/ControlPanel'
import Main from './pages/Main'
import Sales from './pages/Sales'
import Reports from './pages/Reports'
import Transactions from './pages/Transactions'
import Settings from './pages/Settings'

const App = () => {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/reports' element={<Reports />} />
                    <Route path='/control-panel' element={<ControlPanel />} />
                    <Route path='/sales' element={<Sales />} />
                    <Route path='/transactions' element={<Transactions />} />
                    <Route path='/settings' element={<Settings />} />
                </Routes>
            </HashRouter>
        </>
    )
}

export default App