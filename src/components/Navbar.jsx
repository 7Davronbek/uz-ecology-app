import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <Link className='logo' to='/'>
                            <span><img src="assets/image/logo.svg" alt="" /></span>
                            <span className='text'>O’zbekiston respublikasi ekologiya
                                va atrof muhitni muhofaza qilish
                                davlat qo’mitasi</span>
                        </Link>
                    </div>
                    <div className="col-lg-3 ms-auto">
                        <div className="lang">
                            <select name="" id="">
                                <option value="uz">Uzb</option>
                                <option value="ru">Рус</option>
                                {/* <option value="uz">Uzb</option> */}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar