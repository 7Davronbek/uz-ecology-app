import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import DonateLayout from '../components/user/DonateLayout'
import { PHONEVERIFY } from '../redux/actions/authAction'
import InputMask from "react-input-mask";

const PhoneVerify = () => {
    const phone = useSelector(state => state.auth.userPhone)
    const password = useSelector(state => state.auth.userPassword)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [code, setCode] = useState('')

    const verify = () => {
        if (phone.length === 0 || password.length === 0) {
            return navigate('/register', { replace: true })
        }
    }

    useEffect(() => {
        verify()
    }, [])

    return (
        <div className='PhoneVerify CartInformation'>
            <DonateLayout>

                <h1>Iltimos, telefonni tasdiqlang!</h1>

                <div className="col-lg-6">
                    <div className="cards">

                        <h3>Tasdiqlash</h3>

                        <div className="d-flex align-items-center pt-5">


                            <div className="inputWrap me-3 w-100">
                                <InputMask
                                    mask="99999"
                                    value={code} onChange={e => setCode(e.target.value)} placeholder='******' id='cartNumber' className="form-control last"
                                    alwaysShowMask={true}
                                    maskChar="*"
                                    required='required'
                                />
                                {/* <input value={code} onChange={e => setCode(e.target.value)} placeholder='******' type="number" id='cartNumber' className="form-control last" /> */}
                                <label htmlFor="cartNumber">Tasdiqlash kodini kiriting</label>
                            </div>

                            <div className="inputWrap w-100 ">
                                <button onClick={() => dispatch(PHONEVERIFY(code, phone, password, navigate))} className="btn myBtn w-100">Tasdiqlash</button>
                            </div>

                        </div>

                    </div>
                </div>

            </DonateLayout>
        </div>
    )
}

export default PhoneVerify