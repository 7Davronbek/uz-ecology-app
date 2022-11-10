import React from 'react'
import UserLayout from '../components/user/UserLayout'

const ControlPanel = () => {
    return (
        <div className='ControlPanel'>
            <UserLayout>
                <h1>Xozirgacha ekilgan daraxtlar soni</h1>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="cards">
                            <div className="cardsTop">Qabul qilingan</div>
                            <div className="cardsBody">45 219</div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="cards">
                            <div className="cardsTop">Tasdiqlangan</div>
                            <div className="cardsBody">34 044</div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="cards">
                            <div className="cardsTop">Jarayonda</div>
                            <div className="cardsBody">2 187</div>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </div>
    )
}

export default ControlPanel