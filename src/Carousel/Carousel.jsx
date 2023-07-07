import React from "react";

import donut1 from "./image/donut-1.jpg";
import donut2 from "./image/donut-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "./Carousel.css";

const slider = [
  {
    title: "Pastry 1",
    description:
      "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: "https://images.unsplash.com/photo-1612240498936-65f5101365d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    title: "Pastry 2",
    description:
      "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    title: "Pastry 3",
    description:
      "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFzdHJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },

  {
    title: "Pastry 4",
    description:
      "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: "https://images.unsplash.com/photo-1588685723157-4bcbf57fba57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWNsYWlyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Pastry 5",
    description:
      "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: "https://images.unsplash.com/photo-1558326567-98ae2405596b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFzdHJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
];

const Carousel = () => {
  return (
    <div className="carousel">
      <div>
        <div className="carousel-content">
          <span>discover</span>
          <h1>Fifth Avenue Pastries</h1>
          <hr />
          <p>
            A pastry shop totally dedicated to éclairs, created according to the
            seasons. With their multiple colours, they can be admired like a
            painting and enjoyed throughout..
          </p>
          <a href="#" className="slider-btn">
            download app
          </a>
        </div>
      </div>
      <Swiper
        className="myswiper"
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1560: {
            slidesPerView: 3,
          },
        }}
      >
        {slider.map((data) => (
          <SwiperSlide
            style={{ backgroundImage: `url(${data.url})` }}
            className="myswiper-slider"
          >
            <div>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <a href={`${data.url}`} target="_blank" className="slider-btn">
                explore
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <img src={donut1} alt="bgimage" className="donut1" />
      <img src={donut2} alt="bgimage" className="donut2" />
    </div>
  );
};

export default Carousel;
