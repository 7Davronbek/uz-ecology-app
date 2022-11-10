import React from 'react'
import UserLayout from '../components/user/UserLayout'

const Transactions = () => {
    return (
        <div className='Transactions inputsStyle'>
            <UserLayout>
                <h1>Bitimlar</h1>
                <h2>Daraxt ekilganligi to’g’risida onlayn AKT (sizning ma’lumotlaringiz)</h2>

                <div className="row">

                    <div className="col-lg-4">

                        <label htmlFor="stir">tASHkilot stiri</label>
                        <input type="text" id='stir' className="form-control" />

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="name">tashkilot nomi</label>
                        <input type="text" id='name' className="form-control" />

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="shaxsjshshir">mas’ul shaxs jshshiri</label>
                        <input type="text" id='shaxsjshshir' className="form-control" />

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="shaxsfish">mas’ul shaxs fish</label>
                        <input type="text" id='shaxsfish' className="form-control" />

                    </div>

                    <div className="col-12">
                        <h2>Daraxt ekilganligi to’g’risida onlayn AKT (kontragent ma’lumotlari)</h2>
                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="stir2">tASHkilot stiri</label>
                        <input type="text" id='stir2' className="form-control" />

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="name2">tashkilot nomi</label>
                        <input type="text" id='name2' className="form-control" />

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="shaxsjshshir2">mas’ul shaxs jshshiri</label>
                        <input type="text" id='shaxsjshshir2' className="form-control" />

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="shaxsfish2">mas’ul shaxs fish</label>
                        <input type="text" id='shaxsfish2' className="form-control" />

                    </div>

                    <div className="col-12">
                        <label htmlFor="izoh">izoh</label>
                        <textarea name="" id="izoh" cols="40" className='form-control' ></textarea>
                    </div>

                    <div className="col-lg-4 col-md-6 ms-auto mt-4">
                        <button className="btn myBtn w-100 d-flex align-items-center justify-content-center">davom etish</button>
                    </div>


                </div>
            </UserLayout>
        </div>
    )
}

export default Transactions