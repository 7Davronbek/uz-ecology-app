import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h1>Tabiatdagi barcha narsalar biz uchun xizmat qiladi</h1>
                    <Link to='/reports'>ro'yxatdan o'tish</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header