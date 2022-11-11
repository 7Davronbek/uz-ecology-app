import React from 'react'
import { useNavigate } from 'react-router-dom'
import DonateLayout from '../components/user/DonateLayout'

const CartInformation = () => {
    const nav = useNavigate()
    return (
        <div className='CartInformation'>
            <DonateLayout>
                <h1>Daraxt ekish uchun xayriya qiling </h1>

                <div className="col-6">
                    <div className="cards">

                        <h3>Karta ma’lumotlarini kiriting</h3>

                        <div className="d-flex align-items-center pt-5 pb-4">


                            <div className="inputWrap me-3 w-100">
                                <input placeholder='1234 5678 7777 7777' type="number" id='cartNumber' className="form-control" />
                                <label htmlFor="cartNumber">Karta raqami</label>
                            </div>

                            <div className="inputWrap w-100 ">
                                <input placeholder='MM/YY' type="number" id='cartInfo' className="form-control" />
                                <label htmlFor="cartInfo">Amal qilish muddati</label>
                            </div>

                        </div>

                        <button onClick={() => { nav('/donate-cart-confirm', { replace: true }) }} className="btn myBtn w-100">Keyingisi</button>

                    </div>
                </div>
            </DonateLayout>
        </div>
    )
}

export default CartInformation