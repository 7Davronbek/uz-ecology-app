import React from 'react'
import { Link } from 'react-router-dom'
import DonateLayout from '../components/user/DonateLayout'

const Register = () => {
    return (
        <div className='Register'>
            <DonateLayout>
                <h1>Registatsiya</h1>

                <div className="col-lg-6">
                    <div className="cards">
                        <label htmlFor="phone">Telefon raqam</label>
                        <input type="text" id='phone' className="form-control" />

                        <label htmlFor="password">Parol</label>
                        <input type="password" id='password' className="form-control" />

                        <button className="btn myBtn w-100">Keyingisi</button>

                        <Link to='/login'>Akkauntingiz bormi?</Link>
                    </div>
                </div>
            </DonateLayout>
        </div>
    )
}

export default Register