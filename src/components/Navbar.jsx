import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const location = useLocation()

    const changeNavbar = () => {
        if (window.scrollY >= 30) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeNavbar);

    return (
        <div className={`Navbar ${location.pathname === '/news-detail' && 'active '} ${navbar ? 'active' : ''}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <Link className='logo' to='/'>
                            <span><img src="assets/image/logo.svg" alt="" /></span>
                            <span className='text'>O’zbekiston respublikasi ekologiya
                                va atrof muhitni muhofaza qilish
                                davlat qo’mitasi</span>
                        </Link>
                    </div>
                    <div className="col-lg-5 ms-auto d-flex align-items-center">
                        <div className="money">
                            <h5 className='me-3'><span><img src="assets/icon/up.svg" alt="" /></span>12 367 700  сум</h5>
                            <h5><span><img src="assets/icon/upRed.svg" alt="" /></span>8 954 934 сум</h5>
                        </div>
                        <div className="lang ms-auto">
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