import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import DonateLayout from '../components/user/DonateLayout'
import { updateAuth } from '../redux/actions/authAction'
import InputMask from "react-input-mask";

const Register = () => {
    // const phone = useSelector(state => state.auth.userPhone)
    // const password = useSelector(state => state.auth.userPassword)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const next = () => {
        setLoading(true)
        if (phone.length > 7 && password.length > 4) {
            dispatch(updateAuth({ userPhone: phone, userPassword: password }))
            navigate('/user-type', { replace: true })
            setLoading(false)
        } else {
            toast.error("Ma'lumotlarni to'ldiring")
            setLoading(false)
        }
    }

    return (
        <div className='Register'>
            <DonateLayout>

                <h1>Registratsiya</h1>
                <div className="col-lg-6 reg_inp">
                    <div className="cards">
                        <label htmlFor="phone">Telefon raqam</label>
                        <InputMask
                            mask="+\9\9\8999999999"
                            onChange={e => setPhone(e.target.value)} value={phone} type="text" id='phone' className="form-control"
                            alwaysShowMask={true}
                            maskChar="_"
                            required='required'
                        />
                        {/* <input /> */}

                        <label htmlFor="password">Parol</label>
                        <input onChange={e => setPassword(e.target.value)} value={password} type="password" id='password' className="form-control" />

                        <button onClick={next} disabled={loading} className="btn myBtn w-100"> {loading ? <span className='spinner-border spinner-border-sm text-success me-2'></span> : ''} Keyingisi</button>

                        <Link className='a' to='/login'>Akkauntingiz bormi?</Link>
                    </div>
                </div>
            </DonateLayout>
        </div>
    )
}

export default Register