import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import DonateLayout from '../components/user/DonateLayout'
import axios from 'axios'
import { API_PATH } from '../tools/constants'
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
                <div className="col-lg-6">

                    <div className="cards">
                        <h5>Daraxt ektiruvchi</h5>
                        <button onClick={(e) => dispatch(REGISTER('1', phone, password, navigate))} className="btn myBtn w-100">Kirish</button>
                    </div>

                    <div className="cards">
                        <h5>Daraxt ekuvchi</h5>
                        <button onClick={(e) => dispatch(REGISTER('2', phone, password, navigate))} className="btn myBtn w-100">Kirish</button>
                    </div>

                </div>
            </DonateLayout>
        </div>
    )
}

export default UserType