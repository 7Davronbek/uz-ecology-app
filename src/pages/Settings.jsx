import React from 'react'
import UserLayout from '../components/user/UserLayout'
import InputMask from "react-input-mask";

const Settings = () => {
    return (
        <div className='Settings inputsStyle'>
            <UserLayout>
                <h1>Sozlamalar</h1>
                <h2>Tekshirish uchun telefon raqamingizni kiriting</h2>

                <div className="row">

                    <div className="col-lg-4">

                        <label htmlFor="raqam">Telefon raqami</label>

                        <InputMask
                            mask="+\9\9\8999999999"
                            id='raqam' placeholder='+998 (90) 000 00 00' className="form-control"
                            alwaysShowMask={true}
                            maskChar="_"
                            required='required'
                        />

                        {/* <input type="text" /> */}

                        <button className="btn myBtn mb-4">Yuborish</button>
                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="sms">SMS KODNI KIRITING</label>

                        <InputMask
                            mask="99999"
                            placeholder='******' id='cartNumber' className="form-control last"
                            alwaysShowMask={true}
                            maskChar="*"
                            required='required'
                        />

                        {/* <input type="text" id='sms' placeholder='* * * * * *' className="form-control" /> */}

                        <button className="btn myBtn secondary mb-4">Yuborish</button>
                    </div>

                </div>
            </UserLayout>
        </div>
    )
}

export default Settings