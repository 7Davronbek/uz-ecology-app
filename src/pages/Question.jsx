import React from 'react'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import QuestionHead from '../components/QuestionHead'

const Question = () => {
    return (
        <>
            <Navbar />
            <QuestionHead />
            <FAQ />
            <Footer />
        </>
    )
}

export default Question