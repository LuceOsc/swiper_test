import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
import '../node_modules/swiper/swiper-bundle.min.css';


export const Slider = ({ slides }) => {
    return (
      <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.image}>
            <img src={slide.image} alt={slide.title}/>
          </SwiperSlide>
        ))}
      </Swiper>
    )
  
  }