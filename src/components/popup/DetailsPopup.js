const DetailsPopup = ({ open, close, data }) => {
  return (
    <div className={`dizme_tm_modalbox ${open ? "opened" : ""}`}>
      <div className="box_inner">
        <div className="close">
          <a href="#" onClick={() => close()}>
            <i className="icon-cancel" />
          </a>
        </div>
        {data && data.details && (
          <div className="description_wrap">
            <div className="popup_details">
              <div className="top_image">
                <img src="img/thumbs/4-2.jpg" alt="" />
                <div
                  className="main"
                  data-img-url={data && data.imgs && data.imgs.main}
                  style={{
                    backgroundImage: `url(${
                      data && data.imgs && data.imgs.main
                    })`,
                  }}
                />
              </div>
              <div className="portfolio_main_title">
                <h3>{data && data.title}</h3>
                <span>
                  <a href="#">Detail</a>
                </span>
                <div />
              </div>
              <div className="main_details">
                <div className="textbox">
                  {data &&
                    data.details &&
                    data.details.textBox &&
                    data.details.textBox.map((text, i) => (
                      <p key={i}>{text}</p>
                    ))}
                </div>
                <div className="detailbox">
                  <ul>
                    {data && data.details.client && (
                      <li>
                        <span className="first">Client</span>
                        <span>{data.details.client}</span>
                      </li>
                    )}
                    {data && data.categoryName && (
                      <li>
                        <span className="first">Category</span>
                        <span>{data.categoryName}</span>
                      </li>
                    )}
                    {data && data.details.date && (
                      <li>
                        <span className="first">Date</span>
                        <span>{data.details.date}</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="additional_images">
                <ul>
                  {data &&
                    data.details &&
                    data.details.imgs.map((img, i) => (
                      <li key={i}>
                        <div className="list_inner">
                          <div className="my_image">
                            <img src="img/thumbs/4-2.jpg" alt="" />
                            <div
                              className="main"
                              data-img-url={img}
                              style={{
                                backgroundImage: `url(${img})`,
                              }}
                            />
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default DetailsPopup;
