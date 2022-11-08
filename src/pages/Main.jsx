import React from 'react'
import Charity from '../components/Charity'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import News from '../components/News'
import PlantingOrganization from '../components/PlantingOrganization'
import SellingOrganization from '../components/SellingOrganization'
import ToUsers from '../components/ToUsers'

const Main = () => {
    return (
        <>
            <Navbar />
            <Header />
            <ToUsers />
            <News />
            <FAQ />
            <Charity />
            <SellingOrganization />
            <PlantingOrganization />
            <Footer />
        </>
    )
}

export default Main