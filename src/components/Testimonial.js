import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);

const Testimonial = () => {
  const props = {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
  };
  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_testimonials">
        <div className="dizme_tm_main_title" data-align="center">
          <span>Testimonials</span>
          <h3>What My Clients Say</h3>
          <p>
            Most common methods for designing websites that work well on desktop
            is responsive and adaptive design
          </p>
        </div>
        <div className="list_wrapper">
          <div className="total">
            <div className="in">
              <Swiper {...props} className="">
                <SwiperSlide>
                  <div className="icon">
                    <img
                      className="svg"
                      src="img/svg/testimonials/quote.svg"
                      alt=""
                    />
                  </div>
                  <div className="text">
                    <p>
                      I rarely like to write reviews, but the Marketify team
                      truly deserve a standing ovation for their customer
                      support, customisation and most importantly, friendliness
                      and professionalism. Many thanks once again for everything
                      and hope that I get to deal with you again in the near
                      future.
                    </p>
                  </div>
                  <div className="short">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/4.jpg"
                      />
                    </div>
                    <div className="detail">
                      <h3>Mike Anderson</h3>
                      <span>Vivaco Studio</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="icon">
                    <img
                      className="svg"
                      src="img/svg/testimonials/quote.svg"
                      alt=""
                    />
                  </div>
                  <div className="text">
                    <p>
                      Really the Code Quality, Customer Support, and design are
                      awesome and its good support they are giving. They give an
                      instant solution to our needs. Really awesome. I will
                      strongly recommend to my friends. Simply amazing team and
                      amazing theme! Thank you from United States of America!
                    </p>
                  </div>
                  <div className="short">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/3.jpg"
                      />
                    </div>
                    <div className="detail">
                      <h3>Keita Smith</h3>
                      <span>ABC Group</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="icon">
                    <img
                      className="svg"
                      src="img/svg/testimonials/quote.svg"
                      alt=""
                    />
                  </div>
                  <div className="text">
                    <p>
                      Loved the template design, documentation, customizability
                      and the customer support from Marketify team! I am a noob
                      in programming with very little knowledge about coding but
                      the Marketify team helped me to launch my resume website
                      successfully. Much recommended!
                    </p>
                  </div>
                  <div className="short">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/6.jpg"
                      />
                    </div>
                    <div className="detail">
                      <h3>Alan Walker</h3>
                      <span>Web Designer</span>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="owl-dots"></div>
            </div>
            <div className="left_details">
              <div
                className="det_image one wow fadeIn"
                data-wow-duration="1s"
                data-img-url="img/testimonials/2.jpg"
              />
              <div
                className="det_image two wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                data-img-url="img/testimonials/1.jpg"
              />
              <div
                className="det_image three wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
                data-img-url="img/testimonials/3.jpg"
              />
              <div
                className="det_image four wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.6s"
                data-img-url="img/testimonials/4.jpg"
              />
              <span className="circle green animPulse" />
              <span className="circle yellow animPulse" />
              <span className="circle border animPulse" />
            </div>
            <div className="right_details">
              <div
                className="det_image one wow fadeIn"
                data-wow-duration="1s"
                data-img-url="img/testimonials/5.jpg"
              />
              <div
                className="det_image two wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                data-img-url="img/testimonials/6.jpg"
              />
              <div
                className="det_image three wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
                data-img-url="img/testimonials/7.jpg"
              />
              <span className="circle yellow animPulse" />
              <span className="circle purple animPulse" />
              <span className="circle border animPulse" />
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/testimonials/1.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
