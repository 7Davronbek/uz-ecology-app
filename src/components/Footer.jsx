import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='Footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Link className='logo' to='/'>
                                <span><img src="assets/image/logo.svg" alt="" /></span>
                                <span className='text'>O’zbekiston respublikasi ekologiya
                                    va atrof muhitni muhofaza qilish
                                    davlat qo’mitasi</span>
                            </Link>
                        </div>
                        <div className="col-lg-3 ms-auto rightWrap">
                            <a target={'_blank'} rel="noreferrer" href="tel: +998 71 207-11-07">Ishonch telefonlari: +998 71 207-11-07</a>
                            <a target={'_blank'} rel="noreferrer" href="tel: 11 57">Qisqa raqam: 11 57</a>
                            <a target={'_blank'} rel="noreferrer" href="tel: +99871 207-07-70"> Telefon: (+99871) 207-07-70 (5001#)</a>
                            <a target={'_blank'} rel="noreferrer" href=" https://mail.google.com/mail/u/0/?fs=1&amp;tf=cm&amp;source=mailto&amp;to=info@eco.gov.uz">Pochta: info@eco.gov.uz</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerLine"></div>
            <div className="footerLogo">
                <a target={'_blank'} rel="noreferrer" href="https://zamaan.uz/">@ Copyright 2022 <span><img src="assets/icon/logo.svg" alt="" /></span>  All rights reserved.</a>
            </div>
        </>
    )
}

export default Footer