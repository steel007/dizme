const Contact = () => {
  return (
    <div className="dizme_tm_section" id="contact">
      <div className="dizme_tm_contact">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Contact Me</span>
            <h3>I Want To Hear From You</h3>
            <p>
              Please fill out the form on this section to contact with me. Or
              call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
            </p>
          </div>
          <div className="contact_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <ul>
                <li>
                  <div className="list_inner">
                    <div className="icon orangeBackground">
                      <i className="icon-location orangeText" />
                    </div>
                    <div className="short">
                      <h3>Address</h3>
                      <span>20, Somewhere in world</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="icon greenBackground">
                      <i className="icon-mail-1 greenText" />
                    </div>
                    <div className="short">
                      <h3>Email</h3>
                      <span>
                        <a href="#">hello@dizme.com</a>
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="icon purpleBackground">
                      <i className="icon-phone purpleText" />
                    </div>
                    <div className="short">
                      <h3>Phone</h3>
                      <span>+123 456 7890</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <div className="fields">
                <form
                  action="/"
                  method="post"
                  className="contact_form"
                  id="contact_form"
                  autoComplete="off"
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div className="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                  <div className="input_list">
                    <ul>
                      <li>
                        <input id="name" type="text" placeholder="Your Name" />
                      </li>
                      <li>
                        <input
                          id="email"
                          type="text"
                          placeholder="Your Email"
                        />
                      </li>
                      <li>
                        <input
                          id="phone"
                          type="number"
                          placeholder="Your Phone"
                        />
                      </li>
                      <li>
                        <input id="subject" type="text" placeholder="Subject" />
                      </li>
                    </ul>
                  </div>
                  <div className="message_area">
                    <textarea
                      id="message"
                      placeholder="Write your message here"
                      defaultValue={""}
                    />
                  </div>
                  <div className="dizme_tm_button">
                    <a id="send_message" href="#">
                      <span>Submit Now</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
              <img src="img/brushes/contact/2.png" alt="" />
            </div>
          </div>
          <div className="dizme_tm_map wow fadeInUp" data-wow-duration="1s">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="100%"
                  height={375}
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder={0}
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                />
                <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon" />
                <br />
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".mapouter{position:relative;text-align:right;height:375px;width:100%;}",
                  }}
                />
                <a href="https://www.embedgooglemap.net">
                  how to add google map
                </a>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".gmap_canvas {overflow:hidden;background:none!important;height:375px;width:100%;}",
                  }}
                />
              </div>
            </div>
            {/* Get your API here https://www.embedgooglemap.net */}
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/contact/1.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Contact;
