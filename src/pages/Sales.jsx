import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserLayout from '../components/user/UserLayout'
import { API_PATH, CONFIG } from '../tools/constants'

const Sales = () => {
    const [catchRegion, setCatchRegion] = useState('')
    const [catchTreeClass, setCatchTreeClass] = useState('')

    const getRegions = async () => {
        await axios.get(API_PATH + '/trades/region/', CONFIG)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getDistricts = async () => {
        await axios.get(API_PATH + `/trades/district/?region_id=${catchRegion}`, CONFIG)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getTreeClass = async () => {
        await axios.get(API_PATH + '/trades/tree-classifier/', CONFIG)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getTreeType = async () => {
        await axios.get(API_PATH + `/trades/tree-type/?classifier_id=${catchTreeClass}`, CONFIG)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getRegions()
        getDistricts()
        getTreeClass()
        getTreeType()
    }, [])

    return (
        <div className='Sales inputsStyle'>
            <UserLayout>
                <h1>Savdolar</h1>
                {/* <h2>Ekiluvchi daraxt turi va xududini tanlang</h2> */}

                <div className="row">

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
                        <input type="number" id='soni' className="form-control" />

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

                    <div className="col-lg-4 col-md-6 ms-auto mt-4 myBtnP">
                        <button className="btn myBtn w-100 d-flex align-items-center justify-content-center">davom etish</button>
                    </div>

                </div>
            </UserLayout>
        </div>
    )
}

export default Sales