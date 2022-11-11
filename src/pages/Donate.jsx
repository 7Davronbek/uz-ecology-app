import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DonateLayout from '../components/user/DonateLayout'

const Donate = () => {
    const navigate = useNavigate()
    const [count, setCount] = useState('')
    return (
        <div className='Donate'>
            <DonateLayout>
                <h1>Daraxt ekish uchun xayriya qiling </h1>

                    <div className="col-6 mx-auto">
                        <div className="cards">
                            <h3> Ekiladigan daraxtlar soni:</h3>

                            <div className="numberWrap">
                                <h5 onClick={() => setCount('1')}>1</h5>
                                <h5 onClick={() => setCount('20')}>20</h5>
                                <h5 onClick={() => setCount('50')}>50</h5>
                                <h5 onClick={() => setCount('100')}>100</h5>
                                <label onClick={() => setCount('')} htmlFor="another"><h5>Boshqa</h5></label>
                            </div>

                            <div className="inputWrap">
                                <input value={count} onChange={e => setCount(e.target.value)} id='another' placeholder='70' type="number" className="form-control" />
                                <h6>UZS</h6>
                            </div>
                            
                        </div>
                    </div>

                <div className="btnWrap">
                    <div className="col-3 me-3">
                        <button onClick={() => navigate(-1)} className='btn myBtn secondary'>bekor qilish</button>
                    </div>
                    <div className="col-3">
                        <Link className='btn myBtn' to='/'>davom etish</Link>
                    </div>
                </div>
            </DonateLayout>
        </div>
    )
}

export default Donate