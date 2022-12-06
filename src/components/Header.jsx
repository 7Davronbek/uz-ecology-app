import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="money">
              <h5 className='me-4'><span><img src="assets/icon/up.svg" alt="" /></span>12 367 700  сум</h5>
              <h5><span><img src="assets/icon/upRed.svg" alt="" /></span>8 954 934 сум</h5>
            </div>
            <h1>Tabiatdagi barcha narsalar biz uchun xizmat qiladi</h1>
            <Link to='/register'>ro'yxatdan o'tish</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header