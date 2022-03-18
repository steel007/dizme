import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, fatchData, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    setData(await fatchData("/static/portfolio.json"));
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      dataImage();
      portfolioHover();
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
    }, 1000);
  }, []);
  useEffect(() => {
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

  // Popup
  const [popup, setPopup] = useState(false);
  const [popupData, setPopupData] = useState({});

  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup
        open={popup}
        close={() => setPopup(false)}
        data={popupData}
      />
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
              {data &&
                data.categorys &&
                data.categorys.map((data, i) => (
                  <li>
                    <a
                      className={`c-pointer ${activeBtn(data.filterOption)}`}
                      onClick={handleFilterKeyChange(data.filterOption)}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              {data &&
                data.contentElement &&
                data.contentElement.map((data, i) => (
                  <li className={`${data.categoryName} grid-item`}>
                    <div className="inner">
                      <div
                        className="entry dizme_tm_portfolio_animation_wrap"
                        data-title={data.title}
                        data-category={data.name}
                      >
                        {data.url ? (
                          <a
                            className={`popup-${data.categoryName}`}
                            href={data.url}
                          >
                            <img src={data.imgs && data.imgs.thumbs} alt="" />
                            <div
                              className="main"
                              data-img-url={data.imgs && data.imgs.main}
                            />
                          </a>
                        ) : (
                          <a
                            className={`popup-${data.categoryName}`}
                            href="#"
                            onClick={() => {
                              setPopupData(data);
                              setPopup(true);
                            }}
                          >
                            <img src={data.imgs && data.imgs.thumbs} alt="" />
                            <div
                              className="main"
                              data-img-url={data.imgs && data.imgs.main}
                            />
                          </a>
                        )}
                      </div>
                      <div className="mobile_title">
                        <h3>{data.title}</h3>
                        <span>{data.name}</span>
                      </div>
                    </div>
                  </li>
                ))}
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
