import React from 'react'
import { Link } from 'react-router-dom'

const ToUsers = () => {
    return (
        <div className='ToUsers'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Foydalanuvchilarga</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <Link to='/' className="cards">
                            <div className="img"><img src="assets/image/toUsers1.png" alt="" /></div>
                            <div className="cardsBody">
                                <h2>Buyurtmachilarga</h2>
                                <h3>Davlat xaridlarining barcha turlari bo‘yicha buyurtmachilarga davlat xaridlari bo‘yicha maxsus portal haqida ma’lumot.</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <Link to='/' className="cards">
                            <div className="img"><img src="assets/image/toUsers1.png" alt="" /></div>
                            <div className="cardsBody">
                                <h2>Buyurtmachilarga</h2>
                                <h3>Davlat xaridlarining barcha turlari bo‘yicha buyurtmachilarga davlat xaridlari bo‘yicha maxsus portal haqida ma’lumot.</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <Link to='/' className="cards">
                            <div className="img"><img src="assets/image/toUsers1.png" alt="" /></div>
                            <div className="cardsBody">
                                <h2>Buyurtmachilarga</h2>
                                <h3>Davlat xaridlarining barcha turlari bo‘yicha buyurtmachilarga davlat xaridlari bo‘yicha maxsus portal haqida ma’lumot.</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <Link to='/' className="cards">
                            <div className="img"><img src="assets/image/toUsers1.png" alt="" /></div>
                            <div className="cardsBody">
                                <h2>Buyurtmachilarga</h2>
                                <h3>Davlat xaridlarining barcha turlari bo‘yicha buyurtmachilarga davlat xaridlari bo‘yicha maxsus portal haqida ma’lumot.</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="rightTree"><img src="assets/image/rightTree.png" alt="" /></div>
        </div>
    )
}

export default ToUsers