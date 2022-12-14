import React from 'react'
import { Link } from 'react-router-dom'

const DonateLayout = (props) => {
    return (
        <div className='DonateLayout'>
            <div className="row h-100">
                <div className="col-lg-7 leftside">
                    <Link to='/'><img src="assets/icon/fullIcon.svg" alt="" /></Link>
                    <div className='leftWrap'>
                        {props.children}
                    </div>
                </div>
                <div className="col-lg-5 rightImg">
                    <div className="img">
                        <img src="assets/image/cartBg.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonateLayout