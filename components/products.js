import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import Puralbumen from "@images/products/Puralbumen_Powder.jpeg";
import Purwhey from "@images/products/Purwhey_Powder.jpeg";
import Neofeed from "@images/products/Neofeed_Powder.jpeg";

const Products = () => {
  // const CarouselOptions = {
  //   slidesPerView: 3,
  //   spaceBetween: 100,
  //   breakpoints: {
  //     0: { slidesPerView: 2, spaceBetween: 30 },
  //     480: { slidesPerView: 3, spaceBetween: 30 },
  //     991: { slidesPerView: 4, spaceBetween: 50 },
  //     1199: { slidesPerView: 5, spaceBetween: 100 },
  //   },
  // };
  return (
    <section className="brand-one">
      <Container>
        <div className="block-title text-center">
          <p>Our Product</p>
          <h3>Our Products</h3>
        </div>

        <Swiper spaceBetween={50} slidesPerView={3}>
          <SwiperSlide>
            <div className="product mb-40">
              <div className="product__img">
                <a href="#">
                  <img
                    src={Puralbumen}
                    alt=""
                    className="img-fluid"
                    style={{ opacity: 1 }}
                  />
                </a>
                <div className="product-action text-center">
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className="product__content text-center pt-30">
                <h4 className="pro-title">
                  <a href="#">Puralbumen Powder</a>
                </h4>
                <div className="price">
                  <span> ₹1399.00</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product mb-40">
              <div className="product__img">
                <a href="#">
                  <img
                    src={Neofeed}
                    alt=""
                    className="img-fluid"
                    style={{ opacity: 1 }}
                  />
                </a>
                <div className="product-action text-center">
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className="product__content text-center pt-30">
                <h4 className="pro-title">
                  <a href="#">Neofeed Powder</a>
                </h4>
                <div className="price">
                  <span> ₹1199.00</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product mb-40">
              <div className="product__img">
                <a href="#">
                  <img
                    src={Purwhey}
                    alt=""
                    className="img-fluid"
                    style={{ opacity: 1 }}
                  />
                </a>
                <div className="product-action text-center">
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className="product__content text-center pt-30">
                <h4 className="pro-title">
                  <a href="#">Purwhey Powder</a>
                </h4>
                <div className="price">
                  <span> ₹1199.00</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default Products;
