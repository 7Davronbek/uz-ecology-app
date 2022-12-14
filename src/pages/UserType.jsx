import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import DonateLayout from '../components/user/DonateLayout'
import { REGISTER } from '../redux/actions/authAction'

const UserType = () => {
    const phone = useSelector(state => state.auth.userPhone)
    const password = useSelector(state => state.auth.userPassword)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const verify = () => {
        if (phone.length === 0 || password.length === 0) {
            return navigate('/register', { replace: true })
        }
    }

    useEffect(() => {
        verify()
    }, [])

    return (
        <div className='UserType'>
            <DonateLayout>
                <h1>Kirish</h1>
                <div className="col-lg-6 user_box">

                    <div className="cards">
                        <h5>Daraxt ektiruvchi</h5>
                        <button onClick={() => dispatch(REGISTER(1, phone, password, navigate))} className="btn myBtn w-100">Kirish</button>
                    </div>

                    <div className="cards">
                        <h5>Daraxt ekuvchi</h5>
                        <button onClick={() => dispatch(REGISTER(2, phone, password, navigate))} className="btn myBtn w-100">Kirish</button>
                    </div>

                    <Link className='a' to='/login'>Akkauntingiz bormi?</Link>

                </div>
            </DonateLayout>
        </div>
    )
}

export default UserType