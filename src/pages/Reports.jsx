import React from 'react'
import UserLayout from '../components/user/UserLayout'

const Reports = () => {
    return (
        <div className='Reports'>
            <UserLayout>

                <h1>Xisobotlar</h1>

                <h2>Daraxt ekilganligi to’g’risida onlayn AKT</h2>

                <div className="row">
                    <div className="col-lg-4">

                        <label htmlFor="stir">tASHkilot stiri</label>
                        <input type="text" id='stir' className="form-control" />

                        <button className="btn myBtn mb-4">Yuborish</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">

                        <label htmlFor="name">tashkilot nomi</label>
                        <input type="text" id='name' className="form-control" />

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="directorname">direktor fish</label>
                        <input type="text" id='directorname' className="form-control" />

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="direktorjshshiri">direktor jshshiri</label>
                        <input type="text" id='direktorjshshiri' className="form-control" />

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="shartnoma">sHARTNOMA RAQAMI</label>
                        <input type="text" id='shartnoma' className="form-control" />

                    </div>

                    <div className="col-12">
                        <label htmlFor="izoh">izoh</label>
                        <textarea name="" id="izoh" cols="40"  className='form-control' ></textarea>
                    </div>

                </div>

            </UserLayout>
        </div>
    )
}

export default Reports