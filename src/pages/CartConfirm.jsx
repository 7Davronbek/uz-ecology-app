import React from 'react'
import DonateLayout from '../components/user/DonateLayout'

const CartConfirm = () => {
    return (
        <div className='CartConfirm CartInformation'>
            <DonateLayout>
                <h1>Daraxt ekish uchun xayriya qiling </h1>

                <div className="col-6">
                    <div className="cards">

                        <h3>Tasdiqlash</h3>

                        <div className="d-flex align-items-center pt-5">


                            <div className="inputWrap me-3 w-100">
                                <input placeholder='******' type="number" id='cartNumber' className="form-control last" />
                                <label htmlFor="cartNumber">Tasdiqlash kodini kiriting</label>
                            </div>

                            <div className="inputWrap w-100 ">
                                <button className="btn myBtn w-100">Tasdiqlash</button>
                            </div>

                        </div>



                    </div>
                </div>

            </DonateLayout>
        </div>
    )
}

export default CartConfirm