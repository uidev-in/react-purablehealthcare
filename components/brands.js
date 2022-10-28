import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import Apollo from "@images/partner/apollo_hospital.png";
import Fortis from "@images/partner/fortis_hospital.png";
import Batra from "@images/partner/batra_hospital.png";
import MGH from "@images/partner/mgh_hospital.png";
import Aiims from "@images/partner/aiims_hospital.png";

const Brands = () => {
  const CarouselOptions = {
    slidesPerView: 4,
    spaceBetween: 100,
    breakpoints: {
      0: { slidesPerView: 2, spaceBetween: 30 },
      480: { slidesPerView: 3, spaceBetween: 30 },
      991: { slidesPerView: 4, spaceBetween: 50 },
      1199: { slidesPerView: 5, spaceBetween: 100 },
    },
  };
  return (
    <section className="brand-one">
      <Container>
        <Swiper className="brand-one__carousel" {...CarouselOptions}>
          <SwiperSlide className="item">
            <img src={Apollo} alt="Apollo" className="img-fluid" />
          </SwiperSlide>
          <SwiperSlide className="item">
            <img src={Fortis} alt="Fortis" className="img-fluid" />
          </SwiperSlide>
          <SwiperSlide className="item">
            <img src={Batra} alt="Batra" className="img-fluid" />
          </SwiperSlide>
          <SwiperSlide className="item">
            <img src={MGH} alt="MGH" className="img-fluid" />
          </SwiperSlide>
          <SwiperSlide className="item">
            <img src={Aiims} alt="Aiims" className="img-fluid" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default Brands;
