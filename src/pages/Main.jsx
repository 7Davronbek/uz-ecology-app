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
// import Donate from './Donate'
import StaticOfDonate from './../components/StaticOfDonate';

const Main = () => {
    return (
        <>
            <Navbar />
            <Header />
            <div className="StaticOfDonate">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <StaticOfDonate />
                        </div>
                    </div>
                </div>
            </div>
            <ToUsers />
            <News />
            <FAQ />
            {/* <Donate /> */}
            <Charity />
            <SellingOrganization />
            <PlantingOrganization />
            <Footer />
        </>
    )
}

export default Main