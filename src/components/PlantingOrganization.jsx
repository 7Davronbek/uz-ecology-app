import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";

const PlantingOrganization = () => {
    return (
        <div className='PlantingOrganization'>
            <div className='SellingOrganization'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>dARAXT ekib beruvchi tashkilotlar</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">

                        </div>
                    </div>
                </div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.8,
                            spaceBetween: 10,
                        },
                        767: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper text-center"
                >
                    <SwiperSlide>
                        <img src="assets/image/selling.png" alt="O’zbekiston respublikasi ekologiya va atrof muhitni muhofaza qilish davlat qo’mitasi" />
                        <h2>Yashil makon</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="assets/image/selling.png" alt="O’zbekiston respublikasi ekologiya va atrof muhitni muhofaza qilish davlat qo’mitasi" />
                        <h2>Yashil makon</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="assets/image/selling.png" alt="O’zbekiston respublikasi ekologiya va atrof muhitni muhofaza qilish davlat qo’mitasi" />
                        <h2>Yashil makon</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="assets/image/selling.png" alt="O’zbekiston respublikasi ekologiya va atrof muhitni muhofaza qilish davlat qo’mitasi" />
                        <h2>Yashil makon</h2>
                    </SwiperSlide>
                </Swiper>

            </div>

        </div>
    )
}

export default PlantingOrganization