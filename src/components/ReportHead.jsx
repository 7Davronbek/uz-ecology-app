import React from 'react'
import { Link } from 'react-router-dom'

const ReportHead = () => {
    return (
        <>
            <div className="ReportHead">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="we_head_h">2022-hisobot</div>
                            <div className="we_head_p">2022-yilda ekilgan daraxtlar soni BO'YICHA 23 MILLION DARAXT EKIldi
                            </div>
                            <Link to=' ' className='we_head_a'>ro'yxatdan o'tish</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReportHead