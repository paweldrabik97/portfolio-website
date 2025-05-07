import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.scss";

const testimonials = [
  {
    author: "Jadzia",
    role: "General Manager at Wojczella Limited Company",
    text: "Working with Paweł on our festival website was an absolute pleasure. From the very beginning, he showed a deep understanding of our vision and translated it into a beautifully designed, user-friendly site that exceeded our expectations. Communication was smooth, deadlines were always met, and their attention to detail ensured everything ran flawlessly. The website not only looks fantastic but also helped us attract more visitors and streamline ticket sales. I can wholeheartedly recommend Paweł to anyone looking for a reliable, creative, and professional web developer.",
    imgSrc: "src/assets/jadzia.jpg",
  },
  {
    author: "Tomek",
    role: "Project Manager",
    text: "Projekt wykonany szybko i profesjonalnie.",
    imgSrc: "src/assets/react.svg",
  },
  {
    author: "Kasia",
    role: "Project Manager",
    text: "Jestem bardzo zadowolona z efektów pracy!",
    imgSrc: "src/assets/react.svg",
  },
];

const TestimonialsSlider = () => {
  return (
    <div className="testimonial-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoHeight={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        loop
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author-container">
                {t.imgSrc && (
                  <img
                    src={t.imgSrc}
                    alt={`${t.author} profile`}
                    className="testimonial-author-img"
                  />
                )}
                <div className="testimonial-author-profile">
                  <p className="testimonial-author">{t.author}</p>
                  <p className="testimonial-role">{t.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSlider;
