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
    const [phone, setphone] = useState('')
    const [number_report, setnumber_report] = useState('')
    const [description, setdescription] = useState('')

    const [image, setImage] = useState('')
    const [image1, setImage1] = useState('')
    const [image2, setImage2] = useState('')
    const [image3, setImage3] = useState('')

    // const [fileObj, setFileObj] = useState([])
    // const [fileArray, setFileArray] = useState([])
    // const [file, setFile] = useState([])

    // const [selectedImages, setSelectedImages] = useState([])
    // const [selectedImages2, setSelectedImages2] = useState([])

    // const onSelectFile = (e) => {
    //     const selectedFiles = e.target.files
    //     const selectedFilesArray = Array.from(selectedFiles)
    //     console.log(...selectedFiles);

    //     const imageArray = selectedFilesArray.map((file) => {
    //         return URL.createObjectURL(file)
    //     })

    //     setSelectedImages(imageArray)
    //     setSelectedImages2(...selectedFiles)
    // }

    // const uploadMultipleFiles = (e) => {
    //     fileObj.push(e.target.files)
    //     for (let i = 0; i < fileObj[0].length; i++) {
    //         fileArray.push(URL.createObjectURL(fileObj[0][i]))
    //     }
    //     const arr = Array.from(fileArray)
    //     console.log(arr);
    //     setFile(arr)
    //     console.log(file);

    // }

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
        formData.append('phone', phone)
        formData.append('number_report', number_report)

        formData.append('image', image)
        formData.append('image1', image1)
        formData.append('image2', image2)
        formData.append('image3', image3)

        formData.append('description', description)

        await axios.post(API_PATH + '/contracts/contract/', formData, CONFIG)
            .then((res) => {
                setLoading(false)
                toast.success('Success!')

                setnumber_akt('')
                setdate_contract('')
                setnumber_akt('')
                setdate_akt('')
                setcompany_stir('')
                setowner_fio('')
                setowner_jshshir('')
                setphone('')
                setnumber_report('')
                setImage('')
                setImage1('')
                setImage2('')
                setImage3('')
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

                    <div className="row">

                        <div className="col-lg-4">

                            <label htmlFor="phone">Telefon raqami</label>
                            <input required placeholder='+998 97 7777777' onChange={e => setphone(e.target.value)} value={phone}
                                type="text" id='phone' className="form-control" />

                        </div>

                        <div className="col-lg-4">

                            <label>Foto xisobot</label>
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

                                    {image && <label className='image ms-2 cursor' htmlFor='xisobot'>{image.name}</label>}
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

                                    {image1 && <label className='image ms-2 cursor' htmlFor='xisobot1'>{image1.name}</label>}
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

                                    {image2 && <label className='image ms-2 cursor' htmlFor='xisobot2'>{image2.name}</label>}
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

                                    {image3 && <label className='image ms-2 cursor' htmlFor='xisobot3'>{image3.name}</label>}
                                </div>

                            </div>
                            {/* <input
                                type="file"
                                id='xisobot'
                                className="form-control"
                                multiple
                                accept='image/png, image/jpg, image/jpeg, image/webp'
                                onChange={onSelectFile}
                            /> */}
                            {/* 
                            <div className="row">
                                {selectedImages && selectedImages.map((item, index) => (
                                    <div key={index} className="col-4 mb-2">
                                        <img className='w-100 h-100' style={{ objectFit: 'cover' }} src={item} alt="xisobot" />
                                        <div onClick={() => setSelectedImages(selectedImages.filter((e) => e !== item))}>delete</div>
                                    </div>
                                ))}
                                {fileArray && fileArray.map((url, index) => (
                                    <div key={index} className="col-4 mb-2">
                                        <img className='w-100 h-100' style={{ objectFit: 'cover' }}  src={url} alt="xisobot" />
                                    </div>
                                ))}
                            </div> */}

                        </div>

                        <div className="col-lg-4">

                            <label htmlFor="xisobotnumber">Xisobot raqami</label>
                            <input required onChange={e => setnumber_report(e.target.value)} value={number_report} type="number" id='xisobotnumber' className="form-control" />

                        </div>

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