import React from 'react'
import Footer from '../components/Footer'
import FriendHead from '../components/FriendHead'
import Navbar from '../components/Navbar'
import PlantingOrganization from '../components/PlantingOrganization'
import SellingOrganization from '../components/SellingOrganization'

const Friends = () => {
    return (
        <>
            <Navbar />
            <FriendHead />
            <PlantingOrganization />
            <SellingOrganization />
            <Footer />
        </>
    )
}

export default Friends