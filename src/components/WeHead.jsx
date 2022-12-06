import React from 'react'
import { Link } from 'react-router-dom'

const WeHead = () => {
    return (
        <>
            <div className="WeHead">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="we_head_h">Biz haqimizda</div>
                            <div className="we_head_p">BIZ BITTA DARAXT EKIB O'rmonlarni qayta tiklaymiz
                            </div>
                            <Link to=' ' className='we_head_a'>ro'yxatdan o'tish</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeHead