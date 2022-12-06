import React from 'react'
import CompHead from '../components/CompHead'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PlantingOrganization from '../components/PlantingOrganization'
import SellingOrganization from '../components/SellingOrganization'

const Companies = () => {
    return (
        <>
            <Navbar />
            <CompHead />
            <PlantingOrganization />
            <SellingOrganization />
            <Footer />
        </>
    )
}

export default Companies