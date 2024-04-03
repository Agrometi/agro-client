import {
  LocationIcon,
  EmailIcon,
  ViberIcon,
  WhatsUpIcon,
  PhoneIcon,
  FacebookIcon,
} from "@/components/Layouts/Icons";
import * as Styled from "./contactSection.styled";

type ContactT = {};

const ContactSection: React.FC<ContactT> = () => {
  return (
    <Styled.ContactSection>
      <div className="contact-box col-2">
        <span className="contact-box__icon">
          <LocationIcon />
        </span>

        <div className="contact-box__detail">
          <span>ქ.ქუთაისი შარტავას 2/10 - 4600</span>
        </div>
      </div>

      <a href="mailto:agroornament@gmail.com" className="contact-box col-2">
        <span className="contact-box__icon">
          <EmailIcon />
        </span>

        <div className="contact-box__detail">
          <span>agroornament@gmail.com</span>
        </div>
      </a>

      <a href="tel:+995555145719" className="contact-box col-2">
        <span className="contact-box__icon">
          <PhoneIcon />
        </span>

        <div className="contact-box__detail">
          <span>+995 555 14 57 19</span>
        </div>
      </a>

      <a
        href="https://wa.me/555145719"
        referrerPolicy="no-referrer"
        target="_blank"
        className="contact-box col-2"
      >
        <span className="contact-box__icon">
          <WhatsUpIcon />
        </span>

        <div className="contact-box__detail">
          <span>WhatsUp</span>
        </div>
      </a>

      <a
        href="viber://chat?number=555145719"
        referrerPolicy="no-referrer"
        target="_blank"
        className="contact-box col-2"
      >
        <span className="contact-box__icon">
          <ViberIcon />
        </span>

        <div className="contact-box__detail">
          <span>Viber</span>
        </div>
      </a>

      <a
        className="contact-box col-2"
        href="https://www.facebook.com/agrometi"
        target="_blank"
        referrerPolicy="no-referrer"
      >
        <span className="contact-box__icon">
          <FacebookIcon />
        </span>

        <div className="contact-box__detail">
          <span>Facebook</span>
        </div>
      </a>

      {/* <div className="contact-box col-3">
        <span className="contact-box__icon">
          <TwitterIcon />
        </span>

        <div className="contact-box__detail">
          <span>Twitter</span>
        </div>
      </div>

      <div className="contact-box col-3">
        <span className="contact-box__icon">
          <InstagramIcon />
        </span>

        <div className="contact-box__detail">
          <span>Instagram</span>
        </div>
      </div> */}
    </Styled.ContactSection>
  );
};

export default ContactSection;
