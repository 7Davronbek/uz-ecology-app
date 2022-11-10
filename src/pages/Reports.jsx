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
                        <textarea name="" id="izoh" cols="40" className='form-control' ></textarea>
                    </div>

                    <div className="col-12">
                        <h2>Ekiluvchi daraxt turi va xududini tanlang</h2>
                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="klassifikator">Daraxt klassifikatorini tanlang   </label>
                        <select name="" id="klassifikator" >
                            <option value=""></option>
                            <option value="Place">Some place</option>
                            <option value="Place">Some place</option>
                        </select>

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="turi">Daraxt turini tanlang</label>
                        <select name="" id="turi" >
                            <option value=""></option>
                            <option value="Place">Some place</option>
                            <option value="Place">Some place</option>
                        </select>

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="soni">daraxt soni</label>
                        <select name="" id="soni" >
                            <option value=""></option>
                            <option value="Place">Some place</option>
                            <option value="Place">Some place</option>
                        </select>

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="raqam">Telefon raqami</label>
                        <input type="text" id='raqam' placeholder='+998 (90) 000 00 00' className="form-control" />

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="xisobot">Foto xisobot</label>
                        <input type="file" id='xisobot' className="form-control" />

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="xisobotraqami">Xisobot raqami</label>
                        <input type="text" id='xisobotraqami' className="form-control" />

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="xudud">XUDUDNI TANLANG</label>
                        <select name="" id="xudud" >
                            <option value=""></option>
                            <option value="Place">Some place</option>
                            <option value="Place">Some place</option>
                        </select>

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="tuman">TUMANNI TANLANG</label>
                        <select name="" id="tuman" >
                            <option value=""></option>
                            <option value="Place">Some place</option>
                            <option value="Place">Some place</option>
                        </select>

                    </div>

                    <div className="col-lg-4">
                        <label htmlFor="manzil">manzilni kiriting</label>
                        <textarea name="" id="manzil" cols="40" className='form-control' ></textarea>
                    </div>



                    <div className="vh-100"></div>

                </div>



            </UserLayout>
        </div>
    )
}

export default Reports