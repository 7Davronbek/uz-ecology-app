import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import DonateLayout from '../components/user/DonateLayout'
import { updateAuth } from '../redux/actions/authAction'

const Register = () => {
    // const phone = useSelector(state => state.auth.userPhone)
    // const password = useSelector(state => state.auth.userPassword)
    const dispatch = useDispatch()

    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const next = () => {
        if (phone.length > 7 && password.length > 4) {
            dispatch(updateAuth({ userPhone: phone, userPassword: password }))
            toast.success('Success')
            navigate('/user-type', { replace: true })
        } else {
            toast.error("Ma'lumotlarni to'ldiring")
        }
    }

    return (
        <div className='Register'>
            <DonateLayout>
                <h1>Registratsiya</h1>

                <div className="col-lg-6">
                    <div className="cards">
                        <label htmlFor="phone">Telefon raqam</label>
                        <input onChange={e => setPhone(e.target.value)} value={phone} type="text" id='phone' className="form-control" />

                        <label htmlFor="password">Parol</label>
                        <input onChange={e => setPassword(e.target.value)} value={password} type="password" id='password' className="form-control" />

                        <button onClick={next} disabled={loading} className="btn myBtn w-100">Keyingisi</button>

                        <Link className='a' to='/login'>Akkauntingiz bormi?</Link>
                    </div>
                </div>

            </DonateLayout>
        </div>
    )
}

export default Register