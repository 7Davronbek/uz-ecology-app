import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PlantingOrganization from '../components/PlantingOrganization'
import SellingOrganization from '../components/SellingOrganization'
import WhereHead from '../components/WhereHead'

const Where = () => {
    return (
        <>
            <Navbar />
            <WhereHead />
            <PlantingOrganization />
            <SellingOrganization />
            <Footer />
        </>
    )
}

export default Where