import React from 'react'
import { Link } from 'react-router-dom'

const CompHead = () => {
    return (
        <>
            <div className="CompHead">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="comp_head_h">Barqarorlik uchun kompaniyalar</div>
                            <div className="comp_head_p"><span>B</span>IZ TA'SIR QILGAN VA TA'SIR QILGAN KORXONALAR BILAN ISHLAYMIZ ULARNING BARQARORLIK TABABABUSLARINI YANGILAYISHGA YORDAM BERING
                            </div>
                            <Link to='/' className="comp_head_a">Ro'yxatdan o'tish</Link>
                        </div>
                        <div className="col-lg-6">
                            <img src="/assets/image/comp_head.png" alt="" className="comp_head_img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompHead