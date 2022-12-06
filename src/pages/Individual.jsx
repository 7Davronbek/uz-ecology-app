import React from 'react'
import Footer from '../components/Footer'
import IndHead from '../components/IndHead'
import IndWho from '../components/IndWho'
import Navbar from '../components/Navbar'
import PlantingOrganization from '../components/PlantingOrganization'
import SellingOrganization from '../components/SellingOrganization'

const Individual = () => {
    return (
        <>
            <Navbar />
            <IndHead />
            <IndWho />
            <PlantingOrganization />
            <SellingOrganization />
            <Footer />
        </>
    )
}

export default Individual