import { Swiper, SwiperSlide } from 'swiper/react'

import { Container } from './styles'

function Slider({ info, title }) {
  console.log(info, title)
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCurson
        spaceBetween={10}
        slidesPerView={'auto'}
        className="swiper"
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <div style={{ color: 'white' }}>{item.original_title}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default Slider
