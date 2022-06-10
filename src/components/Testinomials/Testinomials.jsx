import React from 'react'
import './Testinomials.css'
import AV1 from '../../assets/avatar_1.jpg'
import AV2 from '../../assets/avatar.jpg'
import AV3 from '../../assets/me.jpg'
import AV4 from '../../assets/me_2.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AV1,
    name: 'Kim Khanh',
    review: 'Gud'
  },
  {
    avatar: AV2,
    name: 'Kim Khanh',
    review: 'Job'
  },
  {
    avatar: AV3,
    name: 'Kim Khanh',
    review: 'Hehe'
  },
  {
    avatar: AV4,
    name: 'Kim Khanh',
    review: 'Hehe'
  },
]

const Testinomials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testinomials</h2>

      <Swiper className="container testinomials__container"
         // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
        >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testinomial">
          <div className="client__avatar">
            <img src= {avatar} alt="Ava1" />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
              {review}
            </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testinomials