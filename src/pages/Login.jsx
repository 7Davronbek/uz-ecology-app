import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import DonateLayout from '../components/user/DonateLayout'
import { LOGIN } from '../redux/actions/authAction'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className='Login Register'>
            <DonateLayout>

                <h1>Kirish</h1>

                <div className="col-lg-6">
                    <div className="cards">
                        <label htmlFor="phone">Telefon raqam</label>
                        <input onChange={e => setPhone(e.target.value)} value={phone} type="text" id='phone' className="form-control" />

                        <label htmlFor="password">Parol</label>
                        <input onChange={e => setPassword(e.target.value)} value={password} type="password" id='password' className="form-control" />

                        <button onClick={() => dispatch(LOGIN(phone, password, navigate))} className="btn myBtn w-100">Kirish</button>

                        <Link className='a' to='/register'>Akkauntingiz yo'qmi?</Link>
                    </div>
                </div>

            </DonateLayout>
        </div>
    )
}

export default Login