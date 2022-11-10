import React from 'react'
import { Link } from 'react-router-dom'

const DonateLayout = (props) => {
    return (
        <div className='DonateLayout'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    </div>
                    <div className="col-lg-6">
                        <Link to='/'><img src="assets/icon/fullIcon.svg" alt="" /></Link>
                        <div>
                            {props.children}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img">
                            <img src="assets/image/cartBg.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonateLayout