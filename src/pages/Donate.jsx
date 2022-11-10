import React from 'react'
import { Link } from 'react-router-dom'
import DonateLayout from '../components/user/DonateLayout'

const Donate = () => {
    return (
        <div className='Donate'>
            <DonateLayout>
                <h1>Daraxt ekish uchun xayriya qiling </h1>

                <div className="btnWrap">
                    <div className="col-4">
                        <Link className='btn myBtn secondary' to='/'>bekor qilish</Link>
                    </div>
                    <div className="col-4">
                        <Link className='btn myBtn' to='/'>davom etish</Link>
                    </div>
                </div>
            </DonateLayout>
        </div>
    )
}

export default Donate