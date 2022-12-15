import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import UserLayout from '../components/user/UserLayout'
import { API_PATH, CONFIG, GOOGLE_KEY } from '../tools/constants'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { toast } from 'react-toastify';
import StaticOfDonate from '../components/StaticOfDonate';

const Sales = () => {
    const [catchRegion, setCatchRegion] = useState('')
    const [catchTreeClass, setCatchTreeClass] = useState('')

    const [classifier, setClassifier] = useState([])
    const [treeTypes, setTreeTypes] = useState([])
    const [region, setRegion] = useState([])
    const [district, setDistrict] = useState([])
    const [companies, setCompanies] = useState([])

    const [getLoader, setGetLoader] = useState(true)
    const [treeLoader, setTreeLoader] = useState(true)


    const [center, setCenter] = useState({
        lat: 41.3127,
        lng: 69.2785,
    });
    const containerStyle = {
        width: '100%',
        height: '100%',
    };

    const drawMaker = useCallback(() => {
        return <Marker position={{
            lat: center.lat,
            lng: center.lng
        }}

            onClick={() => console.log("Event Hanlder Called")} />
    }, [center.lat, center.lng]);

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

    const getCompanies = useCallback(async () => {
        await axios.get(API_PATH + `/trades/delivery-company/?region_id=${catchRegion}`, CONFIG)
            .then((res) => {
                setCompanies(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [catchRegion]);

    const [type_tree, settype_tree] = useState('')
    const [count_tree, setcount_tree] = useState('')
    const [districts, setdistricts] = useState('')
    const [contract_number, setcontract_number] = useState('')
    const [contract_date, setcontract_date] = useState('')
    const [delivery_company, setdelivery_company] = useState('')
    const [contract_file, setcontract_file] = useState('')

    const [loader, setLoader] = useState(false)

    const trades = async (e) => {
        setLoader(true)
        e.preventDefault()
        const formData = new FormData()

        formData.append('type_tree', type_tree)
        formData.append('count_tree', count_tree)
        formData.append('district', districts)
        formData.append('latitude', center.lat.toString().slice(0, 9))
        formData.append('longitude', center.lng.toString().slice(0, 9))
        formData.append('contract_number', contract_number)
        formData.append('contract_date', contract_date)
        formData.append('delivery_company', delivery_company)
        formData.append('contract_file', contract_file)


        await axios.post(API_PATH + `/trades/trade/`, formData, CONFIG)
            .then((res) => {
                toast.success('Success!')
                settype_tree('')
                setcount_tree('')
                setdistricts('')
                setcontract_number('')
                setcontract_date('')
                setdelivery_company('')
                setcontract_file('')
                setCatchRegion('')
                setCatchTreeClass('')
                setLoader(false)
            })
            .catch((err) => {
                setLoader(false)
                toast.error("Error! Something went wrong")
            })
    }



    useEffect(() => {
        getRegions()
        getDistricts()
        getTreeClass()
        getTreeType()
        getCompanies()
        drawMaker()
    }, [getDistricts, drawMaker, getTreeType, getCompanies])

    return (
        <div className='Sales inputsStyle'>
            <UserLayout>
                <h1>Savdolar</h1>

                <form onSubmit={trades} className="row">

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
                        <textarea name="" id="manzil" cols="40" className='form-control' ></textarea>
                    </div>



                    <div className="col-12 mb-5">
                        {isLoaded ? (
                            <div className="col-12 map">
                                <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={center}
                                    zoom={17}
                                    onClick={onMapClick}
                                >
                                    <>{drawMaker()}</>
                                </GoogleMap>
                            </div>
                        ) : (
                            <></>
                        )}

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="raqam">shartnoma raqami</label>
                        <input required onChange={e => setcontract_number(e.target.value)} value={contract_number} type="number" id='raqam' className="form-control" />

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="xisobot">shartnoma sanasi</label>
                        <input required onChange={e => setcontract_date(e.target.value)} value={contract_date} type="date" id='xisobot' className="form-control" />

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="xisobotraqami">shartnomani yuklash</label>
                        <input required onChange={e => setcontract_file(e.target.files[0])} type="file" id='xisobotraqami' className="form-control d-none" />
                        <div className="d-flex align-items-center">
                            <label className='d-block me-2 cursor' htmlFor="xisobotraqami"><img src="assets/icon/document.svg" alt="" /></label>
                            {contract_file && <label className='cursor'>{contract_file.name}</label>}
                        </div>

                    </div>

                    <div className="col-lg-4">

                        <label htmlFor="yetkazib">daraxt yetkazib beruvchi tashkilot</label>
                        <select onChange={e => setdelivery_company(e.target.value)} disabled={getLoader} name="" id="yetkazib" >
                            <option value=""></option>
                            {companies && companies.map((item, index) => (
                                <option key={index} value={item.id}>{item.name}</option>
                            ))}
                        </select>

                    </div>

                    <div className="col-lg-4 col-md-6 ms-auto mt-5 myBtnP">
                        <button disabled={loader} type='submit' className="btn myBtn w-100 d-flex align-items-center justify-content-center">davom etish</button>
                    </div>

                    <div style={{backgroundColor: "transparent"}} className="StaticOfDonate ">

                        <div className="col-12">
                            <StaticOfDonate />
                        </div>

                    </div>

                </form>
            </UserLayout>
        </div>
    )
}

export default Sales