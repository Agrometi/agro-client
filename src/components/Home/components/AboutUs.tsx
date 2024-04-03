import { Link } from "react-router-dom";

import {
  TelegramIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  MessageIcon,
} from "@/components/Layouts/Icons";
import * as Styled from "./styles/aboutUs.styled";

type AboutUsT = {};

const AboutUs: React.FC<AboutUsT> = () => {
  return (
    <Styled.AboutUs>
      <div className="about-us__left">
        <h1 className="logo">Agro</h1>

        <p className="about-us__left-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          voluptatum asperiores quisquam minus ullam ad repellendus iure dicta
          quidem non?
        </p>

        <div className="about-us__left-email">
          <label htmlFor="">Email</label>
          <button>
            <TelegramIcon />
          </button>
        </div>

        <div className="about-us__left-socials">
          <Link to={""}>
            <FacebookIcon />
          </Link>

          <Link to={""}>
            <TwitterIcon />
          </Link>

          <Link to={""}>
            <InstagramIcon />
          </Link>
        </div>

        <footer className="about-us__left-footer">
          <p>&copy;Agro. All Rights Reserved.</p>

          <div>
            <Link to={""}>About Us</Link>
            <Link to={""}>Contact Us</Link>
          </div>
        </footer>
      </div>

      <div className="about-us__right">
        <h3 className="about-us__right-title">Opening Hours</h3>

        <div className="date-box">
          <span>Mon-Sat:</span>
          <span>09 AM To 05 PM</span>
        </div>

        <div className="date-box">
          <span>Sunday:</span>
          <span>Closed</span>
        </div>

        <hr />

        <div className="happy-hours">
          <p>* Happy Hour Every Friday Night</p>
          <p>Between 2 &mdash; 6 PM</p>
        </div>

        <div className="support-box">
          <p>24 * 7 Hours Support</p>

          <div>
            <span>
              <MessageIcon />
            </span>
            <span>(287)875468</span>
          </div>
        </div>
      </div>
    </Styled.AboutUs>
  );
};

export default AboutUs;
