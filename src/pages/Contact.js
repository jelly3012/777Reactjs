import React from "react";
import Iframe from "react-iframe";

import "../css/Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <div className="Contact-social">
        <h3>KẾT NỐI VỚI CHÚNG TÔI</h3>
        <div className="Contact-social-item">
          <a href="tel:+84869509777">
            <i className="fa-solid fa-phone"></i> 0869509777
          </a>
        </div>

        <div className="Contact-social-item">
          <a href="mailto:contact@777poker.vn">
            <i className="fa-solid fa-envelope"></i> contact@777poker.vn
          </a>
        </div>

        <div className="Contact-social-item">
          <a
            href="https://www.facebook.com/777clubecopark/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-facebook-f"></i> 777 Bridge & Poker Club
          </a>
        </div>
      </div>

      <div className="Contact-location">
        <h3>LOCATION</h3>
        <p>
          Marina Arc, 18A, Khu đô thị Ecopark, Văn Giang, Hưng Yên 160000, Việt
          Nam
        </p>
        <div className="Contact-location-map">
          <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2215.523356732793!2d105.93690762396926!3d20.95045502400026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135af58df962323%3A0xa8d44277ff39af7c!2s777%20Poker%20Club!5e0!3m2!1svi!2s!4v1666489749054!5m2!1svi!2s"></Iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
