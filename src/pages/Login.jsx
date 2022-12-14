import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import DonateLayout from '../components/user/DonateLayout'
import { LOGIN } from '../redux/actions/authAction'
import InputMask from "react-input-mask";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loginLoading = useSelector(state => state.auth.loginLoading)

    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className='Login Register'>
            <DonateLayout>

                <h1>Kirish</h1>

                <div className="col-lg-6">
                    <div className="cards">
                        <label htmlFor="phone">Telefon raqam</label>
                        <InputMask
                            mask="+\9\9\8999999999"
                            onChange={e => setPhone(e.target.value)} value={phone} type="text" id='phone' className="form-control"
                            alwaysShowMask={true}
                            maskChar="_"
                            required='required'
                        />

                        <label htmlFor="password">Parol</label>
                        <input onChange={e => setPassword(e.target.value)} value={password} type="password" id='password' className="form-control" />

                        <button disabled={loginLoading} onClick={() => dispatch(LOGIN(phone, password, navigate))} className={`btn myBtn w-100 d-flex align-items-center justify-content-center`}> {loginLoading ? <span className='spinner-border spinner-border-sm text-success me-2'></span> : ''} Kirish</button>

                        <Link className='a' to='/register'>Akkauntingiz yo'qmi?</Link>
                    </div>
                </div>

            </DonateLayout >
        </div >
    )
}

export default Login