import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import DonateLayout from '../components/user/DonateLayout'
import axios from 'axios'

const UserType = () => {
    const phone = useSelector(state => state.auth.userPhone)
    const password = useSelector(state => state.auth.userPassword)
    const navigate = useNavigate()
    const verify = () => {
        if (phone.length === 0 || password.length === 0) {
            return navigate('/register', { replace: true })
        }
    }

    const register = async (e) => {
        await axios.post()
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
                        <button onClick={(e) => register('1')} className="btn myBtn w-100">Kirish</button>
                    </div>

                    <div className="cards">
                        <h5>Daraxt ekuvchi</h5>
                        <button onClick={(e) => register('2')} className="btn myBtn w-100">Kirish</button>
                    </div>

                </div>
            </DonateLayout>
        </div>
    )
}

export default UserType