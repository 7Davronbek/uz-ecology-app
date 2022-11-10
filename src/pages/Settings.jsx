import React from 'react'
import UserLayout from '../components/user/UserLayout'

const Settings = () => {
    return (
        <div className='Settings inputsStyle'>
            <UserLayout>
                <h1>Sozlamalar</h1>
                <h2>Tekshirish uchun telefon raqamingizni kiriting</h2>

                <div className="row">

                    <div className="col-lg-4">

                        <label htmlFor="raqam">Telefon raqami</label>
                        <input type="text" id='raqam' placeholder='+998 (90) 000 00 00' className="form-control" />

                        <button className="btn myBtn mb-4">Yuborish</button>
                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="sms">SMS KODNI KIRITING</label>
                        <input type="text" id='sms' placeholder='* * * * * *' className="form-control" />

                        <button className="btn myBtn secondary mb-4">Yuborish</button>
                    </div>

                </div>
            </UserLayout>
        </div>
    )
}

export default Settings