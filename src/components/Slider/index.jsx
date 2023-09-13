import { Swiper, SwiperSlide } from 'swiper/react'

import Card from '../Card'
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
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default Slider
