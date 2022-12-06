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
                    <div className="col-lg-6 ms-auto d-flex align-items-center">


                        <div className="nav_box">
                            <Link to='/where' className="nav_box_up">Biz qayerga ekamiz <img className='nav_box_icon' src="/assets/image/nav_icon.png" alt="" />
                                <div className="nav_box_down">
                                    <div className="nav_box_down_left">
                                        <a className='nav_box_a' href="">Toshkent shahri</a>
                                        <a className='nav_box_a' href="">Surxondaryo viloyati</a>
                                        <a className='nav_box_a' href="">Samarqand viloyati</a>
                                        <a className='nav_box_a' href="">Qashqadaryo viloyati</a>
                                        <a className='nav_box_a' href="">Namangan viloyat</a>
                                        <a className='nav_box_a' href="">Jizzax Viloyati</a>
                                        <a className='nav_box_a' href="">Buxoro viloyati</a>

                                    </div>
                                    <div className="nav_box_down_right">
                                        <a className='nav_box_a' href="">Toshkent viloyati</a>
                                        <a className='nav_box_a' href="">Sirdaryo viloyati</a>
                                        <a className='nav_box_a' href="">Qoraqalpog’iston Respublikasi</a>
                                        <a className='nav_box_a' href="">Navoiy viloyati</a>
                                        <a className='nav_box_a' href="">Xorazm viloyati</a>
                                        <a className='nav_box_a' href="">Farg’ona viloyati</a>
                                        <a className='nav_box_a' href="">Andijon viloyati</a>
                                    </div>
                                </div>
                            </Link>
                            <div className="nav_box_up">Qatnashish <img className='nav_box_icon' src="/assets/image/nav_icon.png" alt="" />
                                <div className="nav_box_down">
                                    <div className="nav_box_down_left">
                                        <Link to='/individual' className='nav_box_a' >Individual</Link>
                                        <Link to='/companies' className='nav_box_a' >Kompaniyalar</Link>
                                        <Link to='/friends' className='nav_box_a' >Hamkorlar</Link>

                                    </div>
                                </div>
                            </div>
                            <div className="nav_box_up">Biz haqimizda <img className='nav_box_icon' src="/assets/image/nav_icon.png" alt="" />
                                <div className="nav_box_down">
                                    <div className="nav_box_down_left">
                                        <Link to='/we' className='nav_box_a' >Biz haqimizda</Link>
                                        <Link to='/report' className='nav_box_a' >2021-hisobot</Link>
                                        <Link to='/question' className='nav_box_a' >Savollarga javoblar</Link>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className="col-lg-2">
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