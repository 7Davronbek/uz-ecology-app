import React from 'react'

const News = () => {
    return (
        <div className='News'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>yANGILIKLAR</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="cards">
                            <div className="img">
                                <img src="assets/image/news.png" alt="" />
                                <div className="blur"></div>
                            </div>
                            <div className="content">
                                <p>Bugun Davlat ekologiya qoʻmitasi himoyasi “Yashil makon” umumiymiliy loyihasi kuzgi mavsumi doirasidagi amallarga oshirilayotgan ishlar va Toshkent shahrida atmosfera havosidan namuna olish va monitoring nazorati media-tur tashkil etildi.</p>
                                <div className="wrap">
                                    <h6>03.11.2022</h6>
                                    <h5><span className="me-2"><img src="assets/icon/eye.svg" alt="" /></span> 118</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News