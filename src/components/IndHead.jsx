import React from 'react'
import { Link } from 'react-router-dom'

const IndHead = () => {
    return (
        <>
            <div className="IndHead">
                <div className="container">
                    <div className="row">
                        <div className="col-7">
                            <div className="ind_head_h">Daraxt elchilari</div>
                            <div className="ind_head_p">Mahalliy jamoaga ta'sir qilish uchun daraxt elchisi bo'ling</div>
                            <Link to='' className="ind_head_a">ro'yxatdan o'tish</Link>
                        </div>
                        <div className="col-5">
                            <img src="/assets/image/ind_head.png" alt="" className="ind_head_img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndHead