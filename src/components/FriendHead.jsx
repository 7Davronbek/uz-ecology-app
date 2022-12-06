import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper";

const FriendHead = () => {
    return (
        <>
            <div className="FriendHead">
                <div className='PlantingOrganization'>
                    <div className='SellingOrganization'>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className='friend_head'>Hamkorlarimiz</h1>
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
                                <img src="/assets/image/friend_1.png" alt="O’zbekiston respublikasi ekologiya va atrof muhitni muhofaza qilish davlat qo’mitasi" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/assets/image/friend_2.png" alt="O’zbekiston respublikasi ekologiya va atrof muhitni muhofaza qilish davlat qo’mitasi" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/assets/image/friend_3.png" alt="O’zbekiston respublikasi ekologiya va atrof muhitni muhofaza qilish davlat qo’mitasi" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/assets/image/friend_4.png" alt="O’zbekiston respublikasi ekologiya va atrof muhitni muhofaza qilish davlat qo’mitasi" />
                            </SwiperSlide>
                        </Swiper>

                    </div>

                </div>
            </div>
        </>
    )
}

export default FriendHead