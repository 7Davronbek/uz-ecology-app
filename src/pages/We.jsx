import React from 'react'
import Charity from '../components/Charity'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PlantingOrganization from '../components/PlantingOrganization'
import SellingOrganization from '../components/SellingOrganization'
import WeHead from '../components/WeHead'
import WeNum from '../components/WeNum'

const We = () => {
    return (
        <>
            <Navbar />
            <WeHead />
            <WeNum />
            <FAQ />
            <Charity />
            <PlantingOrganization />
            <SellingOrganization />
            <Footer />
        </>
    )
}

export default We