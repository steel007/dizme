import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage } from "../utilits";

const Portfolio = () => {
  useEffect(() => {
    const dizme_tm_portfolio_animation_wrap = document.querySelectorAll(
        ".dizme_tm_portfolio_animation_wrap"
      ),
      dizme_tm_portfolio_titles = document.querySelector(
        ".dizme_tm_portfolio_titles"
      );
    dizme_tm_portfolio_animation_wrap.forEach((element) => {
      element.addEventListener("mousemove", () => {
        let title = element.getAttribute("data-title"),
          category = element.getAttribute("data-category");
        if (title) {
          dizme_tm_portfolio_titles.classList.add("visible");
          dizme_tm_portfolio_titles.innerHTML =
            title + '<span class="work__cat">' + category + "</span>";
        }
        document.addEventListener("mousemove", (e) => {
          dizme_tm_portfolio_titles.style.left = `${e.clientX - 10}px`;
          dizme_tm_portfolio_titles.style.top = `${e.clientY + 25}px`;
        });
      });
      element.addEventListener("mouseleave", () => {
        dizme_tm_portfolio_titles.classList.remove("visible");
      });
    });
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 300);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    dataImage();
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");
  return (
    <div className="dizme_tm_section" id="portfolio">
      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Portfolio</span>
            <h3>My Amazing Works</h3>
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>
          </div>
          <div className="portfolio_filter">
            <ul>
              <li>
                <a
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("youtube")}`}
                  onClick={handleFilterKeyChange("youtube")}
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("vimeo")}`}
                  onClick={handleFilterKeyChange("vimeo")}
                >
                  Vimeo
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("soundcloud")}`}
                  onClick={handleFilterKeyChange("soundcloud")}
                >
                  Soundcloud
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("popup")}`}
                  onClick={handleFilterKeyChange("popup")}
                >
                  Popup
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer  ${activeBtn("detail")}`}
                  onClick={handleFilterKeyChange("detail")}
                >
                  Detail
                </a>
              </li>
            </ul>
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Mockup Shape"
                    data-category="Youtube"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/embed/7e90gBu4pas?autoplay=1"
                    >
                      <img src="img/thumbs/42-56.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/1.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Mockup Shape</h3>
                    <span>Youtube</span>
                  </div>
                </div>
              </li>
              <li className="vimeo grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Ave Bottle"
                    data-category="Vimeo"
                  >
                    <a
                      className="popup-vimeo"
                      href="https://player.vimeo.com/video/337293658?autoplay=1"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/2.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Ave Bottle</h3>
                    <span>Vimeo</span>
                  </div>
                </div>
              </li>
              <li className="soundcloud grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Magic Art"
                    data-category="Soundcloud"
                  >
                    <a
                      className="soundcloude_link mfp-iframe audio"
                      href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    >
                      <img src="img/thumbs/42-56.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/3.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Magic Art</h3>
                    <span>Soundcloud</span>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Scott Felix"
                    data-category="Popup"
                  >
                    <a className="zoom" href="img/portfolio/5.jpg">
                      <img src="img/thumbs/42-56.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/5.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Blue Lemon</h3>
                    <span>Popup</span>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Art Stone"
                    data-category="Popup"
                  >
                    <a className="zoom" href="img/portfolio/4.jpg">
                      <img src="img/thumbs/42-34.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/4.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Art Stone</h3>
                    <span>Popup</span>
                  </div>
                </div>
              </li>

              <li className="detail grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Global Evolution"
                    data-category="Detail"
                  >
                    <a className="portfolio_popup" href="#">
                      <img src="img/thumbs/42-34.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/6.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Global Evolution</h3>
                    <span>Detail</span>
                  </div>
                  <div className="hidden_content">
                    <div className="popup_details">
                      <div className="main_details">
                        <div className="textbox">
                          <p>
                            We live in a world where we need to move quickly and
                            iterate on our ideas as flexibly as possible.
                          </p>
                          <p>
                            {` Mockups are useful both for the creative phase of
                            the project - for instance when you're trying to
                            figure out your user flows or the proper visual
                            hierarchy - and the production phase when they phase
                            when they will represent the target product.
                            Building mockups strikes the ideal balance ease of
                            modification.`}
                          </p>
                        </div>
                        <div className="detailbox">
                          <ul>
                            <li>
                              <span className="first">Client</span>
                              <span>Alvaro Morata</span>
                            </li>
                            <li>
                              <span className="first">Category</span>
                              <span>
                                <a href="#">Detail</a>
                              </span>
                            </li>
                            <li>
                              <span className="first">Date</span>
                              <span>March 07, 2021</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="additional_images">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/thumbs/4-2.jpg" alt="" />
                                <div
                                  className="main"
                                  data-img-url="img/portfolio/1.jpg"
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/thumbs/4-2.jpg" alt="" />
                                <div
                                  className="main"
                                  data-img-url="img/portfolio/2.jpg"
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="list_inner">
                              <div className="my_image">
                                <img src="img/thumbs/4-2.jpg" alt="" />
                                <div
                                  className="main"
                                  data-img-url="img/portfolio/3.jpg"
                                />
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
