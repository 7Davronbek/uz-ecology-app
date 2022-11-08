import React from 'react'
import { Link } from 'react-router-dom'

const Charity = () => {
    return (
        <div className='Charity'>
            <div className="col-8 myCol">
                <div className="cards">
                    <h1>Daraxt ekish uchun xayriya qiling </h1>
                    <div className="payWrap">
                        <Link to='/'><img src="assets/image/pay/payme.png" alt="" /></Link>
                        <Link to='/'><img src="assets/image/pay/click.png" alt="" /></Link>
                    </div>
                    <div className="payWrap">
                        <Link to='/'><img src="assets/image/pay/paypal.png" alt="" /></Link>
                        <Link to='/'><img src="assets/image/pay/visa.png" alt="" /></Link>
                        <Link to='/'><img src="assets/image/pay/master.png" alt="" /></Link>
                    </div>
                </div>
            </div>
            <div className="col-4 rightCol">
                <img src="assets/image/cartBg.png" alt="" />
            </div>

        </div>
    )
}

export default Charity