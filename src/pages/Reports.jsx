import React, { useCallback, useEffect, useState } from 'react'
import UserLayout from '../components/user/UserLayout'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { API_PATH, CONFIG, GOOGLE_KEY } from '../tools/constants';
import axios from 'axios';
import { toast } from 'react-toastify';
import InputMask from "react-input-mask";

const Reports = () => {

    const [center, setCenter] = useState({
        lat: 41.3127,
        lng: 69.2785,
    });
    const containerStyle = {
        width: '100%',
        height: '100%',
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GOOGLE_KEY,
    });

    const onMapClick = (e) => {
        setCenter({
            lat: e?.latLng?.lat(),
            lng: e?.latLng?.lng(),
        });
    };

    const [catchRegion, setCatchRegion] = useState('')
    const [catchTreeClass, setCatchTreeClass] = useState('')

    const [classifier, setClassifier] = useState([])
    const [treeTypes, setTreeTypes] = useState([])
    const [region, setRegion] = useState([])
    const [district, setDistrict] = useState([])

    const [getLoader, setGetLoader] = useState(true)
    const [treeLoader, setTreeLoader] = useState(true)
    const [loader, setLoader] = useState(false)


    const getRegions = async () => {
        await axios.get(API_PATH + '/trades/region/', CONFIG)
            .then((res) => {
                setRegion(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getDistricts = useCallback(async () => {
        await axios.get(API_PATH + `/trades/district/?region_id=${catchRegion}`, CONFIG)
            .then((res) => {
                setDistrict(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [catchRegion]);

    const getTreeClass = async () => {
        await axios.get(API_PATH + '/trades/tree-classifier/', CONFIG)
            .then((res) => {
                setClassifier(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getTreeType = useCallback(async () => {
        await axios.get(API_PATH + `/trades/tree-type/?classifier_id=${catchTreeClass}`, CONFIG)
            .then((res) => {
                setTreeTypes(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [catchTreeClass]);


    const [company_stir, setcompany_stir] = useState('')
    const [company_name, setcompany_name] = useState('')
    const [owner_fio, setowner_fio] = useState('')
    const [owner_jshshir, setowner_jshshir] = useState('')
    const [contract_number, setcontract_number] = useState('')
    const [description, setdescription] = useState('')
    const [type_tree, settype_tree] = useState('')
    const [count_tree, setcount_tree] = useState('')
    const [phone, setphone] = useState('')

    const [image, setImage] = useState('')
    const [image1, setImage1] = useState('')
    const [image2, setImage2] = useState('')
    const [image3, setImage3] = useState('')

    const [number_report, setnumber_report] = useState('')
    const [districts, setdistricts] = useState('')

    const reports = async (e) => {
        setLoader(true)
        e.preventDefault()
        const formData = new FormData()

        formData.append('company_stir', company_stir)
        formData.append('company_name', company_name)
        formData.append('owner_fio', owner_fio)
        formData.append('owner_jshshir', owner_jshshir)
        formData.append('contract_number', contract_number)
        formData.append('description', description)
        formData.append('type_tree', type_tree)
        formData.append('count_tree', count_tree)
        formData.append('phone', phone)
        formData.append('number_report', number_report)
        formData.append('district', districts)

        formData.append('image', image)
        formData.append('image1', image1)
        formData.append('image2', image2)
        formData.append('image3', image3)

        formData.append('latitude', center.lat.toString().slice(0, 9))
        formData.append('longitude', center.lng.toString().slice(0, 9))


        await axios.post(API_PATH + `/reports/report/`, formData, CONFIG)
            .then((res) => {
                setcompany_stir('')
                setcompany_name('')
                setowner_fio('')
                setowner_jshshir('')
                setcontract_number('')
                setdescription('')
                settype_tree('')
                setcount_tree('')
                setphone('')
                setnumber_report('')
                setdistricts('')

                setImage('')
                setImage1('')
                setImage2('')
                setImage3('')

                setLoader(false)
                toast.success('Success!')
            })
            .catch((err) => {
                console.log(err);
                setLoader(false)
                toast.error("Error! Something went wrong")
            })
    }

    useEffect(() => {
        getRegions()
        getDistricts()
        getTreeClass()
        getTreeType()
        // gets()
    }, [getDistricts, getTreeType])

    return (
        <div className='Reports inputsStyle '>
            <UserLayout>

                <h1>Xisobotlar</h1>

                <h2>Daraxt ekilganligi to’g’risida onlayn AKT</h2>

                <form onSubmit={reports}>

                    <div className="row">
                        <div className="col-lg-4">

                            <label htmlFor="stir">tASHkilot stiri</label>
                            <input required value={company_stir} onChange={e => setcompany_stir(e.target.value)} type="text" id='stir' className="form-control" />

                            {/* <button className="btn myBtn mb-4">Yuborish</button> */}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">

                            <label htmlFor="name">tashkilot nomi</label>
                            <input required value={company_name} onChange={e => setcompany_name(e.target.value)} type="text" id='name' className="form-control" />

                        </div>

                        <div className="col-lg-4">

                            <label htmlFor="directorname">direktor fish</label>
                            <input required value={owner_fio} onChange={e => setowner_fio(e.target.value)} type="text" id='directorname' className="form-control" />

                        </div>

                        <div className="col-lg-4">

                            <label htmlFor="direktorjshshiri">direktor jshshiri</label>
                            <input required onChange={e => setowner_jshshir(e.target.value)} type="text" id='direktorjshshiri' className="form-control" />

                        </div>

                        <div className="col-lg-4">

                            <label htmlFor="shartnoma">sHARTNOMA RAQAMI</label>
                            <input required value={contract_number} onChange={e => setcontract_number(e.target.value)} type="text" id='shartnoma' className="form-control" />

                        </div>

                        <div className="col-12">
                            <label htmlFor="izoh">izoh</label>
                            <textarea required  value={description} onChange={e => setdescription(e.target.value)} name="" id="izoh" cols="40" className='form-control' ></textarea>
                        </div>

                        <div className="col-12">
                            <h2>Ekiluvchi daraxt turi va xududini tanlang</h2>
                        </div>

                        <div className="col-lg-4">

                            <label htmlFor="klassifikator">Daraxt klassifikatorini tanlang   </label>
                            <select onChange={e => { setCatchTreeClass(e.target.value); setTreeLoader(false) }} name="" id="klassifikator" >
                                <option value=""></option>
                                {classifier && classifier.map((item, index) => (
                                    <option key={index} value={item.id}>{item.name}</option>
                                ))}
                            </select>

                        </div>

                        <div className="col-lg-4">

                            <label htmlFor="turi">Daraxt turini tanlang</label>
                            <select onChange={e => settype_tree(e.target.value)} disabled={treeLoader} name="" id="turi" >
                                <option value=""></option>
                                {treeTypes && treeTypes.map((item, index) => (
                                    <option key={index} value={item.id}>{item.name}</option>
                                ))}
                            </select>

                        </div>

                        <div className="col-lg-4">

                            <label htmlFor="soni">daraxt soni</label>
                            <input required value={count_tree} onChange={e => setcount_tree(e.target.value)} type="number" id='soni' className="form-control" />

                        </div>

                        <div className="col-lg-4">

                            <label htmlFor="raqam">Telefon raqami</label>
                            <InputMask
                                mask="+\9\9\8999999999"
                                value={phone} onChange={e => setphone(e.target.value)}
                                placeholder='+998 (90) 000 00 00' className="form-control"
                                alwaysShowMask={true}
                                maskChar="_"
                                id='phone'
                                required='required'
                            />
                            {/* <input required type="text" id='raqam' placeholder='+998 (90) 000 00 00' className="form-control" /> */}

                        </div>

                        <div className="col-lg-4">

                            <label htmlFor="xisobot">Foto xisobot</label>
                            <div className="row">
                                <div className="col-lg-6">

                                    <input
                                        type="file"
                                        id='xisobot'
                                        name='xisobot'
                                        autoFocus
                                        className={`form-control  d-none`}
                                        accept='image/png, image/jpg, image/jpeg, image/webp'
                                        onChange={e => setImage(e.target.files[0])}
                                    />
                                    <label className='cursor' htmlFor="xisobot"><img src="assets/icon/document.svg" alt="" /></label>

                                    {image && <label className='image cursor' htmlFor='xisobot'>{image.name}</label>}
                                </div>
                                <div className="col-lg-6">

                                    <input
                                        type="file"
                                        id='xisobot1'
                                        className={`form-control d-none`}
                                        accept='image/png, image/jpg, image/jpeg, image/webp'
                                        onChange={e => setImage1(e.target.files[0])}
                                    />
                                    <label className='cursor' htmlFor="xisobot1"><img src="assets/icon/document.svg" alt="" /></label>

                                    {image1 && <label className='image cursor' htmlFor='xisobot1'>{image1.name}</label>}
                                </div>
                                <div className="col-lg-6">

                                    <input
                                        type="file"
                                        id='xisobot2'
                                        className={`form-control  d-none`}
                                        accept='image/png, image/jpg, image/jpeg, image/webp'
                                        onChange={e => setImage2(e.target.files[0])}
                                    />
                                    <label className='cursor' htmlFor="xisobot2"><img src="assets/icon/document.svg" alt="" /></label>

                                    {image2 && <label className='image cursor' htmlFor='xisobot2'>{image2.name}</label>}
                                </div>
                                <div className="col-lg-6">

                                    <input
                                        type="file"
                                        id='xisobot3'
                                        className={`form-control  d-none`}
                                        accept='image/png, image/jpg, image/jpeg, image/webp'
                                        onChange={e => setImage3(e.target.files[0])}
                                    />
                                    <label className='cursor' htmlFor="xisobot3"><img src="assets/icon/document.svg" alt="" /></label>

                                    {image3 && <label className='image cursor' htmlFor='xisobot3'>{image3.name}</label>}
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-4">

                            <label htmlFor="xisobotraqami">Xisobot raqami</label>
                            <input required onChange={e => setnumber_report(e.target.value)} value={number_report} type="text" id='xisobotraqami' className="form-control" />

                        </div>

                        <div className="col-lg-4">

                            <label htmlFor="xudud">XUDUDNI TANLANG</label>
                            <select onChange={(e) => { setCatchRegion(e.target.value); setGetLoader(false) }} name="" id="xudud" >
                                <option value=""></option>
                                {region && region.map((item, index) => (
                                    <option key={index} value={item.id}>{item.name}</option>
                                ))}
                            </select>

                        </div>

                        <div className="col-lg-4">

                            <label htmlFor="tuman">TUMANNI TANLANG</label>
                            <select onChange={e => setdistricts(e.target.value)} disabled={getLoader} name="" id="tuman" >
                                <option value=""></option>
                                {district && district.map((item, index) => (
                                    <option key={index} value={item.id}>{item.name}</option>
                                ))}
                            </select>

                        </div>

                        <div className="col-lg-4">
                            <label htmlFor="manzil">manzilni kiriting</label>
                            <textarea required  name="" id="manzil" cols="40" className='form-control' ></textarea>
                        </div>

                        <div className="col-12">
                            {isLoaded ? (
                                <div className="col-12 map">
                                    <GoogleMap
                                        mapContainerStyle={containerStyle}
                                        center={center}
                                        zoom={17}
                                        onClick={onMapClick}
                                    >
                                        <></>
                                    </GoogleMap>
                                </div>
                            ) : (
                                <></>
                            )}

                        </div>

                        <div className="col-lg-4 col-md-6 ms-auto mt-5 myBtnP">
                            <button disabled={loader} type='submit' className="btn myBtn w-100 d-flex align-items-center justify-content-center">davom etish</button>
                        </div>

                    </div>

                </form>



            </UserLayout>
        </div>
    )
}

export default Reports