import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DonateLayout from '../components/user/DonateLayout'

const Donate = () => {
    const navigate = useNavigate()
    return (
        <div className='Donate'>
            <DonateLayout>
                <h1>Daraxt ekish uchun xayriya qiling </h1>

                <div className="btnWrap">
                    <div className="col-4">
                        <button onClick={() => navigate(-1)} className='btn myBtn secondary'>bekor qilish</button>
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