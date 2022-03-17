import { useEffect } from "react";
const Service = () => {
  useEffect(() => {
    let VanillaTilt = require("vanilla-tilt");
    VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
      maxTilt: 6,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 500,
      transition: true,
    });
  }, []);
  return (
    <div className="dizme_tm_section" id="service">
      <div className="dizme_tm_services">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Services</span>
            <h3>What I Do for Clients</h3>
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>
          </div>
          <div className="service_list">
            <ul>
              <li className="wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    <img
                      className="svg"
                      src="img/svg/service/anchor.svg"
                      alt=""
                    />
                    <img
                      className="back"
                      src="img/brushes/service/1.png"
                      alt=""
                    />
                  </span>
                  <div className="title">
                    <h3>Creative Design</h3>
                    <span className="price">
                      Starts from <span>$99</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                      Web design refers to the design of websites that are
                      displayed on the internet. It usually refers to the user
                      experience aspects of website development
                    </p>
                  </div>
                  <a className="dizme_tm_full_link" href="#" />
                  <img
                    className="popup_service_image"
                    src="img/service/1.jpg"
                    alt=""
                  />
                  <div className="service_hidden_details">
                    <div className="service_popup_informations">
                      <div className="descriptions">
                        <p>
                          Dizme is a leading web design agency with an
                          award-winning design team that creates innovative,
                          effective websites that capture your brand, improve
                          your conversion rates, and maximize your revenue to
                          help grow your business and achieve your goals.
                        </p>
                        <p>
                          {`In today’s digital world, your website is the first
                          interaction consumers have with your business. That's
                          why almost 95 percent of a user’s first impression
                          relates to web design. It’s also why web design
                          services can have an immense impact on your company’s
                          bottom line.`}
                        </p>
                        <p>
                          {`That’s why more companies are not only reevaluating
                          their website’s design but also partnering with Kura,
                          the web design agency that’s driven more than $2.4
                          billion in revenue for its clients. With over 50 web
                          design awards under our belt, we're confident we can
                          design a custom website that drives sales for your
                          unique business.`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                className="wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    <img
                      className="svg"
                      src="img/svg/service/physics.svg"
                      alt=""
                    />
                    <img
                      className="back"
                      src="img/brushes/service/2.png"
                      alt=""
                    />
                  </span>
                  <div className="title">
                    <h3>Graphic Design</h3>
                    <span className="price">
                      Starts from <span>$199</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                      Web design refers to the design of websites that are
                      displayed on the internet. It usually refers to the user
                      experience aspects of website development
                    </p>
                  </div>
                  <a className="dizme_tm_full_link" href="#" />
                  <img
                    className="popup_service_image"
                    src="img/service/2.jpg"
                    alt=""
                  />
                  <div className="service_hidden_details">
                    <div className="service_popup_informations">
                      <div className="descriptions">
                        <p>
                          Dizme is a leading web design agency with an
                          award-winning design team that creates innovative,
                          effective websites that capture your brand, improve
                          your conversion rates, and maximize your revenue to
                          help grow your business and achieve your goals.
                        </p>
                        <p>
                          {`In today’s digital world, your website is the first
                          interaction consumers have with your business. That's
                          why almost 95 percent of a user’s first impression
                          relates to web design. It’s also why web design
                          services can have an immense impact on your company’s
                          bottom line.`}
                        </p>
                        <p>
                          {`That’s why more companies are not only reevaluating
                          their website’s design but also partnering with Kura,
                          the web design agency that’s driven more than $2.4
                          billion in revenue for its clients. With over 50 web
                          design awards under our belt, we're confident we can
                          design a custom website that drives sales for your
                          unique business.`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    <img
                      className="svg"
                      src="img/svg/service/contact.svg"
                      alt=""
                    />
                    <img
                      className="back"
                      src="img/brushes/service/3.png"
                      alt=""
                    />
                  </span>
                  <div className="title">
                    <h3>UI/UX Design</h3>
                    <span className="price">
                      Starts from <span>$299</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                      Web design refers to the design of websites that are
                      displayed on the internet. It usually refers to the user
                      experience aspects of website development
                    </p>
                  </div>
                  <a className="dizme_tm_full_link" href="#" />
                  <img
                    className="popup_service_image"
                    src="img/service/3.jpg"
                    alt=""
                  />
                  <div className="service_hidden_details">
                    <div className="service_popup_informations">
                      <div className="descriptions">
                        <p>
                          Dizme is a leading web design agency with an
                          award-winning design team that creates innovative,
                          effective websites that capture your brand, improve
                          your conversion rates, and maximize your revenue to
                          help grow your business and achieve your goals.
                        </p>
                        <p>
                          {`In today’s digital world, your website is the first
                          interaction consumers have with your business. That's
                          why almost 95 percent of a user’s first impression
                          relates to web design. It’s also why web design
                          services can have an immense impact on your company’s
                          bottom line.`}
                        </p>
                        <p>
                          {`That’s why more companies are not only reevaluating
                          their website’s design but also partnering with Kura,
                          the web design agency that’s driven more than $2.4
                          billion in revenue for its clients. With over 50 web
                          design awards under our belt, we're confident we can
                          design a custom website that drives sales for your
                          unique business.`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                className="wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    <img className="svg" src="img/svg/service/web.svg" alt="" />
                    <img
                      className="back"
                      src="img/brushes/service/4.png"
                      alt=""
                    />
                  </span>
                  <div className="title">
                    <h3>Web Design</h3>
                    <span className="price">
                      Starts from <span>$399</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                      Web design refers to the design of websites that are
                      displayed on the internet. It usually refers to the user
                      experience aspects of website development
                    </p>
                  </div>
                  <a className="dizme_tm_full_link" href="#" />
                  <img
                    className="popup_service_image"
                    src="img/service/4.jpg"
                    alt=""
                  />
                  <div className="service_hidden_details">
                    <div className="service_popup_informations">
                      <div className="descriptions">
                        <p>
                          Dizme is a leading web design agency with an
                          award-winning design team that creates innovative,
                          effective websites that capture your brand, improve
                          your conversion rates, and maximize your revenue to
                          help grow your business and achieve your goals.
                        </p>
                        <p>
                          {`In today’s digital world, your website is the first
                          interaction consumers have with your business. That's
                          why almost 95 percent of a user’s first impression
                          relates to web design. It’s also why web design
                          services can have an immense impact on your company’s
                          bottom line.`}
                        </p>
                        <p>
                          {`That’s why more companies are not only reevaluating
                          their website’s design but also partnering with Kura,
                          the web design agency that’s driven more than $2.4
                          billion in revenue for its clients. With over 50 web
                          design awards under our belt, we're confident we can
                          design a custom website that drives sales for your
                          unique business.`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/service/5.png" alt="" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/service/6.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Service;
