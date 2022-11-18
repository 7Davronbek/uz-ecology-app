import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import UserLayout from '../components/user/UserLayout'
import { API_PATH, CONFIG } from '../tools/constants'

const Transactions1 = () => {
    const [number_contract, setnumber_contract] = useState('')
    const [date_contract, setdate_contract] = useState('')
    const [number_akt, setnumber_akt] = useState('')
    const [date_akt, setdate_akt] = useState('')
    const [company_stir, setcompany_stir] = useState('')
    const [name_company, setname_company] = useState('')
    const [owner_jshshir, setowner_jshshir] = useState('')
    const [owner_fio, setowner_fio] = useState('')
    const [partner_stir, setpartner_stir] = useState('')
    const [partner_name, setpartner_name] = useState('')
    const [partner_owner_jshshir, setpartner_owner_jshshir] = useState('')
    const [partner_fio, setpartner_fio] = useState('')
    const [description, setdescription] = useState('')

    const [loading, setLoading] = useState(false)

    const postContract = async (e) => {
        setLoading(true)
        e.preventDefault()

        const formData = new FormData()
        formData.append('number_contract', number_contract)
        formData.append('date_contract', date_contract)
        formData.append('number_akt', number_akt)
        formData.append('date_akt', date_akt)
        formData.append('company_stir', company_stir)
        formData.append('name_company', name_company)
        formData.append('owner_jshshir', owner_jshshir)
        formData.append('owner_fio', owner_fio)
        formData.append('partner_stir', partner_stir)
        formData.append('partner_name', partner_name)
        formData.append('partner_owner_jshshir', partner_owner_jshshir)
        formData.append('partner_fio', partner_fio)
        formData.append('description', description)

        await axios.post(API_PATH + '/contracts/contract-with-partner/', formData, CONFIG)
            .then((res) => {
                console.log(res);
                setLoading(false)
                toast.success('Success!')
            })
            .catch((err) => {
                setLoading(false)
                toast.error(err.response.data.detail)
            })

    }

    return (
        <div className='Transactions Transactions1 inputsStyle'>
            <UserLayout>
                <h1>Bitimlar</h1>
                <h2>Daraxt ekilganligi to’g’risida onlayn AKT (sizning ma’lumotlaringiz)</h2>

                <form onSubmit={postContract} className="row">

                    <div className="col-lg-4">

                        <label htmlFor="shartnoma">Shartnoma raqami</label>
                        <input required onChange={e => setnumber_contract(e.target.value)} value={number_contract} type="text" id='shartnoma' className="form-control" />

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="date">SHARTNOMA SANASI</label>
                        <input required onChange={e => setdate_contract(e.target.value)} value={date_contract} type="date" id='date' className="form-control" />

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="aktraqami">AKT RAQAMI</label>
                        <input required onChange={e => setnumber_akt(e.target.value)} value={number_akt} type="text" id='aktraqami' className="form-control" />

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="aktdate">AKT SANASI</label>
                        <input required onChange={e => setdate_akt(e.target.value)} value={date_akt} type="date" id='aktdate' className="form-control" />

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="stir">tASHkilot stiri</label>
                        <input required onChange={e => setcompany_stir(e.target.value)} value={company_stir} type="text" id='stir' className="form-control" />

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="name">tashkilot nomi</label>
                        <input required onChange={e => setname_company(e.target.value)} value={name_company} type="text" id='name' className="form-control" />

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="shaxsjshshir">mas’ul shaxs jshshiri</label>
                        <input required onChange={e => setowner_jshshir(e.target.value)} value={owner_jshshir} type="text" id='shaxsjshshir' className="form-control" />

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="shaxsfish">mas’ul shaxs fish</label>
                        <input required onChange={e => setowner_fio(e.target.value)} value={owner_fio} type="text" id='shaxsfish' className="form-control" />

                    </div>

                    <div className="col-12">
                        <h2>Daraxt ekilganligi to’g’risida onlayn AKT (kontragent ma’lumotlari)</h2>
                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="stir2">tASHkilot stiri</label>
                        <input required onChange={e => setpartner_stir(e.target.value)} value={partner_stir} type="text" id='stir2' className="form-control" />

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="name2">tashkilot nomi</label>
                        <input required onChange={e => setpartner_name(e.target.value)} value={partner_name} type="text" id='name2' className="form-control" />

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="shaxsjshshir2">mas’ul shaxs jshshiri</label>
                        <input required onChange={e => setpartner_owner_jshshir(e.target.value)} value={partner_owner_jshshir} type="text" id='shaxsjshshir2' className="form-control" />

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="shaxsfish2">mas’ul shaxs fish</label>
                        <input required onChange={e => setpartner_fio(e.target.value)} value={partner_fio} type="text" id='shaxsfish2' className="form-control" />

                    </div>

                    <div className="col-12">
                        <label htmlFor="izoh">izoh</label>
                        <textarea required onChange={e => setdescription(e.target.value)} value={description} name="" id="izoh" cols="40" className='form-control' ></textarea>
                    </div>

                    <div className="col-lg-4 col-md-6 ms-auto mt-4 myBtnP">
                        <button disabled={loading} type='submit' className="btn myBtn w-100 d-flex align-items-center justify-content-center">davom etish</button>
                    </div>


                </form>
            </UserLayout>
        </div>
    )
}

export default Transactions1