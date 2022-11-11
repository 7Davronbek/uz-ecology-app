import React from 'react'
import { Link } from 'react-router-dom'
import DonateLayout from '../components/user/DonateLayout'

const Payment = () => {
    return (
        <div className='Payment'>
            <DonateLayout>
                <h1>Xayriya qilish uchun to’lov turini tanlang</h1>
                <div className="payWrap">
                    <Link to='/donate-cart'><img src="assets/image/pay/payme.png" alt="" /></Link>
                    <Link to='/donate-cart'><img src="assets/image/pay/click.png" alt="" /></Link>
                </div>
                <div className="payWrap">
                    <Link to='/donate-cart'><img src="assets/image/pay/paypal.png" alt="" /></Link>
                    <Link to='/donate-cart'><img src="assets/image/pay/visa.png" alt="" /></Link>
                    <Link to='/donate-cart'><img src="assets/image/pay/master.png" alt="" /></Link>
                </div>
            </DonateLayout>
        </div>
    )
}

export default Payment