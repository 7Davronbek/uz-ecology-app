import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import News from '../components/News'
import ToUsers from '../components/ToUsers'

const Main = () => {
    return (
        <>
            <Navbar />
            <Header />
            <ToUsers />
            <News />
            <div className="vh-100"></div>
        </>
    )
}

export default Main