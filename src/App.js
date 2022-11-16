import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import ControlPanel from './pages/ControlPanel'
import Main from './pages/Main'
import Sales from './pages/Sales'
import Reports from './pages/Reports'
import Transactions from './pages/Transactions'
import Settings from './pages/Settings'
import Donate from './pages/Donate'
import Payment from './pages/Payment'
import CartInformation from './pages/CartInformation'
import CartConfirm from './pages/CartConfirm'
import NewsDetail from './pages/NewsDetail'
import ScrollToTop from './components/ScrollToTop'
import Documents from './pages/Documents'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserType from './pages/UserType'
import PhoneVerify from './pages/PhoneVerify'
import Login from './pages/Login'

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
                    <Route path='/documents' element={<Documents />} />
                    <Route path='/news-detail' element={<NewsDetail />} />

                    <Route path='/register' element={<Register />} />
                    <Route path='/user-type' element={<UserType />} />
                    <Route path='/verify-phone' element={<PhoneVerify />} />
                    <Route path='/login' element={<Login />} />

                    <Route path='/donate' element={<Donate />} />
                    <Route path='/donate-payment' element={<Payment />} />
                    <Route path='/donate-cart' element={<CartInformation />} />
                    <Route path='/donate-cart-confirm' element={<CartConfirm />} />

                </Routes>
                <ScrollToTop />
                <ToastContainer position={'bottom-center'} />
            </HashRouter>
        </>
    )
}

export default App